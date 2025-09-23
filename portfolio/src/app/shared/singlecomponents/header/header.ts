import { Component, inject } from '@angular/core';
import { Navbar } from "./navbar/navbar";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  isLangEN : boolean = true;
  isLangDE : boolean = false;
  // TODO durch enum ersetzen

  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);

    if(language == "en") {
      this.isLangDE = false;
      this.isLangEN = true;
    }
    else {
      this.isLangDE = true;
      this.isLangEN = false;
    }
  }
}
