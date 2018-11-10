<?php

namespace App\Http\Controllers;

use App\AplexShop AS Shop;
use Illuminate\Http\Request;
use LaravelEnso\VueDatatable\app\Traits\Datatable;
use App\Http\Controllers\Tables\Builders\ShopTable;

class AplexShopController extends Controller
{
  use Datatable;
  protected $tableClass = ShopTable::class;
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      Shop::create($request->all());
      return array('code' => 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\AplexShop  $aplexShop
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AplexShop  $aplexShop
     * @return \Illuminate\Http\Response
     */
    public function edit(AplexShop $aplexShop)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AplexShop  $aplexShop
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AplexShop $aplexShop)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AplexShop  $aplexShop
     * @return \Illuminate\Http\Response
     */
    public function destroy(AplexShop $aplexShop)
    {
        //
    }
}
