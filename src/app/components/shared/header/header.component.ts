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
  showTableAction:boolean;

  constructor(private router: Router) {
    this.nameRoute = "";  
    this.showTableAction = true
  }
 
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  ngOnInit(): void { 
    this.getRoute()
  }
  back(){
    this.showTableAction = false
  }

  getRoute(){
    this.subscription = this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.nameRoute = event.url.toString().replace('/', '');          
        if(this.nameRoute == "administracion") this.nameRoute = "administración"
      }
    });
  }
}
