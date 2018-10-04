<?php

namespace App\Http\Controllers\Tables\Builders;

use App\AplexAdminProduct as AdminProduct;
use LaravelEnso\VueDatatable\app\Classes\Table;

class AdminProductTable extends Table
{
    protected $templatePath = __DIR__.'/../Templates/adminProductTable.json';
    public function query()
    {
      return AdminProduct::select(
        \DB::raw(
          'aplex_admin_products.id as "dtRowId", description'
      ))->whereType(json_decode(request()->params, true));
    }
}
