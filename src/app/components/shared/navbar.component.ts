import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="bg-maritime-gradient text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="container mx-auto px-4 py-3">
          <div class="flex justify-between items-center">
            <div class="nav-brand flex items-center space-x-3">
              <i class="fas fa-anchor text-2xl text-yellow-300"></i>
              <div>
                <h1 class="text-xl lg:text-2xl font-bold">HTMknapen</h1>
                <span class="text-sm opacity-90">Smart Steering Solutions</span>
              </div>
            </div>
            
            <div class="flex space-x-1">
              <p-button 
                label="Home" 
                icon="fas fa-home" 
                [text]="true" 
                [raised]="false"
                routerLink="/" 
                routerLinkActive="!bg-blue-800"
                [routerLinkActiveOptions]="{exact: true}"
                class="text-white nav-button">
              </p-button>
              <p-button 
                label="Solutions" 
                icon="fas fa-cogs" 
                [text]="true" 
                [raised]="false"
                routerLink="/solutions" 
                routerLinkActive="!bg-blue-800"
                class="text-white nav-button">
              </p-button>
              <p-button 
                label="Team" 
                icon="fas fa-users" 
                [text]="true" 
                [raised]="false"
                routerLink="/team" 
                routerLinkActive="!bg-blue-800"
                class="text-white nav-button">
              </p-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
          <div class="nav-brand flex items-center space-x-2">
            <i class="fas fa-anchor text-xl text-yellow-300"></i>
            <div>
              <h1 class="text-lg font-bold">HTMknapen</h1>
              <span class="text-xs opacity-90">Smart Steering Solutions</span>
            </div>
          </div>
          
          <p-button 
            icon="fas fa-bars" 
            [text]="true" 
            [raised]="false"
            (click)="toggleMobileMenu()"
            class="text-white">
          </p-button>
        </div>
      </div>
    </div>

    <!-- Mobile Sidebar -->
    <p-drawer 
      [(visible)]="isMobileMenuOpen" 
      position="right"
      [modal]="true"
      styleClass="w-80">
      <ng-template pTemplate="header">
        <div class="flex items-center space-x-2">
          <i class="fas fa-anchor text-xl text-blue-600"></i>
          <span class="font-bold text-lg">HTMknapen</span>
        </div>
      </ng-template>
      
      <div class="flex flex-col space-y-2">
        <p-button 
          label="Home" 
          icon="fas fa-home" 
          [text]="true" 
          [raised]="false"
          routerLink="/" 
          routerLinkActive="!bg-blue-100"
          [routerLinkActiveOptions]="{exact: true}"
          (click)="closeMobileMenu()"
          class="w-full justify-start">
        </p-button>
        <p-button 
          label="Solutions" 
          icon="fas fa-cogs" 
          [text]="true" 
          [raised]="false"
          routerLink="/solutions" 
          routerLinkActive="!bg-blue-100"
          (click)="closeMobileMenu()"
          class="w-full justify-start">
        </p-button>
        <p-button 
          label="Team" 
          icon="fas fa-users" 
          [text]="true" 
          [raised]="false"
          routerLink="/team" 
          routerLinkActive="!bg-blue-100"
          (click)="closeMobileMenu()"
          class="w-full justify-start">
        </p-button>
      </div>
    </p-drawer>
  `,
  styles: [`
    .nav-button ::ng-deep .p-button {
      color: white !important;
      border: none !important;
      background: transparent !important;
    }
    
    .nav-button ::ng-deep .p-button:hover {
      background: rgba(255, 255, 255, 0.1) !important;
      color: #fde047 !important;
    }
    
    .nav-button ::ng-deep .p-button.router-link-active {
      background: rgba(30, 64, 175, 0.8) !important;
      color: #fde047 !important;
    }
  `],
  imports: [RouterLink, RouterLinkActive, CommonModule, MenubarModule, ButtonModule, DrawerModule]
})
export class NavbarComponent {
  protected readonly isMobileMenuOpen = signal(false);

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(isOpen => !isOpen);
  }

  protected closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}