<?php

namespace App\Http\Controllers;

use App\Models\Testform;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class TestformController extends Controller
{
    public function submitdef(Request $request)
    {
        $request->validate([
            'name' => ['required', 'min:10'],
            'email' => ['required', 'email', 'exists:users,email'],
            'avatar' => ['required', 'image'],
            'radioValue' => ['required']
        ]);


        $avatar = $request->file('avatar');

        $avatarName = time() . '.' . $avatar->getClientOriginalExtension();

        $avatar->storeAs('public/uploads', $avatarName);

        Testform::create([
            'name' => $request->name,
            'email' => $request->email,
            'avatar' => 'storage/uploads/' . $avatarName,
            'radioValue'=> $request->radioValue
        ]);

        return Redirect::back();
    }
}
