<?php

namespace App\Http\Controllers\Tables\Builders;

use App\User;
use LaravelEnso\VueDatatable\app\Classes\Table;

class UserTable extends Table
{
    protected $templatePath = __DIR__.'/../Templates/userTable.json';
    public function query()
    {
        return User::select(\DB::raw(
            'id as "dtRowId", username, name, email'
        ));
    }
}
