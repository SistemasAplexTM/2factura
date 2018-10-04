<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAplexAdminProductMetasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aplex_admin_product_metas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('value');
            $table->string('code');
            $table->integer('parent');
            $table->timestamps();
        });

        Schema::table('aplex_admin_product_metas', function (Blueprint $table) {
          $table->unsignedInteger('aplex_admin_product_id');
          $table->foreign('aplex_admin_product_id')->references('id')->on('aplex_admin_products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aplex_admin_product_metas');
    }
}
