import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero implements OnInit{

  profession_special: string= "Frontend";
  profession: string = "DEVELOPER";

  ngOnInit(): void {

    
  }

  setOnClickStyle () {
    let btnRef = document.getElementById("btn-getintouch");
    if (btnRef != null) {
      btnRef.style.boxShadow.includes("none");// '@include mixins.boxSh();';
    }
  }

  setOnClickReleaseStyle () {
    let btnRef = document.getElementById("btn-getintouch");
    if (btnRef != null) {
      btnRef.style.boxShadow.includes("mixins.boxSh();");// '@include mixins.boxSh();';
    }
  }
}
