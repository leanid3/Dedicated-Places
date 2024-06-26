<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "postCategory" => ['required', 'exists:categories,id'],
            "postTitle" => ['required'],
            "postDescription" => ['required', 'min:5'],
            "postRating" => ['required', 'numeric', 'min:0', 'max:5'],
            "postImage" => ['nullable', 'image', 'mimes:png,jpg', 'max:2048'],
            "postPhone" => ['nullable', 'regex:/^([0-9\s\-\+\(\)]*)$/'],
            "postSite" => ['nullable', 'url'],
            "postAddress" => ['nullable', 'string'],
        ];
    }
}
