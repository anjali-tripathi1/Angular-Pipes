import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from "./admin/admin";
import { PercentPipe } from '@angular/common';
import { PercentagePipe } from './pipes/percentage.pipe';


@Component({
  selector: 'app-root',
  imports: [Admin, ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pipes';
}
