import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent {
  countries: Country[] = [];
  public isLoading: boolean = false;
  constructor(private countriesService: CountriesService) { }

  searchByCapital = (term: string) => {
    this.isLoading = true;
    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }
}
