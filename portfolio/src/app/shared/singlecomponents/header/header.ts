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
  protected lang : 'en' | 'de' = 'en';
  private translate = inject(TranslateService);

  useLanguage(language: string): void {
    this.translate.use(language);

    if(language == "en") {
      this.lang = 'en';
    }
    else {
      this.lang = 'de';
    }
  }
}
