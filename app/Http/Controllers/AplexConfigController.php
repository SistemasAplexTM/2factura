<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AplexConfig;

class AplexConfigController extends Controller
{
    public function save(Request $request, $key, $type, $simple = null){
      $id = $this->get($key);
      $data = array($type => $request->all());
      if ($id) {
        AplexConfig::where('id', $id->id)->update([
          'key' => $key,
          'value' =>  ($simple) ? $request->type : json_encode($data)
        ]);
      }else{
        AplexConfig::insert([
          'key' => $key,
          'value' =>  ($simple) ? $request->type : json_encode($data)
        ]);
      }
    }

    public function get($key){
      $data = AplexConfig::where('key', $key)->first();
      return $data;
    }
}
