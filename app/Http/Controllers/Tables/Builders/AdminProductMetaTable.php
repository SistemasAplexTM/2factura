<?php

namespace App\Http\Controllers\Tables\Builders;

use App\AplexAdminProductMeta as AdminProductMeta;
use LaravelEnso\VueDatatable\app\Classes\Table;

class AdminProductMetaTable extends Table
{
    protected $templatePath = __DIR__.'/../Templates/adminProductMetaTable.json';
    public function query()
    {
      return AdminProductMeta::select(
        \DB::raw(
          'id as "dtRowId", value, code'
      ))->whereAplexAdminProductId(json_decode(request()->params, true));
    }
}
