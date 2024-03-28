<?php
namespace Yalidin\Newmodule\Controller;

use PrestaShopBundle\Controller\Admin\FrameworkBundleAdminController;
use Symfony\Component\HttpFoundation\Response;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use Doctrine\DBAL\Connection;
use Doctrine\DBAL\Query\QueryBuilder;


require_once(dirname(__FILE__).'/../..//newmodule.php');


class yalidin extends FrameworkBundleAdminController
{
    public function indexAction()
    {
            
            return $this->render('@Modules/newmodule/view/template/admin/home.html.twig',
            [
                'enableSidebar' =>true,
                'layoutTitle' => $this->trans('Welcome home','Modules.Newmodule.Admin')
            ]);
    }
    public function sendtoyalidin(){
                    // Create a new PhpSpreadsheet instance
            $spreadsheet = new Spreadsheet();
            $sheet = $spreadsheet->getActiveSheet();

            // Set column headers based on keys of the first row of your $post array
            $headers = array_keys($_POST['row1']);
            $col = 'A';
            foreach ($headers as $header) {
                $sheet->setCellValue($col . '1', $header);
                $col++;
            }

            // Populate the Excel sheet with data
            $rowIndex = 2;
            foreach ($_POST as $row) {
                $col = 'A';
                foreach ($row as $cellData) {
                    $sheet->setCellValue($col . $rowIndex, $cellData);
                    $col++;
                }
                $rowIndex++;
            }

            // Create a writer and save the Excel file
            $writer = new Xlsx($spreadsheet);
            $tempFilePath = tempnam(sys_get_temp_dir(), 'excel_');
            $writer->save($tempFilePath);
            $currentDate = gmdate('Y-m-d:h:m:s', time());
            // Send the Excel file as response
            //return $this->file($tempFilePath, $currentDate.'.xlsx');
            $fileContents = file_get_contents($tempFilePath);

            // Encode the file contents into a binary format
            $blobData = base64_encode($fileContents);
            $data = array(
                'file' => $blobData,
                // Add more columns and values as needed
            );
            //dump(_DB_PREFIX_ );die;
            if (\Db::getInstance()->insert('yalidin', $data)) {
                // Data inserted successfully
               //$this->allfiles();
               $sql = 'SELECT * FROM '._DB_PREFIX_.'yalidin';
               $results = \Db::getInstance()->executeS($sql);
               return $this->render('@Modules/newmodule/view/template/admin/allfile.html.twig',
           [
               'enableSidebar' =>true,
               'layoutTitle' => $this->trans('Welcome home','Modules.Newmodule.Admin'),
               'results' => $results,
               'file' => $currentDate.'xlsx'
           ]);
           
            } else {
                // Error occurred
                dump('Error inserting data.');die;
            }
    }
    public function allfiles(){
                $sql = 'SELECT * FROM '._DB_PREFIX_.'yalidin';
                $results = \Db::getInstance()->executeS($sql);
                return $this->render('@Modules/newmodule/view/template/admin/allfile.html.twig',
            [
                'enableSidebar' =>true,
                'layoutTitle' => $this->trans('Welcome home','Modules.Newmodule.Admin'),
                'results' => $results
            ]);
    }
   
}