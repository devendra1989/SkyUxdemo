import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListSortFieldSelectorModel } from '@skyux/list-builder-common';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Registration } from '../model/registration.model';
//import { RegistrationService } from '../services/registration/registration.service';


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnDestroy {

  users: Registration[];
  private subscription: Subscription;


  public asyncHeading = new BehaviorSubject<string>('');

  public data: any[] = [
    { id: '1', name: 'Niels Bohr', email: 'niels.bohr@example.com', amount: 170.75, status: 'Paid' },
    { id: '2', name: 'Ada Lovelace', email: 'ada.lovelace@example.com', amount: 114.13, status: 'Paid' },
    { id: '3', name: 'Marie Curie', email: 'marie.curie@example.com', amount: 111, status: 'Past due' },
    { id: '4', name: 'Barbara McClintock', email: 'barbara.mcclintock@example.com', amount: 84.63, status: 'Paid' },
    { id: '5', name: 'Michael Faraday', email: 'michael.faraday@example.com', amount: 83.97, status: 'Paid' },
    { id: '6', name: 'Enrico Fermi', email: 'enrico.fermi@example.com', amount: 74.5, status: 'Past due' },
    { id: '7', name: 'Mae C. Jemison', email: 'mae.jemison@example.com', amount: 70.86, status: 'Paid' }
  ];

  public ngOnInit(): void {
    // Simulate async request:
    setTimeout(() => {
      this.asyncHeading.next('Amount');
    }, 1000);
  }

 



  // constructor(private registrationService : RegistrationService
  //   ) { 
  //   }

  // ngOnInit() {
  //   this.subscription = this.registrationService.getUsers()
  //     .subscribe(
  //       (users: Registration[]) => {
  //         this.users = users;
  //       }
  //     );
    
  // }

  public onSortChangeForGrid(activeSort: ListSortFieldSelectorModel): void {
    this.data = this.sortGridData(activeSort, this.data);
  }

  private sortGridData(activeSort: ListSortFieldSelectorModel, data: any[]): any[] {
    const sortField = activeSort.fieldSelector;
    const descending = activeSort.descending;

    return data.sort((a: any, b: any) => {
      let value1 = a[sortField];
      let value2 = b[sortField];

      if (value1 && typeof value1 === 'string') {
        value1 = value1.toLowerCase();
      }

      if (value2 && typeof value2 === 'string') {
        value2 = value2.toLowerCase();
      }

      if (value1 === value2) {
        return 0;
      }

      let result = value1 > value2 ? 1 : -1;

      if (descending) {
        result *= -1;
      }

      return result;
    }).slice();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
