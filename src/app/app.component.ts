import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoadingComponent } from './shared/loading/loading.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoadingComponent]
})
export class AppComponent implements OnInit {
  title = 'mi-aplicacion';
  isLoading = true;

  ngOnInit() {
    // Simula una carga de datos
    setTimeout(() => {
      this.isLoading = false;
    },2000); // 2 segundos de carga
  }
}
