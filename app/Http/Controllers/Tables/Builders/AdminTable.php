<?php

namespace App\Http\Controllers\Tables\Builders;

use App\AplexAdminTable as Admin;
use LaravelEnso\VueDatatable\app\Classes\Table;

class AdminTable extends Table
{
    protected $templatePath = __DIR__.'/../Templates/adminTable.json';
    public function query()
    {
      return Admin::select(
        \DB::raw(
          'aplex_admin_tables.id as "dtRowId", description, value'
      ))->leftJoin('aplex_admin_table_metas AS b', 'b.aplex_admin_table_id', '=', 'aplex_admin_tables.id')
      ->whereType(json_decode(request()->params, true));
    }
}
