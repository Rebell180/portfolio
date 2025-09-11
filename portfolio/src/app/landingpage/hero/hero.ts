import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero{

  profession_special: string= "Frontend";
  profession: string = "DEVELOPER";
  waveButtonHover: boolean = false;

  constructor(){
  }

  switchPolaroid(hover: boolean) {
    const polaroidRef = document.getElementById("img-polaroid-frame") as HTMLImageElement;
    const polaroidTxtRef = document.getElementById("polaroid-txt");

    if(polaroidRef !== null && polaroidTxtRef !== null) {
      if(hover) {
        polaroidRef.src = "assets/img/elementtiles/polaroid.png";
        polaroidTxtRef.innerText = "Hallo :-D";
      } else {
        polaroidRef.src = "assets/img/elementtiles/polaroid_colored.png";
        polaroidTxtRef.innerText = "Hallo :-)";
      }
    }
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
