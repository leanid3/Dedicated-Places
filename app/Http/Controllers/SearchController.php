<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class searchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('search');

        $products = Product::where('title', 'LIKE', '%' . $query . '%')->get();
        // ->pluck('id', 'title', 'image', 'description', 'price', 'raiting');

        return Inertia::render('AnswerSearch', [
            'products' => $products,
            'searchQuery' =>  $query
        ]);
    }
    public function answersearch()
    {
        return Inertia::render('AnswerSearch');
    }
}
