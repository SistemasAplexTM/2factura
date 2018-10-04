<?php

namespace App\Http\Controllers\users;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use LaravelEnso\VueDatatable\app\Traits\Datatable;
use App\Http\Controllers\Tables\Builders\UserTable;
use App\User;
use App\Usermeta;
use App\AplexAdminTable as Admin;

class UserController extends Controller
{
  use Datatable;
  protected $tableClass = UserTable::class;

  public function all(){

    $user = User::whereHas('usermeta', function($q){
      $q->where('key', 'avatar');
    })->with('usermeta')->get();
    foreach ($user as $key => $value) {
      foreach ($value->usermeta as $keyUM => $valueUM) {
        $data[$key][$valueUM['key']] = $valueUM['value'];
        $data[$key]['user_id'] = $valueUM['user_id'];
      }
      unset($value['usermeta']);
      $data[$key]['user'] = $value;
    }

    return array('code' => 200, 'data' => $data);
  }

  public function add(Request $request){
    $user = User::create([
        'username' => $request['username'],
        'name' => $request['name'],
        'email' => $request['email'],
        'password' => Hash::make($request['password']),
    ]);
    // Usermeta::create([
    //   'user_id' => $user->id,
    //   'key' => 'rol',
    //   'value' => $request->rol
    // ]);
    Usermeta::create([
      'user_id' => $user->id,
      'key' => 'avatar',
      'value' => 'https://cdn.icon-icons.com/icons2/20/PNG/256/businessapplication_edit_male_user_thepencil_theclient_negocio_2321.png'
    ]);
    return array('code' => 200);
  }

  public function update(Request $request, $id){
    $user = User::find($id);
    $user->update($request->all());
    foreach ($user->usermeta as $key => $value) {
      if ($value->key == 'rol') {
        $value->value = $request->rol;
        $value->save();
      }
    }
    return array('code' => 200);
  }

  public function byId($id){
    $user = User::find($id);
    $usermeta = User::find($id)->usermeta;
    $data = (array) array();
    foreach ($usermeta as $keyUM => $valueUM) {
      $data[$valueUM['key']] = $valueUM['value'];
      $data['user_id'] = $valueUM['user_id'];
    }
    $data['user'] = $user;
    return array('code' => 200 , 'data' => $data);
  }

  public function delete($id){
    User::destroy($id);
    return array('code' => 200);
  }

  public function prueba(){
    $data = Admin::select('id as dtRowId', 'description');
    return $arrayName = array('data' => $data );
      // return Admin::select(\DB::raw(
      //     'id as "dtRowId", description'
      // ));
  }
}
