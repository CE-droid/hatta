<?php 
declare(strict_type=1);
if (!defined('_PS_VERSION_')) {
    exit;
}
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
      
       
       
    }
    public function install()
    {
        if (!Db::getInstance()->executeS("SHOW TABLES LIKE '" . _DB_PREFIX_ . "point_relais'")) {
            // Créez la table si elle n'existe pas
            $sql = "CREATE TABLE IF NOT EXISTS `" . _DB_PREFIX_ . "point_relais` (
                `id` INT(11) NOT NULL AUTO_INCREMENT,
                `wilaya` VARCHAR(255) NOT NULL,
                `commune` VARCHAR(255) NOT NULL,
                `id_point_relais` VARCHAR(255) NOT NULL,
                PRIMARY KEY (`id`)
            ) ENGINE=" . _MYSQL_ENGINE_ . " DEFAULT CHARSET=utf8;";
            if (!Db::getInstance()->execute($sql)) {
                return false;
            }
        }
        return parent::install() && $this->registerHook('displayAdminOrderMain');
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

    return true;
}

    public function hookDisplayAdminOrderMain($params)
    {
        
        if (Tools::isSubmit('submit_custom_form')) {
            // dump($params);die;
            // Traitez les données du formulaire
            $customInputValue = Tools::getValue('custom_input');
            
            // Effectuez les actions nécessaires avec les données du formulaire (par exemple, enregistrez-les dans la base de données)
            // Votre logique ici
    
            // Affichez un message de succès ou de confirmation
            $this->context->controller->confirmations[] = $this->l('Custom form submitted successfully.');
        }
    


    
    
        return $this->display(__FILE__, 'views/templates/pointrelais.tpl');
        
    }
    public function ajaxProcessSaveCustomInput(){
        dump('hi');die;
    }
}