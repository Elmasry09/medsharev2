<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class charit extends Authenticatable #implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table = "charits";

    protected $fillable = [
        'name',
        'email',
        'password',
        'phone',
        'image',
        'admin_id',
        'description',
        'specialty_id',
        'website_link',
        'isAtive',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


    public function admin(): BelongsTo
    {
        return $this->belongsTo(admin::class);
    }

    public function specialty(): BelongsTo
    {
        return $this->belongsTo(specialty::class);
    }

    public function donations(): HasMany
    {
        return $this->hasMany(donation::class);
    }

    public function users(): HasMany
    {
        return $this->hasMany(Charity_users::class,'charity_id');
    }

    public function messages(): HasMany
    {
        return $this->hasMany(Charity_Contact::class);
    }

    public function donationRequests(): HasMany
    {
        return $this->hasMany(DonationRequest::class);
    }
}
