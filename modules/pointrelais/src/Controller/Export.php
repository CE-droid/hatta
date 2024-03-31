<?php
namespace Anis\Pointrelais\Controller;

use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController;
use Symfony\Component\HttpFoundation\Response;

class Export extends FrameworkBundleAdminController
{
   
    public function indexAction()
    {   
       
        $sql = "SELECT 
        cu.firstname AS first_name,
        cu.lastname AS last_name,
        o.id_order, 
        o.reference, 
        o.total_paid_tax_incl, 
        o.id_customer,
        od.product_name,
        od.product_reference,
        od.product_quantity,
        (cu.id_customer IS NULL) AS deleted_customer, 
        o.date_add, 
        cl.name AS country_name, 
        a.address1 AS address,
        a.phone AS phone_number,
        pr.wilaya, -- Replace field1 with the actual field name you want to select from point_relais
        pr.commune, -- Replace field2 with the actual field name you want to select from point_relais
        pr.id_point_relais,
        (
            SELECT IF(count(so.id_order) > 0, 0, 1) 
            FROM " . _DB_PREFIX_ . "orders so 
            WHERE (so.id_customer = o.id_customer) AND (so.id_order < o.id_order) 
            LIMIT 1
        ) AS new 
    FROM 
        " . _DB_PREFIX_ . "orders o 
    LEFT JOIN 
        " . _DB_PREFIX_ . "customer cu ON o.id_customer = cu.id_customer 
    LEFT JOIN 
        " . _DB_PREFIX_ . "currency cur ON o.id_currency = cur.id_currency 
    INNER JOIN 
        " . _DB_PREFIX_ . "address a ON o.id_address_delivery = a.id_address 
    LEFT JOIN 
        " . _DB_PREFIX_ . "order_state os ON o.current_state = os.id_order_state 
    LEFT JOIN 
        " . _DB_PREFIX_ . "shop s ON o.id_shop = s.id_shop 
    INNER JOIN 
        " . _DB_PREFIX_ . "country c ON a.id_country = c.id_country 
    INNER JOIN 
        " . _DB_PREFIX_ . "country_lang cl ON c.id_country = cl.id_country AND cl.id_lang = 1 
    LEFT JOIN 
        " . _DB_PREFIX_ . "order_state_lang osl ON os.id_order_state = osl.id_order_state AND osl.id_lang = 1 
    LEFT JOIN 
        " . _DB_PREFIX_ . "order_detail od ON o.id_order = od.id_order
    LEFT JOIN 
        " . _DB_PREFIX_ . "point_relais pr ON o.id_order = pr.id_order
    WHERE 
        (o.id_shop IN ('1')) AND (os.id_order_state = '3') 
    ORDER BY 
        o.id_order DESC 
    LIMIT 
        50
    ";
        $colis_complet = \Db::getInstance()->executeS($sql);
       
        $results = $this->groupOrderDetails($colis_complet);
       
        
        
        return $this->render('@Modules/pointrelais/views/templates/index.html.twig',
        [ 
            'enableSidebar' =>true,
            'layoutTitle' => $this->trans('Exporter les commandes','Modules.Newmodule.Admin'),
            'results' => $results
        ]);
    }
    function groupOrderDetails($orderDetails) {
        $groupedOrders = [];
    
        foreach ($orderDetails as $orderDetail) {
            $idOrder = $orderDetail['id_order'];
    
            if (!isset($groupedOrders[$idOrder])) {
                $groupedOrders[$idOrder] = [
                    'id_order' => $orderDetail['id_order'],
                    'reference' => $orderDetail['reference'],
                    'total_paid_tax_incl' => $orderDetail['total_paid_tax_incl'],
                    // Add other columns here that you want to keep
                    'product_names' => [],
                    'product_references' => [],
                    'product_quantities' => [],
                    'first_name' => $orderDetail['first_name'],
                    'last_name' => $orderDetail['last_name'],
                    'date_add' => $orderDetail['date_add'],
                    'country_name' => $orderDetail['country_name'],
                    'address' => $orderDetail['address'],
                    'phone_number' => $orderDetail['phone_number'],
                    'wilaya' => $orderDetail['wilaya'],
                    'commune' => $orderDetail['commune'],
                    'id_point_relais' => $orderDetail['id_point_relais'],
                    
                ];
            }
    
            $groupedOrders[$idOrder]['product_names'][] = $orderDetail['product_name'];
            $groupedOrders[$idOrder]['product_references'][] = $orderDetail['product_reference'];
            $groupedOrders[$idOrder]['product_quantities'][] = $orderDetail['product_quantity'];
        }
    
        // Concatenate arrays and implode with commas
        foreach ($groupedOrders as &$order) {
            $order['product_names'] = implode(', ', $order['product_names']);
            $order['product_references'] = implode(', ', $order['product_references']);
            $order['product_quantities'] = implode(', ', $order['product_quantities']);
        }
    
        return $groupedOrders;
    }
    function combineOrderDetails($colis_complet, $j_doc) {
        // Group order details by id_order
        $groupedOrderDetails = [];
        foreach ($colis_complet as $orderDetail) {
            $idOrder = $orderDetail['id_order'];
            if (!isset($groupedOrderDetails[$idOrder])) {
                $groupedOrderDetails[$idOrder] = [];
            }
            $groupedOrderDetails[$idOrder][] = $orderDetail;
        }
       
        // Combine orders with order details
        $combinedOrders = [];
        foreach ($j_doc as $j) {
            $idOrder = $j['id_order'];
            if (isset($groupedOrderDetails[$idOrder])) {
                $details = $groupedOrderDetails[$idOrder];
                $concatenatedDetails = [];
                foreach ($details as $detail) {
                    $concatenatedDetails[] = $detail['product_names'] . ': ' . $detail['product_quantities'];
                }
                $j['order_details'] = implode(', ', $concatenatedDetails);
            } else {
                $j['order_details'] = ''; // Or any default value if no details found
            }
            $combinedOrders[] = $j;
        }
    
        return $combinedOrders;
    }
    
    
}