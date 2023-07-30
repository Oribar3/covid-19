import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  closeAppMenu(){
    document.getElementById("side-menu")?.classList.contains("open")?document.getElementById("side-menu")?.classList.remove("open"):document.getElementById("side-menu")?.classList.add("open")
  }
}
