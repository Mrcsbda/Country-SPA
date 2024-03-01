import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.scss'
})
export class ByCapitalPageComponent implements OnInit{
  countries: Country[] = [];
  initialValue: string = '';
  isLoading: boolean = false;
  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  searchByCapital = (term: string) => {
    this.isLoading = true;
    this.countriesService.searchCapital(term)
    .subscribe( countries => {
      this.countries = countries;
      this.isLoading = false;
    })
  }
}
