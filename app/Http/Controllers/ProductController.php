<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use Carbon\Carbon;
use Inertia\Inertia;
use App\Models\Product;
use Egulias\EmailValidator\Parser\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;

class ProductController extends Controller
{
    public function showProduct($id)
    {
        $product = Product::with( 'category')->findOrFail($id);

        $comments = Comments::where('product_id', $id)->with('product', 'user')->get();

        return Inertia::render('Product', [
            'product' => $product,
            'comments' => $comments
        ]);
    }

    public function createComment(Request $request)
    {

        if (!Auth::check()) {
            return Redirect::back()->withErrors([
                'userNotAuth' => 'войдите в аккаунт, чтобы добавить комментарий'
            ]);
        }

        $request->validate([
            'them_comment' => ['required', 'string','max:100'],
            'comment' => ['required', 'min:5'],
            'product_id' => ['required', 'exists:products,id'],

        ]);

        $user = Auth::user()->id;

        Comments::create([
            'them_comment' => $request->them_comment,
            'comment' => $request->comment,
            'product_id' => $request->product_id,
            'user_id' => $user,
        ]);

        return Redirect::back();
    }
}
