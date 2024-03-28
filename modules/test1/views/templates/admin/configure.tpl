{*
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
*}

<div class="panel">
	<h3><i class="icon icon-truck"></i> {l s='My shipping module' mod='test1'}</h3>
	<img src="{$module_dir|escape:'html':'UTF-8'}/logo.png" id="payment-logo" class="pull-right" />
	<p>
		<strong>{l s='Here is my new shipping module!' mod='test1'}</strong><br />
		{l s='Thanks to PrestaShop, now I have a great shipping module.' mod='test1'}<br />
		{l s='I can configure it using the following configuration form.' mod='test1'}
	</p>
	<br />
	<p>	
		{l s='This module will boost your sales!' mod='test1'}
	</p>
</div>

<div class="panel">
	<h3><i class="icon icon-tags"></i> {l s='Documentation' mod='test1'}</h3>
	<p>
		&raquo; {l s='You can get a PDF documentation to configure this module' mod='test1'} :
		<ul>
			<li><a href="#" target="_blank">{l s='English' mod='test1'}</a></li>
			<li><a href="#" target="_blank">{l s='French' mod='test1'}</a></li>
		</ul>
	</p>
</div>
