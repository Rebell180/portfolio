import { Component } from '@angular/core';
import { Skill } from '../../shared/models/Skill';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {

  skills: Array<Skill> = [
    new Skill("HTML", "assets/img/icons/colored/symbol_html5.png"),
    new Skill("CSS", "assets/img/icons/colored/symbol_css.png"),
    new Skill("JavaScript", "assets/img/icons/colored/symbol_js.png"),
    new Skill("TypeScript", "assets/img/icons/colored/symbol_ts.png"),
    new Skill("Angular", "assets/img/icons/colored/symbol_ng.png"),

    new Skill("Firebase", "assets/img/icons/colored/symbol_fireb.png"),
    new Skill("Git", "assets/img/icons/colored/symbol_gitH.png"),
    new Skill("REST-API", "assets/img/icons/colored/symbol_api.png"),
    new Skill("Scrum", "assets/img/icons/colored/symbol_scrum.png"),
    new Skill("Material Design", "assets/img/icons/colored/symbol_mat_design.png"),
    
  ]


}
