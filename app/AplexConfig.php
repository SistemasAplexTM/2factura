<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AplexConfig extends Model
{
  protected $fillable = [
      'key', 'value'
  ];
}
