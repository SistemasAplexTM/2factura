<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsermetasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('usermetas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('key');
            $table->longText('value');
            $table->timestamps();
            $table->softDeletes();
        });
        
        Schema::table('usermetas', function (Blueprint $table) {
          $table->unsignedInteger('user_id');
          $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usermetas');
    }
}
