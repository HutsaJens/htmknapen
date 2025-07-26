import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="hero-section bg-maritime-gradient text-white relative overflow-hidden">
      <div class="container mx-auto px-4 py-16 lg:py-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="hero-content space-y-6">
            <div class="flex items-center space-x-4 mb-4">
              <i class="fas fa-anchor text-4xl lg:text-5xl text-yellow-300"></i>
              <div>
                <h1 class="text-4xl lg:text-6xl font-bold">HTMknapen</h1>
                <p class="text-xl lg:text-2xl opacity-90">Smart Steering Solutions</p>
              </div>
            </div>
            <p class="text-lg lg:text-xl opacity-80 leading-relaxed">
              <i class="fas fa-ship mr-2 text-yellow-300"></i>
              Innovatieve technologie voor veiliger en gemakkelijker varen
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <p-button 
                label="Ontdek onze oplossingen" 
                icon="fas fa-compass" 
                [raised]="true"
                size="large"
                routerLink="/solutions" 
                class="cta-button-primary">
              </p-button>
              <p-button 
                label="Leer ons team kennen" 
                icon="fas fa-users" 
                severity="secondary"
                [outlined]="true"
                size="large"
                routerLink="/team" 
                class="cta-button-secondary">
              </p-button>
            </div>
          </div>
          <div class="hero-image">
            <p-image 
              src="assets/hero_header.webp" 
              alt="HTMknapen Hero" 
              width="100%"
              [preview]="true"
              class="w-full rounded-lg shadow-2xl">
            </p-image>
          </div>
        </div>
      </div>
    </div>
    
    <section class="py-16 lg:py-24 bg-surface-50">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-surface-800 mb-4">
            <i class="fas fa-star text-yellow-500 mr-3"></i>
            Waarom HTMknapen?
          </h2>
          <p class="text-lg text-surface-600 max-w-2xl mx-auto">
            Ontdek waarom maritieme professionals over de hele wereld vertrouwen op onze innovatieve oplossingen
          </p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <p-card 
            header="Veiligheid" 
            subheader="Maximale veiligheid op het water"
            styleClass="feature-card h-full">
            <ng-template pTemplate="header">
              <div class="relative">
                <p-image 
                  src="assets/very_safe.webp" 
                  alt="Veiligheid" 
                  width="100%"
                  height="200px"
                  [preview]="true"
                  class="w-full object-cover">
                </p-image>
                <div class="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <i class="fas fa-shield-alt text-2xl text-green-600"></i>
                </div>
              </div>
            </ng-template>
            
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-surface-700">
                <i class="fas fa-check-circle text-green-600"></i>
                <span class="font-medium">Geavanceerde sensoren</span>
              </div>
              <div class="flex items-center space-x-2 text-surface-700">
                <i class="fas fa-check-circle text-green-600"></i>
                <span class="font-medium">Real-time monitoring</span>
              </div>
              <div class="flex items-center space-x-2 text-surface-700">
                <i class="fas fa-check-circle text-green-600"></i>
                <span class="font-medium">Automatische waarschuwingen</span>
              </div>
            </div>
          </p-card>

          <p-card 
            header="Draadloze controle" 
            subheader="Innovatieve draadloze besturing"
            styleClass="feature-card h-full">
            <ng-template pTemplate="header">
              <div class="relative">
                <p-image 
                  src="assets/wireless_tech.webp" 
                  alt="Draadloze technologie" 
                  width="100%"
                  height="200px"
                  [preview]="true"
                  class="w-full object-cover">
                </p-image>
                <div class="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <i class="fas fa-wifi text-2xl text-blue-600"></i>
                </div>
              </div>
            </ng-template>
            
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-surface-700">
                <i class="fas fa-check-circle text-blue-600"></i>
                <span class="font-medium">Draadloze communicatie</span>
              </div>
              <div class="flex items-center space-x-2 text-surface-700">
                <i class="fas fa-check-circle text-blue-600"></i>
                <span class="font-medium">Lange batterijduur</span>
              </div>
              <div class="flex items-center space-x-2 text-surface-700">
                <i class="fas fa-check-circle text-blue-600"></i>
                <span class="font-medium">Gebruiksvriendelijk</span>
              </div>
            </div>
          </p-card>

          <p-card 
            header="Expertise" 
            subheader="Ervaren ingenieurs en professionals"
            styleClass="feature-card h-full">
            <ng-template pTemplate="header">
              <div class="relative">
                <p-image 
                  src="assets/engineering_workspace.webp" 
                  alt="Engineering" 
                  width="100%"
                  height="200px"
                  [preview]="true"
                  class="w-full object-cover">
                </p-image>
                <div class="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
                  <i class="fas fa-cogs text-2xl text-orange-600"></i>
                </div>
              </div>
            </ng-template>
            
            <div class="space-y-3">
              <div class="flex items-center space-x-2 text-surface-700">
                <i class="fas fa-check-circle text-orange-600"></i>
                <span class="font-medium">15+ jaar ervaring</span>
              </div>
              <div class="flex items-center space-x-2 text-surface-700">
                <i class="fas fa-check-circle text-orange-600"></i>
                <span class="font-medium">Multidisciplinair team</span>
              </div>
              <div class="flex items-center space-x-2 text-surface-700">
                <i class="fas fa-check-circle text-orange-600"></i>
                <span class="font-medium">24/7 ondersteuning</span>
              </div>
            </div>
          </p-card>
        </div>

        <div class="text-center mt-12">
          <p-button 
            label="Bekijk alle voordelen" 
            icon="fas fa-arrow-right" 
            iconPos="right"
            [outlined]="true"
            size="large"
            routerLink="/solutions">
          </p-button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cta-button-primary ::ng-deep .p-button {
      background: white !important;
      color: #1e40af !important;
      border: none !important;
      font-weight: 600 !important;
    }
    
    .cta-button-primary ::ng-deep .p-button:hover {
      background: #f1f5f9 !important;
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.15);
    }
    
    .cta-button-secondary ::ng-deep .p-button {
      color: white !important;
      border-color: white !important;
      background: transparent !important;
    }
    
    .cta-button-secondary ::ng-deep .p-button:hover {
      background: white !important;
      color: #1e40af !important;
      transform: translateY(-2px);
    }
    
    .feature-card ::ng-deep .p-card {
      height: 100%;
      transition: all 0.3s ease;
      border: 1px solid #e2e8f0;
    }
    
    .feature-card ::ng-deep .p-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    
    .feature-card ::ng-deep .p-card-header {
      padding: 0;
    }
    
    .feature-card ::ng-deep .p-card-body {
      padding: 1.5rem;
    }
    
    .feature-card ::ng-deep .p-card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 0.5rem;
    }
    
    .feature-card ::ng-deep .p-card-subtitle {
      color: #64748b;
      margin-bottom: 1rem;
    }
  `],
  imports: [RouterLink, ButtonModule, CardModule, ImageModule, DividerModule]
})
export class HomeComponent {}