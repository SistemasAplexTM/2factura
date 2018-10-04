<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Config;

class GlobalController extends Controller
{
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
    public function initialise(){
      $data = Config::all();
      return array('code' => 200, 'data' => $data);
    }
}
