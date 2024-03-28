<?php
/**
* 2007-2024 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2024 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*/

if (!defined('_PS_VERSION_')) {
    exit;
}

class Ventesflash1 extends Module
{
    protected $config_form = false;

    public function __construct()
    {
        $this->name = 'ventesflash1';
        $this->tab = 'front_office_features';
        $this->version = '1.0.0';
        $this->author = 'cerine';
        $this->need_instance = 0;

        /**
         * Set $this->bootstrap to true if your module is compliant with bootstrap (PrestaShop 1.6)
         */
        $this->bootstrap = true;

        parent::__construct();

        $this->displayName = $this->l('ventesflash1');
        $this->description = $this->l('Creating new custom pafes for front office ');

        $this->confirmUninstall = $this->l('');

        $this->ps_versions_compliancy = array('min' => '1.7', 'max' => _PS_VERSION_);
    }

    /**
     * Don't forget to create update methods if needed:
     * http://doc.prestashop.com/display/PS16/Enabling+the+Auto-Update
     */
    public function install()
    {
        Configuration::updateValue('VENTESFLASH1_LIVE_MODE', false);
        Configuration::updateValue('VENTESFLASH_BANNER_IMAGE', '');
        Configuration::updateValue('VENTESFLASH_COUNTDOWN_END_TIME', '');
        Configuration::updateValue('VENTESFLASH_SELECTED_CATEGORY', '');
        Configuration::updateValue('VENTESFLASH_PAGE_TITLE', '');
        Configuration::updateValue('VENTESFLASH_PAGE_URL', '');
    
        include(dirname(__FILE__).'/sql/install.php');
    
        return parent::install() &&
            $this->registerHook('header') &&
            $this->registerHook('displayBackOfficeHeader') &&
            $this->registerHook('displayProductListFunctionalButtons');
    }
    
    public function uninstall()
    {
        Configuration::deleteByName('VENTESFLASH1_LIVE_MODE');
        Configuration::deleteByName('VENTESFLASH_BANNER_IMAGE');
        Configuration::deleteByName('VENTESFLASH_COUNTDOWN_END_TIME');
        Configuration::deleteByName('VENTESFLASH_SELECTED_CATEGORY');
        Configuration::deleteByName('VENTESFLASH_PAGE_TITLE');
        Configuration::deleteByName('VENTESFLASH_PAGE_URL');
    
        include(dirname(__FILE__).'/sql/uninstall.php');
    
        return parent::uninstall();
    }
    
    /**
     * Load the configuration form
     */
    public function getContent()
    {
        /**
         * If values have been submitted in the form, process.
         */
        if (Tools::isSubmit('submitVentesflash1Module')) {
            $this->postProcess();
        }
    
        $this->context->smarty->assign('module_dir', $this->_path);
    
        $output = $this->context->smarty->fetch($this->local_path . 'views/templates/admin/configure.tpl');
    
        return $output . $this->renderForm();
    }
    
    protected function renderForm()
    {
        $categories = Category::getCategories($this->context->language->id, false);

        $categoryOptions = array();
    
        foreach ($categories as $parentCategoryId => $subCategories) {
            foreach ($subCategories as $categoryId => $categoryInfo) {
                $categoryOptions[] = array(
                    'id' => $categoryId,
                    'name' => $categoryInfo['infos']['name']
                );
                
            }
    
           
        }
        // dump($categories); die;// Add this line to display the categories

        $fieldsForm = array(
            'form' => array(
                'legend' => array(
                    'title' => $this->l('Module Configuration'),
                    'icon' => 'icon-cogs',
                ),
                'input' => array(
                    array(
                        'type' => 'file',
                        'label' => $this->l('Banner Image'),
                        'name' => 'banner_image',
                    ),
                    array(
                        'type' => 'datetime',
                        'label' => $this->l('Countdown End Time'),
                        'name' => 'countdown_end_time',
                    ),
                    array(
                        'type' => 'select',
                        'label' => $this->l('Category'),
                        'name' => 'selected_category',
                        'options' => array(
                            'query' => $categoryOptions,
                            'id' => 'id',
                            'name' => 'name',
                        ),
                    ),
                    array(
                        'type' => 'text',
                        'label' => $this->l('Page Title'),
                        'name' => 'page_title',
                    ),
                    array(
                        'type' => 'text',
                        'label' => $this->l('Page URL'),
                        'name' => 'page_url',
                    ),
                ),
                'submit' => array(
                    'title' => $this->l('Save'),
                ),
            ),
        );
    
        $helper = new HelperForm();
        $helper->module = $this;
        $helper->name_controller = $this->name;
        $helper->token = Tools::getAdminTokenLite('AdminModules');
        $helper->currentIndex = AdminController::$currentIndex . '&configure=' . $this->name;
        $helper->default_form_language = $this->context->language->id;
        $helper->allow_employee_form_lang = Configuration::get('PS_BO_ALLOW_EMPLOYEE_FORM_LANG', 0);
    
        // Fill form values if they exist
        $helper->fields_value['banner_image'] = Configuration::get('VENTESFLASH_BANNER_IMAGE');
        $helper->fields_value['countdown_end_time'] = Configuration::get('VENTESFLASH_COUNTDOWN_END_TIME');
        $helper->fields_value['selected_category'] = Configuration::get('VENTESFLASH_SELECTED_CATEGORY');
        $helper->fields_value['page_title'] = Configuration::get('VENTESFLASH_PAGE_TITLE');
        $helper->fields_value['page_url'] = Configuration::get('VENTESFLASH_PAGE_URL');
    
        return $helper->generateForm(array($fieldsForm));
    }
    
