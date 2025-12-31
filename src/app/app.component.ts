import { toSignal } from "@angular/core/rxjs-interop";
import { map } from "rxjs/operators";
import { FlagsService } from "./flags.service";
import { Component, computed, inject, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: false,
})
export class AppComponent {
  private readonly flagService = inject(FlagsService);
  public countries = toSignal(
    this.flagService
      .getAllCountry()
      .pipe(map((data) => this.sortByOfficialName(data))),
    {
      initialValue: [],
    }
  );
  selectedCountry: any;

  public selectCountry(event) {
    const name = event.target.value;
    this.flagService.getCountryByName(name).subscribe((data) => {
      this.selectedCountry = data[0];
    });
  }

  private sortByOfficialName(countries) {
    return [...countries].sort((a, b) => {
      const nameA = a.name.official.toLowerCase();
      const nameB = b.name.official.toLowerCase();

      return nameA.localeCompare(nameB);
    });
  }
}
