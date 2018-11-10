<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AplexShop extends Model
{
    protected $fillable = [
      'business_name',
      'address',
      'email',
      'phone',
      'mobile',
      'representative'
    ];
}
