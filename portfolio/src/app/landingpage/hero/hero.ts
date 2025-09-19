import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero{

  profession_special: string= "Frontend";
  profession: string = "DEVELOPER";
  waveButtonHover: boolean = false;

  private translate = inject(TranslateService);

  constructor(){
  }

  switchPolaroid(hover: boolean) {
    const polaroidRef = document.getElementById("img-polaroid-frame") as HTMLImageElement;
    const polaroidTxtRef = document.getElementById("polaroid-smile-txt");

    if(polaroidRef !== null && polaroidTxtRef !== null) {
      if(hover) {
        polaroidRef.src = "assets/img/elementtiles/polaroid.png";
        polaroidTxtRef.innerHTML = ":-D";
      } else {
        polaroidRef.src = "assets/img/elementtiles/polaroid_colored.png";
        polaroidTxtRef.innerHTML = `:-)`;
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
