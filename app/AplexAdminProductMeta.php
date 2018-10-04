<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AplexAdminProductMeta extends Model
{
    protected $fillable = ["value", "code", "parent", "aplex_admin_product_id"];

    public function admin_product(){
      return $this->belongsTo('App\AplexAdminProduct');
    }
}
