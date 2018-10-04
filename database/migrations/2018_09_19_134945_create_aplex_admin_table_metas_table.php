<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAplexAdminTableMetasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('aplex_admin_table_metas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('key');
            $table->longText('value');
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('aplex_admin_table_metas', function (Blueprint $table) {
          $table->unsignedInteger('aplex_admin_table_id');
          $table->foreign('aplex_admin_table_id')->references('id')->on('aplex_admin_tables')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('aplex_admin_table_metas');
    }
}
