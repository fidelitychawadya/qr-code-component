import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QrCardComponent} from "./qr-card/qr-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QrCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'qr-code-project';
}
