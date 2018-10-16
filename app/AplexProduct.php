<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AplexProduct extends Model
{
  protected $fillable = ['code','name','reference','price_sale','cost', 'status','parent'];

  /**
   * Foranea con productmetas.
   */
  public function productmeta()
  {
      return $this->hasMany('App\AplexproductMeta');
  }
}
