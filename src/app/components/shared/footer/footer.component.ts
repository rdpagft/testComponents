import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  mostrarMenuRestante: boolean;
  currentRoute: string;
  subscription !: Subscription;
  constructor(private router: Router) {
    this.mostrarMenuRestante = false
    this.currentRoute = "";

  
  }
  
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  ngOnInit(): void { 
  }

  getRoute(){
    this.subscription = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        // Show loading indicator
        console.log('Route change detected');
      }

      if (event instanceof NavigationEnd) {
        // Hide loading indicator
        this.currentRoute = event.url;          
          console.log(event);
      }
    });
  }
  mostrarOpcionesRestantes(){
    console.log("mostrar menu");
    this.mostrarMenuRestante =  true
  }
  ocultarOpcionesRestantes(){
    console.log("mostrar menu");
    this.mostrarMenuRestante =  false
  }
}
