<?php 
declare(strict_type=1);
if (!defined('_PS_VERSION_')) {
    exit;
}
use Anis\Pointrelais\install\Installer;
require_once __DIR__ . '/vendor/autoload.php';
class Pointrelais extends Module{
    public function __construct(){
        $this->name = 'pointrelais';
        $this->tab = 'administration';
        $this->version = '1.0.0';
        $this->author = 'Anis';
        $this->need_instance = 0;

        $this->bootstrap = true;
        parent::__construct();

        $this->displayName = $this->trans('point de relais', [], 'Modules.Pointrelais.Admin');
        $this->description = $this->trans('ajouter les point de relais', [], 'Modules.Pointrelais.Admin');

        $this->ps_versions_compliancy = ['min' => '1.7.1.0', 'max' => _PS_VERSION_];
        $installer = new installer;
        //dump(   $installer->install($this));die;
      
       
    }
    public function install()
    {
       if (!Db::getInstance()->executeS("SHOW TABLES LIKE '" . _DB_PREFIX_ . "point_relais'")) {
            // Créez la table si elle n'existe pas
            $sql = "CREATE TABLE IF NOT EXISTS `" . _DB_PREFIX_ . "point_relais` (
                `id` INT(11) NOT NULL AUTO_INCREMENT,
                `id_order` VARCHAR(255) NOT NULL,
                `wilaya` VARCHAR(255) NOT NULL,
                `commune` VARCHAR(255) NOT NULL,
                `desk` VARCHAR(255) NOT NULL,
                
                `commentaire` VARCHAR(255) NOT NULL,
                `id_point_relais` VARCHAR(255) NOT NULL,
                `id_switch` INT(11) NOT NULL,
                PRIMARY KEY (`id`)
            ) ENGINE=" . _MYSQL_ENGINE_ . " DEFAULT CHARSET=utf8;";
            if (!Db::getInstance()->execute($sql)) {
                return false;
            }
        }
        
        if(!parent::install()){
            return ;
        }
        $installer = new installer;
      
        return  $this->registerHook('displayAdminOrderMain') &&  $installer->install($this);
    }
    public function uninstall()
{
    // Supprimer la table si elle existe
    if (Db::getInstance()->executeS("SHOW TABLES LIKE '" . _DB_PREFIX_ . "point_relais'")) {
        $sql = "DROP TABLE IF EXISTS `" . _DB_PREFIX_ . "point_relais`;";
        if (!Db::getInstance()->execute($sql)) {
            return false;
        }
    }


    // Continuer la désinstallation du module
    if (!parent::uninstall()) {
        return false;
    }
    $installer = new installer;
    return  parent::uninstall();
    
}
public function getContent(){
    return "hello";
}
public function hookmoduleRoutes(){

}

public function hookDisplayAdminOrderMain($params)
{
$this->context->controller->addJS($this->_path.'views/js/pointrelais.js');
$this->context->controller->addCSS($this->_path.'views/css/custom.css');
 $id_order=  $params['id_order'];   
if (Tools::isSubmit('submit_custom_form')) {
    // Check the status of the switch
   
    $idSwitch = (int) Tools::getValue('switch-value'); // Assuming 'form[point_relais]' is the name of your switch input
    
    // Gather other form data
    $wilaya = pSQL(Tools::getValue('wilaya-dropdown')); // Escape for SQL insertion
    $commune = pSQL(Tools::getValue('commune-dropdown')); // Escape for SQL insertion
    $desk =  pSQL(Tools::getValue('selected-desk-name')); // Escape for SQL insertion
   
   
    $idPointRelais = (int) Tools::getValue('id-desk');

    $commentaire = pSQL(Tools::getValue('point_relais')['message']); // Escape for SQL insertion

    // // Insert data into the database based on the switch status
    // if ($switchStatus == 1) {
    //     $idSwitch = 1; // Assuming you have a switch table with IDs 1 for 'Oui' and 0 for 'Non'
    // } else {
    //     $idSwitch = 0;
    // }
    

    // Insert data into the database
    $sql = "INSERT INTO `" . _DB_PREFIX_ . "point_relais` (`wilaya`, `commune`,`desk`, `commentaire`, `id_point_relais`, `id_switch`,`id_order`)
    VALUES ('$wilaya', '$commune', '$desk','$commentaire', $idPointRelais, $idSwitch,$id_order)";
    
    if (!Db::getInstance()->execute($sql)) {
        // Handle insertion failure
        $this->context->controller->errors[] = $this->l('Failed to insert data into the database.');
    } else {
       
        // Display a success message
        $this->context->controller->confirmations[] = $this->l('Custom form submitted successfully.');
    }
}

   





    return $this->display(__FILE__, 'views/templates/pointrelais.tpl');
    
}
    
}