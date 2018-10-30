<?php

namespace App\Http\Controllers\Tables\Builders;

use App\AplexConfig as Config;
use LaravelEnso\VueDatatable\app\Classes\Table;

class ConfigTable extends Table
{
    protected $templatePath = __DIR__.'/../Templates/configTable.json';
    public function query()
    {
      return Config::select(
        \DB::raw(
          'id as "dtRowId", value'
      ))->where('key', json_decode(request()->params, true));
    }
}
