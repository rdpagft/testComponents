import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  nameRoute:string;
  subscription !: Subscription;


  constructor(private router: Router) {
    this.nameRoute = "";  
  }
 
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  ngOnInit(): void { 
    this.getRoute()
  }

  getRoute(){
    this.subscription = this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.nameRoute = event.url.toString().replace('/', '');          
          console.log(event);
          console.log("route", this.nameRoute);
      }
    });
  }
}
