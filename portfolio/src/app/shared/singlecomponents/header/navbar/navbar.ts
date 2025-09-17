import { Component, inject } from '@angular/core';
import { TranslatePipe, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  private translate = inject(TranslateService);
}
