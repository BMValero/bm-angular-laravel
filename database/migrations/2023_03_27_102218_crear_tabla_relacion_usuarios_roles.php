<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('usuarios_roles', function (Blueprint $table) {

            $table->uuid('usuario_id');
            $table->bigInteger('role_id')->unsigned();
            $table->timestamps();

        });

        Schema::table('usuarios_roles', function($table){

            $table->foreign('usuario_id')->references('id')->on('usuarios')
            ->onDelete('cascade');
            $table->foreign('role_id')->references('id')->on('roles')
            ->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('usuarios_roles');
    }
};
