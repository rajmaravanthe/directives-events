import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee Table!';

  employees = [{
    name: 'Rajesh',
    contact: '2452452',
    address: 'avf fadsf adfadf'
  },
  {
    name: 'Santhosh',
    contact: '12124',
    address: 'aaa ffg dfgdfh'
  },
  {
    name: 'Mahesh',
    contact: '56858',
    address: 'ddgg asda'
  }
  ]
}
