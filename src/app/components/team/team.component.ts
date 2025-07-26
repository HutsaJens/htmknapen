import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-team',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-header bg-maritime-gradient text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <div class="flex justify-center items-center space-x-4 mb-4">
          <i class="fas fa-users text-4xl text-yellow-300"></i>
          <h1 class="text-4xl lg:text-5xl font-bold">Ons Team</h1>
        </div>
        <p class="text-lg opacity-90">
          <i class="fas fa-handshake mr-2 text-yellow-300"></i>
          Maak kennis met de experts achter HTMknapen
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <!-- About Us Section -->
      <section class="mb-16">
        <p-card styleClass="about-card">
          <ng-template pTemplate="header">
            <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 text-center">
              <div class="flex justify-center items-center space-x-3 mb-3">
                <i class="fas fa-lightbulb text-3xl text-yellow-300"></i>
                <h2 class="text-3xl lg:text-4xl font-bold">Wie zijn wij?</h2>
              </div>
              <p class="text-lg opacity-90">Passie voor innovatie, expertise in technologie</p>
            </div>
          </ng-template>
          
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="space-y-6">
              <p class="text-lg text-surface-700 leading-relaxed">
                <i class="fas fa-rocket text-blue-600 mr-2"></i>
                HTMknapen is een team van gepassioneerde ingenieurs en professionals die samenwerken om 
                innovatieve maritieme technologie te ontwikkelen.
              </p>
              <p class="text-lg text-surface-700 leading-relaxed">
                <i class="fas fa-puzzle-piece text-green-600 mr-2"></i>
                Ons diverse team combineert expertise in mechanica, elektronica, software en projectmanagement 
                om de beste oplossingen voor de maritieme industrie te creëren.
              </p>
              
              <div class="grid grid-cols-2 gap-4 pt-4">
                <div class="text-center p-4 bg-blue-50 rounded-lg">
                  <i class="fas fa-trophy text-2xl text-yellow-500 mb-2"></i>
                  <div class="text-2xl font-bold text-blue-600">15+</div>
                  <div class="text-sm text-surface-600">Jaar Ervaring</div>
                </div>
                <div class="text-center p-4 bg-green-50 rounded-lg">
                  <i class="fas fa-project-diagram text-2xl text-green-600 mb-2"></i>
                  <div class="text-2xl font-bold text-green-600">100+</div>
                  <div class="text-sm text-surface-600">Projecten</div>
                </div>
              </div>
            </div>
            
            <div class="text-center">
              <p-image 
                src="assets/captain.webp" 
                alt="Team Captain" 
                width="100%"
                [preview]="true"
                class="w-full rounded-lg shadow-lg">
              </p-image>
              <p class="text-sm text-surface-500 mt-3 italic">
                <i class="fas fa-anchor mr-2"></i>
                Leadership at the helm of innovation
              </p>
            </div>
          </div>
        </p-card>
      </section>

      <!-- Team Members Section -->
      <section>
        <div class="text-center mb-12">
          <h3 class="text-2xl lg:text-3xl font-bold text-surface-800 mb-4">
            <i class="fas fa-user-friends text-blue-600 mr-3"></i>
            Ons Expertiseteam
          </h3>
          <p class="text-lg text-surface-600 max-w-2xl mx-auto">
            Elke professional brengt unieke vaardigheden en expertise mee die bijdragen aan ons succes
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Jannick -->
          <p-card styleClass="team-card h-full">
            <ng-template pTemplate="header">
              <div class="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-700">
                <p-avatar 
                  icon="fas fa-user-tie" 
                  size="xlarge" 
                  shape="circle"
                  styleClass="bg-white text-blue-600 mb-4">
                </p-avatar>
                <h3 class="text-xl font-bold text-white">Jannick</h3>
                <div class="flex justify-center mt-2">
                  <p-tag 
                    value="Team Lead" 
                    severity="warning" 
                    icon="fas fa-crown">
                  </p-tag>
                </div>
              </div>
            </ng-template>
            
            <div class="space-y-4">
              <div class="space-y-2">
                <div class="flex items-center text-blue-600 font-semibold">
                  <i class="fas fa-briefcase mr-2"></i>
                  <span>Project Manager</span>
                </div>
                <div class="flex items-center text-green-600 font-semibold">
                  <i class="fas fa-users mr-2"></i>
                  <span>HR Manager</span>
                </div>
              </div>
              
              <p class="text-surface-600 leading-relaxed">
                Leidt het team en zorgt voor een optimale samenwerking tussen alle disciplines. 
                Verantwoordelijk voor strategische planning en teamcoördinatie.
              </p>
              
              <div class="flex space-x-2">
                <p-button 
                  icon="fab fa-linkedin" 
                  [text]="true" 
                  size="small"
                  pTooltip="LinkedIn Profiel"
                  tooltipPosition="top">
                </p-button>
                <p-button 
                  icon="fas fa-envelope" 
                  [text]="true" 
                  size="small"
                  pTooltip="E-mail Contact"
                  tooltipPosition="top">
                </p-button>
              </div>
            </div>
          </p-card>

          <!-- Stijn -->
          <p-card styleClass="team-card h-full">
            <ng-template pTemplate="header">
              <div class="text-center p-6 bg-gradient-to-br from-green-500 to-green-700">
                <p-avatar 
                  icon="fas fa-cogs" 
                  size="xlarge" 
                  shape="circle"
                  styleClass="bg-white text-green-600 mb-4">
                </p-avatar>
                <h3 class="text-xl font-bold text-white">Stijn</h3>
                <div class="flex justify-center mt-2">
                  <p-tag 
                    value="Mechanical" 
                    severity="success" 
                    icon="fas fa-wrench">
                  </p-tag>
                </div>
              </div>
            </ng-template>
            
            <div class="space-y-4">
              <div class="flex items-center text-green-600 font-semibold">
                <i class="fas fa-tools mr-2"></i>
                <span>Mechanical Engineer</span>
              </div>
              
              <p class="text-surface-600 leading-relaxed">
                Ontwerpt en ontwikkelt de mechanische componenten van onze systemen. 
                Expert in maritieme mechanica en productie.
              </p>
              
              <div class="space-y-2">
                <div class="flex items-center text-sm text-surface-600">
                  <i class="fas fa-check-circle text-green-600 mr-2"></i>
                  <span>3D Design & CAD</span>
                </div>
                <div class="flex items-center text-sm text-surface-600">
                  <i class="fas fa-check-circle text-green-600 mr-2"></i>
                  <span>Prototyping</span>
                </div>
              </div>
              
              <div class="flex space-x-2">
                <p-button 
                  icon="fab fa-linkedin" 
                  [text]="true" 
                  size="small"
                  pTooltip="LinkedIn Profiel"
                  tooltipPosition="top">
                </p-button>
                <p-button 
                  icon="fas fa-envelope" 
                  [text]="true" 
                  size="small"
                  pTooltip="E-mail Contact"
                  tooltipPosition="top">
                </p-button>
              </div>
            </div>
          </p-card>

          <!-- Niels -->
          <p-card styleClass="team-card h-full">
            <ng-template pTemplate="header">
              <div class="text-center p-6 bg-gradient-to-br from-purple-500 to-purple-700">
                <p-avatar 
                  icon="fas fa-microchip" 
                  size="xlarge" 
                  shape="circle"
                  styleClass="bg-white text-purple-600 mb-4">
                </p-avatar>
                <h3 class="text-xl font-bold text-white">Niels</h3>
                <div class="flex justify-center mt-2">
                  <p-tag 
                    value="Mechatronics" 
                    severity="contrast" 
                    icon="fas fa-robot">
                  </p-tag>
                </div>
              </div>
            </ng-template>
            
            <div class="space-y-4">
              <div class="flex items-center text-purple-600 font-semibold">
                <i class="fas fa-robot mr-2"></i>
                <span>Mechatronics Engineer</span>
              </div>
              
              <p class="text-surface-600 leading-relaxed">
                Combineert mechanica, elektronica en software voor geïntegreerde oplossingen. 
                Specialist in automatisering en controle systemen.
              </p>
              
              <div class="space-y-2">
                <div class="flex items-center text-sm text-surface-600">
                  <i class="fas fa-check-circle text-purple-600 mr-2"></i>
                  <span>Automation Systems</span>
                </div>
                <div class="flex items-center text-sm text-surface-600">
                  <i class="fas fa-check-circle text-purple-600 mr-2"></i>
                  <span>Control Engineering</span>
                </div>
              </div>
              
              <div class="flex space-x-2">
                <p-button 
                  icon="fab fa-linkedin" 
                  [text]="true" 
                  size="small"
                  pTooltip="LinkedIn Profiel"
                  tooltipPosition="top">
                </p-button>
                <p-button 
                  icon="fas fa-envelope" 
                  [text]="true" 
                  size="small"
                  pTooltip="E-mail Contact"
                  tooltipPosition="top">
                </p-button>
              </div>
            </div>
          </p-card>

          <!-- Max -->
          <p-card styleClass="team-card h-full">
            <ng-template pTemplate="header">
              <div class="text-center p-6 bg-gradient-to-br from-orange-500 to-orange-700">
                <p-avatar 
                  icon="fas fa-bolt" 
                  size="xlarge" 
                  shape="circle"
                  styleClass="bg-white text-orange-600 mb-4">
                </p-avatar>
                <h3 class="text-xl font-bold text-white">Max</h3>
                <div class="flex justify-center mt-2">
                  <p-tag 
                    value="Electrical" 
                    severity="danger" 
                    icon="fas fa-lightning-bolt">
                  </p-tag>
                </div>
              </div>
            </ng-template>
            
            <div class="space-y-4">
              <div class="flex items-center text-orange-600 font-semibold">
                <i class="fas fa-plug mr-2"></i>
                <span>Electrical Engineer</span>
              </div>
              
              <p class="text-surface-600 leading-relaxed">
                Ontwikkelt de elektrische systemen en zorgt voor betrouwbare verbindingen. 
                Expert in maritieme elektronica en power management.
              </p>
              
              <div class="space-y-2">
                <div class="flex items-center text-sm text-surface-600">
                  <i class="fas fa-check-circle text-orange-600 mr-2"></i>
                  <span>Circuit Design</span>
                </div>
                <div class="flex items-center text-sm text-surface-600">
                  <i class="fas fa-check-circle text-orange-600 mr-2"></i>
                  <span>Power Systems</span>
                </div>
              </div>
              
              <div class="flex space-x-2">
                <p-button 
                  icon="fab fa-linkedin" 
                  [text]="true" 
                  size="small"
                  pTooltip="LinkedIn Profiel"
                  tooltipPosition="top">
                </p-button>
                <p-button 
                  icon="fas fa-envelope" 
                  [text]="true" 
                  size="small"
                  pTooltip="E-mail Contact"
                  tooltipPosition="top">
                </p-button>
              </div>
            </div>
          </p-card>

          <!-- Jens -->
          <p-card styleClass="team-card h-full">
            <ng-template pTemplate="header">
              <div class="text-center p-6 bg-gradient-to-br from-teal-500 to-teal-700">
                <p-avatar 
                  icon="fas fa-code" 
                  size="xlarge" 
                  shape="circle"
                  styleClass="bg-white text-teal-600 mb-4">
                </p-avatar>
                <h3 class="text-xl font-bold text-white">Jens</h3>
                <div class="flex justify-center mt-2">
                  <p-tag 
                    value="Software" 
                    severity="info" 
                    icon="fas fa-laptop-code">
                  </p-tag>
                </div>
              </div>
            </ng-template>
            
            <div class="space-y-4">
              <div class="flex items-center text-teal-600 font-semibold">
                <i class="fas fa-laptop-code mr-2"></i>
                <span>Software Engineer</span>
              </div>
              
              <p class="text-surface-600 leading-relaxed">
                Programmeert de software en ontwikkelt gebruikersinterfaces voor onze producten. 
                Full-stack developer met focus op embedded systemen.
              </p>
              
              <div class="space-y-2">
                <div class="flex items-center text-sm text-surface-600">
                  <i class="fas fa-check-circle text-teal-600 mr-2"></i>
                  <span>Embedded Software</span>
                </div>
                <div class="flex items-center text-sm text-surface-600">
                  <i class="fas fa-check-circle text-teal-600 mr-2"></i>
                  <span>UI/UX Design</span>
                </div>
              </div>
              
              <p-divider></p-divider>
              
              <div class="text-center">
                <p class="text-xs text-surface-500 mb-2">
                  <i class="fas fa-info-circle mr-1"></i>
                  Website ontwikkeld door Jens
                </p>
                <p-button 
                  label="Bertenx.nl" 
                  icon="fas fa-external-link-alt" 
                  [text]="true" 
                  size="small"
                  class="text-teal-600">
                </p-button>
              </div>
              
              <div class="flex space-x-2">
                <p-button 
                  icon="fab fa-linkedin" 
                  [text]="true" 
                  size="small"
                  pTooltip="LinkedIn Profiel"
                  tooltipPosition="top">
                </p-button>
                <p-button 
                  icon="fas fa-envelope" 
                  [text]="true" 
                  size="small"
                  pTooltip="E-mail Contact"
                  tooltipPosition="top">
                </p-button>
                <p-button 
                  icon="fas fa-globe" 
                  [text]="true" 
                  size="small"
                  pTooltip="Website Portfolio"
                  tooltipPosition="top">
                </p-button>
              </div>
            </div>
          </p-card>
        </div>

        <div class="text-center mt-12">
          <p-button 
            label="Werk met ons samen" 
            icon="fas fa-handshake" 
            [raised]="true"
            size="large"
            class="mr-4">
          </p-button>
          <p-button 
            label="Neem contact op" 
            icon="fas fa-envelope" 
            severity="secondary"
            [outlined]="true"
            size="large">
          </p-button>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .about-card ::ng-deep .p-card {
      border: none;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    
    .about-card ::ng-deep .p-card-header {
      padding: 0;
    }
    
    .about-card ::ng-deep .p-card-body {
      padding: 2rem;
    }
    
    .team-card ::ng-deep .p-card {
      height: 100%;
      transition: all 0.3s ease;
      border: 1px solid #e2e8f0;
      overflow: hidden;
    }
    
    .team-card ::ng-deep .p-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 25px 50px rgba(0,0,0,0.15);
    }
    
    .team-card ::ng-deep .p-card-header {
      padding: 0;
    }
    
    .team-card ::ng-deep .p-card-body {
      padding: 1.5rem;
    }
    
    .team-card ::ng-deep .p-avatar {
      border: 3px solid white;
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }
  `],
  imports: [ButtonModule, CardModule, ImageModule, TagModule, DividerModule, AvatarModule, BadgeModule, TooltipModule]
})
export class TeamComponent {}