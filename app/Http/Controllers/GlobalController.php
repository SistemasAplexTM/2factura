<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Config;
use Session;

//Includes WebClientPrint classes
include_once(app_path() . '\WebClientPrint\WebClientPrint.php');
use Neodynamic\SDK\Web\WebClientPrint;

class GlobalController extends Controller
{
  public function initialise(){
    $data = Config::all();
    return array('code' => 200, 'data' => $data);
  }

  public function unique($table, $colum, $data, $id){
    $answer = DB::table($table)
    ->where([
      [$colum, $data],
      ['id', '<>', $id]
    ]
    )->first();

    $result = true;
    if ($answer) {
      $result = false;
    }
    return array('code' => 200, 'unique' => $result );
  }

  public function updateCell(Request $request){
    DB::table($request->table)
    ->where('id', $request->id)
    ->update([$request->column => $request->data]);
    return array('code' => 200);
  }

  public function getUrlImpressInfo(){
    // return WebClientPrint::createScript(action('WebClientPrintController@processRequest'), action('DemoPrintFileController@printFile'), Session::getId());
    return WebClientPrint::createScript(action('WebClientPrintController@processRequest'), action('GlobalController@getUrlImpressInfo'), Session::getId());
  }

}
