import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrl: './by-country-page.component.scss'
})
export class ByCountryPageComponent {
  countries: Country[] = [];
  constructor(private countriesService: CountriesService) { }

  searchByCountry = (term: string) => {
    this.countriesService.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries;
    })
  }
}
