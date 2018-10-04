<?php

namespace App\Http\Controllers;

use App\AplexAdminProductMeta AS AdminProductMeta;
use App\AplexAdminProduct AS AdminProduct;
use Illuminate\Http\Request;
use LaravelEnso\VueDatatable\app\Traits\Datatable;
use App\Http\Controllers\Tables\Builders\AdminProductMetaTable;

class AplexAdminProductMetaController extends Controller
{
  use Datatable;
  protected $tableClass = AdminProductMetaTable::class;
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
      //
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\AplexAdminProductMeta  $aplexAdminProductMeta
   * @return \Illuminate\Http\Response
   */
  public function show(AplexAdminProductMeta $aplexAdminProductMeta)
  {
      //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\AplexAdminProductMeta  $aplexAdminProductMeta
   * @return \Illuminate\Http\Response
   */
  public function edit(AplexAdminProductMeta $aplexAdminProductMeta)
  {
      //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\AplexAdminProductMeta  $aplexAdminProductMeta
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, AplexAdminProductMeta $aplexAdminProductMeta)
  {
      //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\AplexAdminProductMeta  $aplexAdminProductMeta
   * @return \Illuminate\Http\Response
   */
  public function destroy(AplexAdminProductMeta $aplexAdminProductMeta)
  {
      //
  }

  public function allByIds(Request $request){
    $data = AdminProduct::with('admin_product_meta')->where('id',$request->id)->get();
    return $data;
  }
}
