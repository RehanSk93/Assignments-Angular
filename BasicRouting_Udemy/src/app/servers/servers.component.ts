import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    servers = [
    {
      id: 1,
      name: 'Productionserver',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    }
  ];

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onReload() {
    this.router.navigate(['servers']);
    // this.router.navigate(['servers']); // both are same in navigate method
    // this.router.navigate(['/servers'], { relativeTo: this.route }); // Break the app here
    // this.router.navigate(['servers'], { relativeTo: this.route }); // Not Break the app here
  }

}
