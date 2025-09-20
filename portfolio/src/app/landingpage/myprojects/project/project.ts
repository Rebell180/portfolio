import { Component, input } from '@angular/core';
import { SingleProject } from '../../../shared/models/SingleProject';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project {

  project = input.required<SingleProject>();

  




}
