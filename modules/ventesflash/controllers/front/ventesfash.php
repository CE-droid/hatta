<?php
    public function hookDisplayLeftColumn($params)
    {
        $this->context->smarty->assign([
            'my_module_name' => Configuration::get('ventesflash'),
            'my_module_link' => $this->context->link->getModuleLink('ventesflash', 'display')
        ]);

        return $this->display(__FILE__, 'ventesflash.tpl');
    }

    public function hookDisplayRightColumn($params)
    {
        return $this->hookDisplayLeftColumn($params);
    }

    public function hookActionFrontControllerSetMedia()
    {
        $this->context->controller->registerStylesheet(
            'ventesflash-style',
            'modules/' . $this->name . '/views/css/ventesflash.css',
            [
                'media' => 'all',
                'priority' => 1000,
            ]
        );

        $this->context->controller->registerJavascript(
            'ventesflash-javascript',
            'modules/' . $this->name . '/views/js/ventesflash.js',
            [
                'position' => 'bottom',
                'priority' => 1000,
            ]
        );
    }
