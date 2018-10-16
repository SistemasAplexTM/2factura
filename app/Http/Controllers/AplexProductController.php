<?php

namespace App\Http\Controllers;

use App\AplexProduct;
use Illuminate\Http\Request;
use LaravelEnso\VueDatatable\app\Traits\Datatable;
use App\Http\Controllers\Tables\Builders\ProductTable;

class AplexProductController extends Controller
{
    use Datatable;
    protected $tableClass = ProductTable::class;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        AplexProduct::create([
          'code' => $request->code,
          'name' => $request->name,
          'reference' => $request->ref,
          'price_sale' => $request->price_sale,
          'cost' => $request->cost,
          'status' => 'creado'
        ]);
        return array('code' => 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AplexProduct  $aplexProduct
     * @return \Illuminate\Http\Response
     */
    public function show(AplexProduct $aplexProduct)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AplexProduct  $aplexProduct
     * @return \Illuminate\Http\Response
     */
    public function edit(AplexProduct $aplexProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AplexProduct  $aplexProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AplexProduct $aplexProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AplexProduct  $aplexProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(AplexProduct $aplexProduct)
    {
        //
    }
}
