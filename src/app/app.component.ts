import { Cycle } from './cycle.interface';
import { Component } from '@angular/core';
import { DataProviderService } from './data-provider.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'My cycle';
  displayTable: boolean = false;

  // private file;

  constructor(
    private dataProvider: DataProviderService
  ){

  }

  // onChange(event) {
  //   this.file = event.srcElement.files;
  //   console.log(this.file);
  // }

  // private cycles = "../assets/data/cycles.csv";
  cycles: Array<Cycle> = [
    {
      lp: 1,
      startOfPeriodDayOfMonth: 2,
      monthLength: 3,
      daysToEndOfTheMonthFromPeriodStart: 4,
      lengthOfCycle: 5,
      ovulationDayInCycle: 6,
      differenceOfLengthWithPreviousCycle: 7,
      month: "8",
      year: 9
    },
    {
      lp: 2,
      startOfPeriodDayOfMonth: 12,
      monthLength: 13,
      daysToEndOfTheMonthFromPeriodStart: 14,
      lengthOfCycle: 15,
      ovulationDayInCycle: 16,
      differenceOfLengthWithPreviousCycle: 17,
      month: "18",
      year: 19
    }
  ]

  clickedButton() {
    this.displayTable = !this.displayTable;
    // this.dataProvider.parseMe(this.file);
  }
}
