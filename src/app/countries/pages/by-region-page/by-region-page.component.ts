import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})
export class ByRegionPageComponent {
  countries: Country[] = [];
  constructor(private countriesService: CountriesService) { }

  searchByRegion = (term: string) => {
    this.countriesService.searchRegion(term)
    .subscribe( countries => {
      this.countries = countries;
    })
  }
}
