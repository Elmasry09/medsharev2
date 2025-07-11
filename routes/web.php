<?php


use App\Models\City;
use App\Models\User;
use Inertia\Inertia;
use App\Models\admin;
use App\Models\charit;
use App\Models\donation;
use App\Models\specialty;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CharitController;
use App\Http\Controllers\DonationController;
use App\Http\Controllers\landingPage\ContactController;
use App\Http\Controllers\SpecialtyController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// -----Create END---
Route::group(['middleware' => ['auth:web'], 'as' => 'admins.'], function () {

    Route::get('/govDonations', function () {
        $cities = City::all();
        return Inertia::render('admins/Donations/governments', [
            'cities' => $cities
        ]);
    })->name('govDonations');

    Route::get('/dashboardView', function () {
        $user = User::latest()->take(10)->get();
        $donation = donation::latest()->take(10)->get();
        return Inertia::render('admins/dashboardView', [
            'users' => $user,
            'donations' => $donation
        ]);
    })->name('dashboardView');


    Route::get('/Allspecialties', function () {
        $specialties = specialty::all();
        return Inertia::render('admins/specialties/majors', [
            'specialties' => $specialties
        ]);
    })->name('specialties');

    Route::get('/Allusers', function () {
        $user = User::paginate(10);
        return Inertia::render('admins/Users/index', [
            'users' => $user
        ]);
    })->name('users');

    Route::get('/systemUsers', function () {
        $admins = admin::paginate(10);
        return Inertia::render('admins/SystemUsers/index', [
            'admins' => $admins
        ]);
    })->name('systemUsers');

    Route::get('/Allcharities', function () {
        $charities = charit::with(['specialty'])->paginate(20);
        return Inertia::render('admins/Charity/index', [
            'charities' => $charities
        ]);
    })->name('charities');

    Route::get('export', [CharitController::class, 'export'])->name('charities.export');
    Route::post('contact', ContactController::class)->name('contact.store');

    Route::resource('charities', CharitController::class)->except('show','index');
    Route::resource('donations', DonationController::class)->only('index','edit','destroy');
    Route::resource('specialties', SpecialtyController::class)->except('show');
    Route::resource('users', UserController::class)->except('show','index','update');
    Route::resource('admins', AdminController::class)->except('show');
});



Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



// Linding Page

Route::get('/about', function () {
    return Inertia::render('LandingPage/About');
})->name('About');

Route::get('/pages', function () {
    return Inertia::render('LandingPage/pages');
})->name('pages');

Route::get('/Contact', function () {
    return Inertia::render('LandingPage/Contact');
})->name('Contact');

Route::get('/Services', function () {
    return Inertia::render('LandingPage/Services');
})->name('Services');

// Route::get('/chrities-join-us', function () {
//     return Inertia::render('LandingPage/Services');
// })->name('Services');

Route::get('/privacy', function () {
    return Inertia::render('LandingPage/Privacy');
})->name('Privacy');

Route::get('/faqs', function () {
    return Inertia::render('LandingPage/Faqs');
})->name('Faqs');


// Linding Page Arabic
Route::get('/Arabic', function () {
    return Inertia::render('LandingPage/Arabic');
})->name('Arabic');

Route::get('/AboutArabic', function () {
    return Inertia::render('LandingPage/AboutArabic');
})->name('AboutArabic');

Route::get('/ArabicServices', function () {
    return Inertia::render('LandingPage/ArabicServices');
})->name('ArabicServices');

Route::get('/ArabicFaqs', function () {
    return Inertia::render('LandingPage/ArabicFaqs');
})->name('ArabicFaqs');

Route::get('/ContactAarbic', function () {
    return Inertia::render('LandingPage/ContactAarbic');
})->name('ContactAarbic');

require __DIR__ . '/auth.php';
