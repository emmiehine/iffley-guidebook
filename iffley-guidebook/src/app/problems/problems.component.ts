import { Component, OnInit } from '@angular/core';
import { Problem } from '../problem';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.component.html',
  styleUrls: ['./problems.component.css']
})
export class ProblemsComponent implements OnInit {

  route: Problem = {
    id: 1,
    name: "The Ladder",
    grades: ["4c","B0"],
    holds: [1,2,3,4],
    rules: ""
  }
  constructor() { }

  ngOnInit() {
  }

}
