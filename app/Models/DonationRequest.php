<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DonationRequest extends Model
{
    use HasFactory;

    protected $table = 'donation_requests';

    protected $fillable = [
        'medicine_name',
        'description',
        'state',
        'image',
        'user_id',
        'charity_id',
        'address_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function charity()
    {
        return $this->belongsTo(charit::class);
    }

    public function address()
    {
        return $this->belongsTo(Address::class);
    }
    

}
