<?php

namespace App\Http\Controllers\Tables\Builders;

use App\AplexShop as Shop;
use LaravelEnso\VueDatatable\app\Classes\Table;

class ShopTable extends Table
{
    protected $templatePath = __DIR__.'/../Templates/shopTable.json';
    public function query()
    {
      return Shop::select(
        \DB::raw(
          'id as "dtRowId", business_name, address, email, phone, mobile, representative'
      ));
    }
}
