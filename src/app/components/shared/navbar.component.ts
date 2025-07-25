import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="navbar bg-maritime-gradient text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="nav-brand">
          <h1 class="text-xl lg:text-2xl font-bold">HTMknapen</h1>
          <span class="text-sm opacity-90 hidden sm:block">Smart Steering Solutions</span>
        </div>
        
        <!-- Desktop Menu -->
        <div class="nav-menu hidden md:flex space-x-8">
          <a 
            routerLink="/" 
            routerLinkActive="!text-yellow-300 !font-semibold"
            [routerLinkActiveOptions]="{exact: true}"
            class="text-white hover:text-yellow-300 transition-colors">
            Home
          </a>
          <a 
            routerLink="/solutions" 
            routerLinkActive="!text-yellow-300 !font-semibold"
            class="text-white hover:text-yellow-300 transition-colors">
            Solutions
          </a>
          <a 
            routerLink="/team" 
            routerLinkActive="!text-yellow-300 !font-semibold"
            class="text-white hover:text-yellow-300 transition-colors">
            Team
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          (click)="toggleMobileMenu()"
          class="md:hidden flex flex-col space-y-1 focus:outline-none"
          [class.active]="isMobileMenuOpen()">
          <span class="block w-6 h-0.5 bg-white transition-transform" 
                [class.rotate-45]="isMobileMenuOpen()" 
                [class.translate-y-1.5]="isMobileMenuOpen()"></span>
          <span class="block w-6 h-0.5 bg-white transition-opacity" 
                [class.opacity-0]="isMobileMenuOpen()"></span>
          <span class="block w-6 h-0.5 bg-white transition-transform" 
                [class.-rotate-45]="isMobileMenuOpen()" 
                [class.-translate-y-1.5]="isMobileMenuOpen()"></span>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div 
        class="md:hidden bg-blue-800 border-t border-blue-600 transition-all duration-300"
        [class.max-h-48]="isMobileMenuOpen()"
        [class.max-h-0]="!isMobileMenuOpen()"
        [class.overflow-hidden]="!isMobileMenuOpen()">
        <div class="container mx-auto px-4 py-4 space-y-3">
          <a 
            routerLink="/" 
            routerLinkActive="!text-yellow-300 !font-semibold"
            [routerLinkActiveOptions]="{exact: true}"
            (click)="closeMobileMenu()"
            class="block text-white hover:text-yellow-300 transition-colors">
            Home
          </a>
          <a 
            routerLink="/solutions" 
            routerLinkActive="!text-yellow-300 !font-semibold"
            (click)="closeMobileMenu()"
            class="block text-white hover:text-yellow-300 transition-colors">
            Solutions
          </a>
          <a 
            routerLink="/team" 
            routerLinkActive="!text-yellow-300 !font-semibold"
            (click)="closeMobileMenu()"
            class="block text-white hover:text-yellow-300 transition-colors">
            Team
          </a>
        </div>
      </div>
    </nav>
  `,
  imports: [RouterLink, RouterLinkActive, CommonModule]
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