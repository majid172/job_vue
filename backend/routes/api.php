<?php

use App\Http\Controllers\api\v1\admin\BookController;
use App\Http\Controllers\api\v1\admin\NoticeController;
use App\Http\Controllers\api\v1\admin\StudentController;
use App\Http\Controllers\api\v1\admin\TeacherController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('/v1/admin')->name('admin.')->group(function () {
    Route::get('/students-list', [StudentController::class, 'index'])->name('student.list');
    Route::get('/teachers-list', [TeacherController::class, 'index'])->name('teacher.list');
    Route::get('/notice-news', [NoticeController::class, 'index'])->name('notice');
    Route::get('/books', [BookController::class, 'index'])->name('books');
});
