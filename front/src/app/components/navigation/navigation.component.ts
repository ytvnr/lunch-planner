import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Route, Router, Routes } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'lp-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {

  public title: string = 'Lunch Planner';
  public menuItems: Route[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  ngOnInit(): void {
    this.initMenuItems()
  }

  private initMenuItems() {
    this.menuItems = this.router.config.filter(route => route.data?.tag === 'menu');
  }
}
