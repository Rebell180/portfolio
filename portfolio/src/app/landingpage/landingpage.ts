import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Header } from "../shared/singlecomponents/header/header";

@Component({
  selector: 'app-landingpage',
  imports: [Hero, Header],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {

}
