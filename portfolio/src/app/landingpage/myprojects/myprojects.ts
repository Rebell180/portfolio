import { Component } from '@angular/core';
import { Project } from './project/project';
import { SingleProject } from '../../shared/models/SingleProject';

@Component({
  selector: 'app-myprojects',
  imports: [Project],
  templateUrl: './myprojects.html',
  styleUrl: './myprojects.scss'
})
export class Myprojects {

  teamproject: SingleProject = new SingleProject("Join", "Gruppenprojekt", "", true);
  projects: Array<SingleProject> = [
    new SingleProject("El Pollo Loco", "Einzelprojekt", "",  false),
    new SingleProject("Pokedex", "Einzelprojekt", "", false)
  ];



}
