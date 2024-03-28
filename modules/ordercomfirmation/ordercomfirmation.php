<?php
if (!defined('_PS_VERSION_')) {
    exit;
}

class ordercomfirmation extends Module
{
    public function __construct()
    {
        $this->name = 'ordercomfirmation';
        $this->tab = 'administration';
        $this->version = '1.0.0';
        $this->author = 'Your Name';
        $this->need_instance = 0;

        parent::__construct();

        $this->displayName = $this->l('Custom Order Inputs');
        $this->description = $this->l('Adds custom inputs to the order detail page in the back office.');
    }

    public function install()
    {
        if (!parent::install() ||
            !$this->createDatabaseTable() ||
            !$this->registerHook('displayAdminOrderContentOrder')
        ) {
            return false;
        }
    
        return true;
    }

    public function hookDisplayAdminOrderContentOrder($params)
    {
        return $this->display(__FILE__, 'views/templates/admin/order/history.html.twig');
    }

    public function createDatabaseTable()
    {
        $sql = "CREATE TABLE IF NOT EXISTS `" . _DB_PREFIX_ . "custom_order_data` (
            `id_custom_order_data` INT AUTO_INCREMENT,
            `order_id` INT,
            `custom_data` VARCHAR(255),
            PRIMARY KEY (`id_custom_order_data`)
        ) ENGINE=" . _MYSQL_ENGINE_ . ' DEFAULT CHARSET=utf8;';

        if (!Db::getInstance()->execute($sql)) {
            return false;
        }

        return true;
    }

    public function uninstall()
    {
        if (!parent::uninstall() ||
            !$this->deleteDatabaseTable()
        ) {
            return false;
        }

        return true;
    }

    public function deleteDatabaseTable()
    {
        $sql = "DROP TABLE IF EXISTS `" . _DB_PREFIX_ . "custom_order_data`";

        if (!Db::getInstance()->execute($sql)) {
            return false;
        }

        return true;
    }

    public function getContent()
    {
        // Fetch any general configuration data if needed
        // For example:
        $configValue = Configuration::get('CUSTOM_CONFIG_VALUE');

        // Display configuration form or information
        return $this->display(__FILE__, 'views/templates/admin/configure.tpl');
    }
    // Add the getOrderShippingCost method here
    public function getOrderShippingCost($cart, $shipping_cost)
    {
        // Disable shipping cost calculation by returning 0
        return 0;
    }
}
