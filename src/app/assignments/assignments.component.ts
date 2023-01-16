import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  existe=true
  Assignments=[
    {
        nom:"Devoire angular de M.Buffa",
        dateDeRendu:"2022-01-25",
        rendu:false
    },
    {
      nom:"Devoire R de M.Pasquier",
      dateDeRendu:"2022-02-22",
      rendu:false
  },
  {
    nom:"Devoire mongodb de M.Mopolo",
    dateDeRendu:"2022-02-02",
    rendu:true
},
  ];
}
