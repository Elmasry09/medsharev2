<?php

namespace App\Exports;

use App\Models\charit;
use Illuminate\Support\Facades\Schema;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;

class CharityExport implements FromCollection,WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */

    public $columns;
    
    public function __construct()
    {
      $this->columns = array_diff(Schema::getColumnListing((new charit)->getTable()), ['image']);
        // dd($this->columns);
    }

    public function collection()
    {
        return charit::select($this->columns)->get();
    }

    public function headings(): array
    {
        return $this->columns;
    }
}
