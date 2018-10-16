<?php

namespace App\Http\Controllers\Tables\Builders;

use App\AplexProduct as Product;
use LaravelEnso\VueDatatable\app\Classes\Table;

class ProductTable extends Table
{
    protected $templatePath = __DIR__.'/../Templates/productTable.json';
    public function query()
    {
      return Product::select(
        \DB::raw(
          'aplex_products.id as "dtRowId", code, reference, name, price_sale, cost'
      ));
    }
}
