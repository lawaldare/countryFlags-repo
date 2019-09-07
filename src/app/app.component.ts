import { FlagsService } from './flags.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'countryFlags';
  countries: any;
  selectedCountry : any;


  constructor(private flagService: FlagsService) {
  }


  ngOnInit() {
    this.getCountries();
  }


  getCountries(){
    this.flagService.getAllCountry().subscribe(data => {
      this.countries = data;
    })
  }

  selectCountry(event){
    let name = event.target.value;
    this.flagService.getCountryByName(name).subscribe(data => {
      this.selectedCountry = data[0];
      console.log(this.selectedCountry)
    })
  }
}
