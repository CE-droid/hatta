<?php
if (!defined('_PS_VERSION_')) {
    exit;
}

class Yalidin extends Module
{
    public function __construct()
    {
        $this->name = 'yalidin';
        $this->tab = 'shipping_logistics';
        $this->version = '1.0.0';
        $this->author = 'Cerine Gousmine';
        $this->need_instance = 0;
        $this->ps_versions_compliancy = [
            'min' => '1.7.0.0',
            'max' => '8.99.99',
        ];
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->trans('Yalidin', [], 'Modules.Yalidin.Admin');
        $this->description = $this->trans('Exporting the delivery slip.', [], 'Modules.Yalidin.Admin');

        $this->confirmUninstall = $this->trans('Are you sure you want to uninstall?', [], 'Modules.Yalidin.Admin');

        if (!Configuration::get('YALIDIN_NAME')) {
            $this->warning = $this->trans('No name provided', [], 'Modules.Yalidin.Admin');
        }
    }
    public function install()
{
    if (Shop::isFeatureActive()) {
        Shop::setContext(Shop::CONTEXT_ALL);
    }

   return (
        parent::install() 
        && Configuration::updateValue('YALIDIN_NAME', 'yalidin')
    ); 
}
public function uninstall()
{
    return (
        parent::uninstall() 
        && Configuration::deleteByName('YALIDIN_NAME')
    );
}


}
