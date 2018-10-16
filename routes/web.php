<?php


// Route::get('{any}', 'HomeController@index')->where('any', '.*');


Route::get('/', 'HomeController@index');
Route::get('home/index', 'HomeController@index');
Route::get('home/samples', 'HomeController@samples');
Route::get('home/printersinfo', 'HomeController@printersinfo');
Route::get('DemoPrintFile', 'DemoPrintFileController@index');
Route::get('DemoPrintFileController', 'DemoPrintFileController@printFile');
Route::get('DemoPrintFilePDF', 'DemoPrintFilePDFController@index');
Route::get('DemoPrintFilePDFController', 'DemoPrintFilePDFController@printFile');
Route::get('DemoPrintCommands', 'DemoPrintCommandsController@index');
Route::get('DemoPrintCommandsController', 'DemoPrintCommandsController@printCommands');
Route::any('WebClientPrintController', 'WebClientPrintController@processRequest');
