import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { TagModule } from 'primeng/tag';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-solutions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-header bg-maritime-gradient text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <div class="flex justify-center items-center space-x-4 mb-4">
          <i class="fas fa-cogs text-4xl text-yellow-300"></i>
          <h1 class="text-4xl lg:text-5xl font-bold">Onze Oplossingen</h1>
        </div>
        <p class="text-lg opacity-90">
          <i class="fas fa-lightbulb mr-2 text-yellow-300"></i>
          Innovatieve producten voor moderne bootvaart
        </p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <!-- Main Product Section -->
      <section class="mb-16">
        <p-card styleClass="product-hero-card">
          <ng-template pTemplate="header">
            <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 text-center">
              <div class="flex justify-center items-center space-x-3 mb-3">
                <i class="fas fa-ship text-3xl text-yellow-300"></i>
                <h2 class="text-3xl lg:text-4xl font-bold">Steermate 1</h2>
              </div>
              <p class="text-xl opacity-90">De toekomst van bootbesturing</p>
              <div class="flex justify-center mt-4">
                <p-tag 
                  value="In Ontwikkeling" 
                  severity="warning" 
                  icon="fas fa-tools">
                </p-tag>
              </div>
            </div>
          </ng-template>
          
          <div class="grid lg:grid-cols-2 gap-8 items-center">
            <div class="product-content space-y-6">
              <p class="text-lg text-surface-700 leading-relaxed">
                <i class="fas fa-rocket text-blue-600 mr-2"></i>
                Wij ontwikkelen de <strong>Steermate 1</strong>: een innovatief product waarmee je je boot op afstand kunt besturen, 
                bijvoorbeeld met een afstandsbediening. Perfect voor gemak, veiligheid en plezier op het water!
              </p>
              
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="space-y-3">
                  <div class="flex items-center text-surface-700">
                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                    <span>Draadloze afstandsbediening</span>
                  </div>
                  <div class="flex items-center text-surface-700">
                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                    <span>Veilige en betrouwbare verbinding</span>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center text-surface-700">
                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                    <span>Eenvoudige installatie</span>
                  </div>
                  <div class="flex items-center text-surface-700">
                    <i class="fas fa-check-circle text-green-600 mr-3"></i>
                    <span>Compatibel met verschillende boottypen</span>
                  </div>
                </div>
              </div>
              
              <div class="flex flex-col sm:flex-row gap-3 pt-4">
                <p-button 
                  label="Meer informatie" 
                  icon="fas fa-info-circle" 
                  [raised]="true"
                  size="large">
                </p-button>
                <p-button 
                  label="Contact opnemen" 
                  icon="fas fa-envelope" 
                  severity="secondary"
                  [outlined]="true"
                  size="large">
                </p-button>
              </div>
            </div>
            
            <div class="product-image">
              <p-image 
                src="assets/remote_controll.webp" 
                alt="Steermate 1 Remote Control" 
                width="100%"
                [preview]="true"
                class="w-full rounded-lg shadow-lg">
              </p-image>
            </div>
          </div>
        </p-card>
      </section>

      <!-- Technical Details -->
      <section class="mb-16">
        <div class="text-center mb-8">
          <h3 class="text-2xl lg:text-3xl font-bold text-surface-800 mb-4">
            <i class="fas fa-wrench text-blue-600 mr-3"></i>
            Technische Details
          </h3>
        </div>
        
        <p-accordion [(value)]="activeAccordion">
          <p-accordion-panel value="connectivity">
            <p-accordion-header>
              <i class="fas fa-wifi mr-2 text-blue-600"></i>
              <span>Connectiviteit en Bereik</span>
            </p-accordion-header>
            <p-accordion-content>
              <div class="space-y-4">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 class="font-semibold text-surface-800 mb-3">
                      <i class="fas fa-signal mr-2 text-green-600"></i>
                      Draadloze Technologie
                    </h4>
                    <ul class="space-y-2 text-surface-700">
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        2.4GHz frequentie voor betrouwbare verbinding
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Bereik tot 100 meter in open water
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Automatische heropbouw van verbinding
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-surface-800 mb-3">
                      <i class="fas fa-battery-half mr-2 text-orange-600"></i>
                      Batterij en Voeding
                    </h4>
                    <ul class="space-y-2 text-surface-700">
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        12V bootspanning of interne batterij
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Batterijduur tot 48 uur
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Laadstation inbegrepen
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </p-accordion-content>
          </p-accordion-panel>

          <p-accordion-panel value="installation">
            <p-accordion-header>
              <i class="fas fa-tools mr-2 text-blue-600"></i>
              <span>Installatie en Compatibiliteit</span>
            </p-accordion-header>
            <p-accordion-content>
              <div class="space-y-4">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 class="font-semibold text-surface-800 mb-3">
                      <i class="fas fa-screwdriver-wrench mr-2 text-purple-600"></i>
                      Installatie
                    </h4>
                    <ul class="space-y-2 text-surface-700">
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Plug-and-play installatie
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Geen modificaties aan bestaande systemen
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Professionele installatie service beschikbaar
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-surface-800 mb-3">
                      <i class="fas fa-ship mr-2 text-teal-600"></i>
                      Compatibiliteit
                    </h4>
                    <ul class="space-y-2 text-surface-700">
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Geschikt voor boten 6-15 meter
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Werkt met hydraulische en elektrische stuursystemen
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Ondersteunt zowel in- als buitenboordmotoren
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </p-accordion-content>
          </p-accordion-panel>

          <p-accordion-panel value="safety">
            <p-accordion-header>
              <i class="fas fa-shield-alt mr-2 text-blue-600"></i>
              <span>Veiligheid en Certificering</span>
            </p-accordion-header>
            <p-accordion-content>
              <div class="space-y-4">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 class="font-semibold text-surface-800 mb-3">
                      <i class="fas fa-lock mr-2 text-red-600"></i>
                      Veiligheidsfuncties
                    </h4>
                    <ul class="space-y-2 text-surface-700">
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Automatische stop bij verbindingsverlies
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Noodstop functie op afstandsbediening
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Dubbele beveiligingssystemen
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-semibold text-surface-800 mb-3">
                      <i class="fas fa-certificate mr-2 text-yellow-600"></i>
                      Certificeringen
                    </h4>
                    <ul class="space-y-2 text-surface-700">
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        CE-markering conform EU-richtlijnen
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        IP67 waterdicht classificatie
                      </li>
                      <li class="flex items-center">
                        <i class="fas fa-dot-circle text-blue-600 mr-2"></i>
                        Maritime industrie standaarden
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </p-accordion-content>
          </p-accordion-panel>
        </p-accordion>
      </section>

      <!-- Product Gallery -->
      <section>
        <div class="text-center mb-8">
          <h3 class="text-2xl lg:text-3xl font-bold text-surface-800 mb-4">
            <i class="fas fa-images text-blue-600 mr-3"></i>
            Product Galerij
          </h3>
          <p class="text-lg text-surface-600">Bekijk hoe onze oplossingen werken in de praktijk</p>
        </div>
        
        <div class="grid md:grid-cols-3 gap-6">
          <p-card styleClass="gallery-card">
            <ng-template pTemplate="header">
              <p-image 
                src="assets/steering_wheel_detail.webp" 
                alt="Stuurwiel detail" 
                width="100%"
                height="200px"
                [preview]="true"
                class="w-full object-cover">
              </p-image>
            </ng-template>
            <div class="text-center">
              <h4 class="font-semibold text-surface-800 mb-2">
                <i class="fas fa-steering-wheel mr-2 text-blue-600"></i>
                Geavanceerd Stuurwiel Systeem
              </h4>
              <p class="text-surface-600">Precisie en controle in perfecte harmonie</p>
            </div>
          </p-card>

          <p-card styleClass="gallery-card">
            <ng-template pTemplate="header">
              <p-image 
                src="assets/boat_interior.webp" 
                alt="Boot interieur" 
                width="100%"
                height="200px"
                [preview]="true"
                class="w-full object-cover">
              </p-image>
            </ng-template>
            <div class="text-center">
              <h4 class="font-semibold text-surface-800 mb-2">
                <i class="fas fa-puzzle-piece mr-2 text-green-600"></i>
                Naadloze Integratie
              </h4>
              <p class="text-surface-600">Perfect geïntegreerd in uw bootinterieur</p>
            </div>
          </p-card>

          <p-card styleClass="gallery-card">
            <ng-template pTemplate="header">
              <p-image 
                src="assets/marina_hub.webp" 
                alt="Marina Hub" 
                width="100%"
                height="200px"
                [preview]="true"
                class="w-full object-cover">
              </p-image>
            </ng-template>
            <div class="text-center">
              <h4 class="font-semibold text-surface-800 mb-2">
                <i class="fas fa-anchor mr-2 text-orange-600"></i>
                Marina Gebruik
              </h4>
              <p class="text-surface-600">Perfect voor manoeuvreren in de marina</p>
            </div>
          </p-card>
        </div>

        <div class="text-center mt-8">
          <p-button 
            label="Ontdek meer mogelijkheden" 
            icon="fas fa-external-link-alt" 
            iconPos="right"
            [outlined]="true"
            size="large">
          </p-button>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .product-hero-card ::ng-deep .p-card {
      border: none;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    
    .product-hero-card ::ng-deep .p-card-header {
      padding: 0;
    }
    
    .product-hero-card ::ng-deep .p-card-body {
      padding: 2rem;
    }
    
    .gallery-card ::ng-deep .p-card {
      height: 100%;
      transition: all 0.3s ease;
      border: 1px solid #e2e8f0;
    }
    
    .gallery-card ::ng-deep .p-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    }
    
    .gallery-card ::ng-deep .p-card-header {
      padding: 0;
    }
    
    .gallery-card ::ng-deep .p-card-body {
      padding: 1.5rem;
    }
  `],
  imports: [ButtonModule, CardModule, ImageModule, TagModule, DividerModule, AccordionModule]
})
export class SolutionsComponent {
  protected readonly activeAccordion = signal('connectivity');
}