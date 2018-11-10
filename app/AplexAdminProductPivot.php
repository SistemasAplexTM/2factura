<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;

class AplexAdminProductPivot extends Pivot
{
    protected $table = 'aplex_product_admin_pivot';

    protected $fillable = [''];
}
