<?php

namespace App\Http\Requests;

use App\Http\Helpers\ApiResponse;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Validation\ValidationException;

class DonationStoreRequestRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    protected function failedValidation(Validator $validator)
    {
        if ($this->is('api/*')) {
            $respons = ApiResponse::sendResponse(402,'Validation errors',$validator->errors());
            throw new ValidationException($validator ,$respons);
        }
    }
    

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "medicine_name" => "required|string",
            "description" => "required|string",
            "image" => "nullable|image|mimes:jpeg,png,jpg,gif,svg|max:5048",
            'address_id' => 'required|exists:addresses,id',
        ];
    }
}
