import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { Header } from "../shared/singlecomponents/header/header";
import { Aboutme } from "./aboutme/aboutme";
import { Skills } from "./skills/skills";
import { Myprojects } from "./myprojects/myprojects";
import { Evaluation } from "./evaluation/evaluation";
import { Contact } from "./contact/contact";
import { Footer } from "../shared/singlecomponents/footer/footer";

@Component({
  selector: 'app-landingpage',
  imports: [Hero, Header, Aboutme, Skills, Myprojects, Evaluation, Contact, Footer],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss'
})
export class Landingpage {

}
