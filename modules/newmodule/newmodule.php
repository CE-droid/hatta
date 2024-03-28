<?php 
declare(strict_type=1);
use Yalidin\Newmodule\install\Installer;
require_once(dirname(__FILE__).'/../../config/config.inc.php');
require_once __DIR__ . '/vendor/autoload.php';
if (!defined('_PS_VERSION_')) {
    exit;
}
class Newmodule extends Module{
    public function __construct(){
        $this->name = 'newmodule';
        $this->tab = 'administration';
        $this->version = '1.0.0';
        $this->author = 'Anis';
        $this->need_instance = 0;

        $this->bootstrap = true;
        parent::__construct();

        $this->displayName = $this->trans('Yalidin', [], 'Modules.Newmodule.Admin');
        $this->description = $this->trans('add command to yalidin plateform', [], 'Modules.Newmodule.Admin');

        $this->ps_versions_compliancy = ['min' => '1.7.1.0', 'max' => _PS_VERSION_];
        $installer = new installer;
       
       
    }
    public function install(){
        if(!parent::install()){
            return ;
        }
        $installer = new installer;
        return $installer->install($this);
    }
    public function uninstall(){
        $installer = new installer;
        return $installer->uninstall() && parent::uninstall();
    
    }
    public function getContent(){
        return"hello world";
    }
    public function hookmoduleRoutes(){

    }
}
?>