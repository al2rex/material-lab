import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'material-lab';
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];
  constructor(public breakpointObserver: BreakpointObserver) {
    
  }
  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
           console.log( 'Matches XSmall viewport');
      }
      if (state.breakpoints[Breakpoints.Small]) {
           console.log( 'Matches Small viewport');
      }
      if (state.breakpoints[Breakpoints.Medium]) {
           console.log( 'Matches Medium  viewport');
      }
      if (state.breakpoints[Breakpoints.Large]) {

          console.log( 'Matches Large viewport');
      }
      if (state.breakpoints[Breakpoints.XLarge]) {

         console.log( 'Matches XLarge viewport');   
      }
    });
  }
  
}
