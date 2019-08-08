import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkService } from '../work.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todoTitle: string;
  todoForm: FormGroup;
  works: string[];

  constructor( private workService: WorkService,
               private formBuilder: FormBuilder
            ) { }

  ngOnInit() {
    this.todoForm = this.formBuilder.group({
      title: ['', [Validators.required]]
    });
    this.works = this.workService.findAll();
    this.todoTitle = '';
  }

  add(): void {
    this.workService.add(this.todoForm.value.title);
    this.works = this.workService.findAll();
    this.todoTitle = '';
  }

  delete(index: number): void {
    let result = confirm('Are you sure?');
    if(result){
      this.workService.delete(index);
      this.works = this.workService.findAll();
    }
  }


}
