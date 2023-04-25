<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('usuarios', function(Blueprint $table) {

            $table->unsignedBigInteger('direccion_entrega_id')->nullable();

            $table->foreign('direccion_entrega_id')
                ->references('id')
                ->on('entrega_direcciones')
                ->onDelete('cascade');

            $table->unsignedBigInteger('direccion_facturacion_id')->nullable();

            $table->foreign('direccion_facturacion_id')
                ->references('id')
                ->on('facturacion_direcciones')
                ->onDelete('cascade');
        });

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(Blueprint $table): void
    {
        $table->dropColumn('direccion_entrega_id');
        $table->dropColumn('direccion_facturacion_id');    
    }
};
