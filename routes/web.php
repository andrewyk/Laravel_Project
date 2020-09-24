<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsController;

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



//Middleware redirect users to login if not authenticated
Auth::routes();
Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('welcome');


//Api to call a HTTP get request to the external News API
Route::get('/api/news', [NewsController::class, 'index']);


