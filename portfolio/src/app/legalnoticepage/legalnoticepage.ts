import { Component } from '@angular/core';
import { Header } from "../shared/singlecomponents/header/header";
import { Footer } from "../shared/singlecomponents/footer/footer";

@Component({
  selector: 'app-legalnoticepage',
  imports: [Header, Footer],
  templateUrl: './legalnoticepage.html',
  styleUrl: './legalnoticepage.scss'
})
export class Legalnoticepage {

}
