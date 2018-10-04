<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AplexAdminTable extends Model
{
  use SoftDeletes;

  protected $fillable = [
      'id', 'description', 'type'
  ];

  /**
   * Foranea con admin_table_metas.
   */
  public function adminmeta()
  {
      return $this->hasMany('App\AplexAdminTableMeta');
  }

  protected static function boot() {
    parent::boot();

    static::deleting(function($admin) {
        $admin->adminmeta()->delete();
    });
  }

}
