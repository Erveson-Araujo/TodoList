<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoListController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/index', TodoListController::class . '@index');
Route::post('/index', TodoListController::class . '@store');
Route::put('/index/{id}', TodoListController::class . '@update');
Route::delete('/index/{id}', TodoListController::class . '@destroy');

// Route::resource('/index', TodoListController::class);