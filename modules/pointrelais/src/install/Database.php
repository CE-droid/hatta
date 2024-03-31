<?php
declare(strict_type=1);
namespace Anis\Pointrelais\install;
class Database
{
   
    public static function installQueries(): array
    {
        $queries = [];
    
        $queries[] = "CREATE TABLE IF NOT EXISTS `" . _DB_PREFIX_ . "exported_files` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
             `file` BLOB,
            PRIMARY KEY (`id`)
        ) ENGINE='" ._MYSQL_ENGINE_. "' DEFAULT CHARSET=utf8;";
       
       return $queries;
    }
    public static function uninstallQueries(): array
{
    $queries = [];

    $queries[] = 'DROP TABLE IF EXISTS `' . _DB_PREFIX_ . 'exported_files`';
   
   

    return $queries;
}

}