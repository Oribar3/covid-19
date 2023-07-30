import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  openAppMenu(){
    document.getElementById("side-menu")?.classList.contains("open")?document.getElementById("side-menu")?.classList.remove("open"):document.getElementById("side-menu")?.classList.add("open")
  }
}
