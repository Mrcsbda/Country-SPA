import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.scss'
})

export class ByRegionPageComponent implements OnInit {
  countries: Country[] = [];
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion?: Region;

  constructor(private countriesService: CountriesService) { }
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  searchByRegion = (term: Region) => {
    this.selectedRegion = term;
    this.countriesService.searchRegion(term)
      .subscribe(countries => {
        this.countries = countries;
      })
    console.log(this.selectedRegion)
  }
}
