<?php

namespace App\Http\Controllers;

use App\AplexAdminProduct AS AdminProduct;
use App\AplexAdminProductMeta AS AdminProductMeta;
use Illuminate\Http\Request;
use LaravelEnso\VueDatatable\app\Traits\Datatable;
use App\Http\Controllers\Tables\Builders\AdminProductTable;

class AplexAdminProductController extends Controller
{
  use Datatable;
  protected $tableClass = AdminProductTable::class;

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request, $type)
  {
    if ($request->type_id) {
      AdminProductMeta::create([
        'value' => $request->name,
        'code' => $request->code,
        'parent' => 0,
        'aplex_admin_product_id' => $request->type_id
      ]);
    }else{
      AdminProduct::create([
        'description' => $request->name,
        'type' => $type
      ]);
    }
      return array('code' => 200);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\AplexAdminProduct  $aplexAdminProduct
   * @return \Illuminate\Http\Response
   */
  public function edit(AplexAdminProduct $aplexAdminProduct)
  {
      //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\AplexAdminProduct  $aplexAdminProduct
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, AplexAdminProduct $aplexAdminProduct)
  {
      //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\AplexAdminProduct  $aplexAdminProduct
   * @return \Illuminate\Http\Response
   */
  public function destroy(Request $request, $type, $id)
  {
    if ($type == 'term') {
      AdminProductMeta::destroy($id);
    }else{
      AdminProduct::destroy($id);
    }
      return array('code' => $type, 'id' => $id);
      // return $request->all();
  }

  public function all($type){
    return AdminProduct::where('type', $type)->get();
  }

}
