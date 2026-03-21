import { booleanAttribute, Component, input, output } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  adminAcess = input<boolean>();
  fecharM = output<boolean>();

  fecharMenu() {
    this.fecharM.emit(true);
  }
}
