<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AplexConfig;
use LaravelEnso\VueDatatable\app\Traits\Datatable;
use App\Http\Controllers\Tables\Builders\ConfigTable;

class AplexConfigController extends Controller
{
  use Datatable;
  protected $tableClass = ConfigTable::class;

  public function save(Request $request, $key, $type, $simple = false){
    $id = $this->get($key);
    $data = array($type => $request->all());
    if ($id) {
      AplexConfig::where('id', $id->id)->update([
        'key' => $key,
        'value' =>  ($simple != 'false') ? $request->type : json_encode($data)
      ]);
    }else{
      AplexConfig::insert([
        'key' => $key,
        'value' =>  ($simple != 'false') ? $request->type : json_encode($data)
      ]);
    }
  }

  public function get($key){
    $data = AplexConfig::where('key', $key)->first();
    return $data;
  }
}
