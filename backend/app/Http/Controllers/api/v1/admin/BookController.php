<?php

namespace App\Http\Controllers\api\v1\admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookController extends Controller
{
    //

    public function index()
    {
        $books = DB::table('books')->orderBy('id', 'desc')->get();
        return $books;
    }
}
