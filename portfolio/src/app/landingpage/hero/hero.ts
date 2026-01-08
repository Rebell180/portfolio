import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero{

  protected profession_special: string= "Frontend";
  protected profession: string = "DEVELOPER";
  protected waveButtonHover: boolean = false;
  private translate = inject(TranslateService);

  constructor(){
  }

  switchPolaroid(hover: boolean) {
    const polaroidRef = document.getElementById("img-polaroid-frame") as HTMLImageElement;
    const polaroidTxtRef = document.getElementById("polaroid-smile-txt");

    if(polaroidRef !== null && polaroidTxtRef !== null) {
      if(hover) {
        polaroidRef.src = "assets/img/elementtiles/polaroid_colored1.png";
        polaroidTxtRef.innerHTML = ":-D";
      } else {
        polaroidRef.src = "assets/img/elementtiles/polaroid_colored1.png";
        polaroidTxtRef.innerHTML = `:-)`;
      }
    }
  }

  setOnClickStyle () {
    let btnRef = document.getElementById("btn-getintouch");
    if (btnRef != null) {
      btnRef.style.boxShadow.includes("none");
    }
  }

  setOnClickReleaseStyle () {
    let btnRef = document.getElementById("btn-getintouch");
    if (btnRef != null) {
      btnRef.style.boxShadow.includes("mixins.boxSh();");
    }
  }
}
