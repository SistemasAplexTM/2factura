<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AplexAdminProduct extends Model
{
    protected $fillable = ["description", "type"];

    public function admin_product_meta()
    {
        return $this->hasMany('App\AplexAdminProductMeta');
    }
    
}
