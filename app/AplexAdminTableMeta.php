<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AplexAdminTableMeta extends Model
{
  use SoftDeletes;

  protected $fillable = [
      'aplex_admin_table_id', 'key', 'value'
  ];

  public function admin(){
    return $this->belongsTo('App\AplexAdminTableMeta');
  }
}