    /**
     * Create the structure of your form.
     */
  protected function getConfigForm()
{
    // $categories = Category::getCategories($this->context->language->id, false);

    // $categoryOptions = array();

    // foreach ($categories as $parentCategoryId => $subCategories) {
    //     foreach ($subCategories as $categoryId => $categoryInfo) {
    //         $categoryOptions[] = array(
    //             'id' => $categoryId,
    //             'name' => $categoryInfo['infos']['name']
    //         );
            
    //     }

       
    // }

    // return array(
    //     'form' => array(
    //         'legend' => array(
    //             'title' => $this->l('Settings'),
    //             'icon' => 'icon-cogs',
    //         ),
    //         'input' => array(
    //             array(
    //                 'type' => 'file',
    //                 'label' => $this->l('Banner Image'),
    //                 'name' => 'VENTESFLASH_BANNER_IMAGE',
    //             ),
    //             array(
    //                 'type' => 'datetime',
    //                 'label' => $this->l('Countdown End Time'),
    //                 'name' => 'VENTESFLASH_COUNTDOWN_END_TIME',
    //             ),
    //             array(
    //                 'type' => 'select',
    //                 'label' => $this->l('Category'),
    //                 'name' => 'VENTESFLASH_SELECTED_CATEGORY',
    //                 'options' => array(
    //                     'query' => $categoryOptions,
    //                     'id' => 'id',
    //                     'name' => 'name',
    //                 ),
    //             ),
    //             array(
    //                 'type' => 'text',
    //                 'label' => $this->l('Page Title'),
    //                 'name' => 'VENTESFLASH_PAGE_TITLE',
    //             ),
    //             array(
    //                 'type' => 'text',
    //                 'label' => $this->l('Page URL'),
    //                 'name' => 'VENTESFLASH_PAGE_URL',
    //             ),
    //         ),
    //         'submit' => array(
    //             'title' => $this->l('Save'),
    //         ),
    //     ),
    // );
}

    
    protected function getConfigFormValues()
    {
        return array(
            'VENTESFLASH_BANNER_IMAGE' => Configuration::get('VENTESFLASH_BANNER_IMAGE'),
            'VENTESFLASH_COUNTDOWN_END_TIME' => Configuration::get('VENTESFLASH_COUNTDOWN_END_TIME'),
            'VENTESFLASH_SELECTED_CATEGORY' => Configuration::get('VENTESFLASH_SELECTED_CATEGORY'),
            'VENTESFLASH_PAGE_TITLE' => Configuration::get('VENTESFLASH_PAGE_TITLE'),
            'VENTESFLASH_PAGE_URL' => Configuration::get('VENTESFLASH_PAGE_URL'),
        );
    }
    
    protected function postProcess()
    {
        $form_values = $this->getConfigFormValues();
    
        foreach (array_keys($form_values) as $key) {
            Configuration::updateValue($key, Tools::getValue($key));
        }
    }
    

    /**
    * Add the CSS & JavaScript files you want to be loaded in the BO.
    */
    public function hookDisplayBackOfficeHeader()
    {
        if (Tools::getValue('configure') == $this->name) {
            $this->context->controller->addJS($this->_path.'views/js/back.js');
            $this->context->controller->addCSS($this->_path.'views/css/back.css');
        }
    }

    /**
     * Add the CSS & JavaScript files you want to be added on the FO.
     */
    public function hookHeader()
    {
        $this->context->controller->addJS($this->_path.'/views/js/front.js');
        $this->context->controller->addCSS($this->_path.'/views/css/front.css');
    }

    public function hookDisplayProductListFunctionalButtons()
    {
        /* Place your code here. */
    }
}
