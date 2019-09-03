import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.router.snapshot.queryParams);
    console.log(this.router.snapshot.fragment);
  }



}
