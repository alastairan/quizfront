import { Component } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'nav',
  template: `
    <mat-toolbar>
        <button mat-button routerLink="/">My Quiz</button>
        <button mat-button routerLink="/play">Play</button>
        <span style="flex: 1 1 auto;"></span>
        <button mat-button *ngIf="!auth.isAuthenticated" routerLink="/register">Register</button>
        <button mat-button *ngIf="!auth.isAuthenticated" routerLink="/login">Login</button>
        <button mat-button *ngIf="auth.isAuthenticated" (click)="logout()">Logout</button>
    </mat-toolbar>
  `
})
export class NavComponent {
  auth = {} as any;
  constructor(private auths: AuthService){
    this.auth = auths;
  }
  logout(){
    this.auth.logout();
  }
}