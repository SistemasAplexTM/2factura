<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::namespace('Auth')->group(function () {
  Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');

    Route::group(['middleware' => 'auth:api'], function() {
      Route::get('logout', 'AuthController@logout');
      Route::get('user', 'AuthController@user');
    });
  });
});

Route::prefix('table')->as('table.')
->group(function () {
  Route::get('init', 'users\UserController@init')->name('init');
  Route::get('data', 'users\UserController@data')->name('data');
});

Route::get('global/getImpressInfo', 'GlobalController@printersinfo');
Route::get('global/getUrlImpressInfo', 'GlobalController@getUrlImpressInfo');
Route::put('global/updateCell', 'GlobalController@updateCell');
Route::get('initialise', 'GlobalController@initialise')->middleware('auth:api');
Route::get('unique/{table}/{colum}/{data}/{id}', 'GlobalController@unique');

Route::get('user/prueba', 'users\UserController@prueba');
Route::get('user/all', 'users\UserController@all')->middleware('auth:api');
Route::post('user/add', 'users\UserController@add');
Route::delete('user/{id}', 'users\UserController@delete');
Route::put('user/{id}', 'users\UserController@update');
Route::get('user/{id}', 'users\UserController@byId');
// Route::get('prueba', 'PruebaController@index');

// Route::group(['middleware' => 'auth:api'], function () {
  Route::prefix('admin')->as('admin.')
  ->group(function () {
    Route::get('init', 'AplexAdminTableController@init')->name('init');
    Route::get('data', 'AplexAdminTableController@data')->name('data');
  });
  Route::resource('admin/{type?}','AplexAdminTableController')
    ->only(['store', 'edit', 'update', 'destroy'])
    ->parameters(['{type?}' => 'id']);
// });


Route::prefix('adminProduct')->as('adminProduct.')
->group(function () {
  Route::get('init', 'AplexAdminProductController@init')->name('init');
  Route::get('data', 'AplexAdminProductController@data')->name('data');
});
Route::get('adminProduct/{type?}', 'AplexAdminProductController@all');
Route::resource('adminProduct/{type?}','AplexAdminProductController')
  ->except(['index', 'create', 'show'])
  ->parameters(['{type?}' => 'id']);

Route::post('adminProductMetaByIds', 'AplexAdminProductMetaController@allByIds');
Route::prefix('adminProductMeta')->as('adminProductMeta.')
->group(function () {
  Route::get('init', 'AplexAdminProductMetaController@init')->name('init');
  Route::get('data', 'AplexAdminProductMetaController@data')->name('data');
});


Route::prefix('config')->as('config.')
->group(function () {
  Route::get('init', 'AplexConfigController@init')->name('init');
  Route::get('data', 'AplexConfigController@data')->name('data');
});
Route::post('config/{key}/{type}/{simple?}', 'AplexConfigController@save');
Route::get('config/{key}', 'AplexConfigController@get');

Route::prefix('product')->as('product.')
->group(function () {
  Route::get('init', 'AplexProductController@init')->name('init');
  Route::get('data', 'AplexProductController@data')->name('data');
});

Route::get('product/print', 'AplexProductController@print');
Route::get('product/urlPrint', 'AplexProductController@urlPrint');
Route::post('product/createFile', 'AplexProductController@createFile');
Route::resource('product','AplexProductController')
  ->except(['index', 'create']);


Route::prefix('shop')->as('shop.')
->group(function () {
  Route::get('init', 'AplexShopController@init')->name('init');
  Route::get('data', 'AplexShopController@data')->name('data');
});
Route::resource('shop','AplexShopController')
  ->except(['index', 'create']);
