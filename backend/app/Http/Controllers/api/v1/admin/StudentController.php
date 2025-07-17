<?php

namespace App\Http\Controllers\api\v1\admin;

use App\Http\Controllers\Controller;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class StudentController extends Controller
{
    public function index()
    {
        $students = DB::table('users')->select('name','phone','email','image','address')->orderBy('id', 'desc')->get();
        return response()->json([
            'students' => $students
        ]);
    }
}
