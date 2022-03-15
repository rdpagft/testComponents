import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multi-excel';
 
}
