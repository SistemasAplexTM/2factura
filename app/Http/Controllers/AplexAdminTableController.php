<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\AplexAdminTableRequest;
use App\AplexAdminTable AS Admin;
use App\AplexAdminTableMeta AS AdminMeta;
use LaravelEnso\VueDatatable\app\Traits\Datatable;
use App\Http\Controllers\Tables\Builders\AdminTable;

class AplexAdminTableController extends Controller
{
  use Datatable;
  protected $tableClass = AdminTable::class;
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request, $type)
  {
    $admin = Admin::create([
      'type' => $type,
      'description' => $request->description
    ]);
    if ($request->value) {
      AdminMeta::create([
        'key' => 'value',
        'value' => $request->value,
        'aplex_admin_table_id' => $admin->id
      ]);
    }
    return array('code' => 200);
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\AplexAdminTable  $aplexAdminTable
   * @return \Illuminate\Http\Response
   */
  public function edit(AplexAdminTableRequest $aplexAdminTable, $type, $id)
  {
    return Admin::find($id);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  \App\AplexAdminTable  $aplexAdminTable
   * @return \Illuminate\Http\Response
   */
  public function update(AplexAdminTableRequest $aplexAdminTable, $type, $id)
  {
    $user = Admin::find($id);
    $user->update($aplexAdminTable->all());
    // foreach ($user->usermeta as $key => $value) {
    //   if ($value->key == 'rol') {
    //     $value->value = $request->rol;
    //     $value->save();
    //   }
    // }
    return array('code' => 200);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\AplexAdminTable  $aplexAdminTable
   * @return \Illuminate\Http\Response
   */
  public function destroy(AplexAdminTable $aplexAdminTable)
  {
      //
  }
}
