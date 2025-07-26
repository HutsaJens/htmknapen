import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-surface-800 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          <!-- Company Info -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <i class="fas fa-anchor text-2xl text-blue-400"></i>
              <div>
                <h3 class="text-xl font-bold">HTMknapen</h3>
                <p class="text-sm text-gray-300">Smart Steering Solutions</p>
              </div>
            </div>
            <p class="text-gray-300 leading-relaxed">
              Innovatieve technologie voor veiliger en gemakkelijker varen. 
              Wij zijn uw partner in maritime technologie.
            </p>
          </div>

          <!-- Quick Links -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold flex items-center">
              <i class="fas fa-link mr-2 text-blue-400"></i>
              Snelle links
            </h4>
            <div class="space-y-2">
              <p-button 
                label="Home" 
                icon="fas fa-home" 
                [text]="true" 
                size="small"
                class="footer-link">
              </p-button>
              <p-button 
                label="Oplossingen" 
                icon="fas fa-cogs" 
                [text]="true" 
                size="small"
                class="footer-link">
              </p-button>
              <p-button 
                label="Ons Team" 
                icon="fas fa-users" 
                [text]="true" 
                size="small"
                class="footer-link">
              </p-button>
            </div>
          </div>

          <!-- Contact & Social -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold flex items-center">
              <i class="fas fa-address-book mr-2 text-blue-400"></i>
              Contact
            </h4>
            <div class="space-y-3">
              <div class="flex items-center space-x-3 text-gray-300">
                <i class="fas fa-envelope text-blue-400"></i>
                <span class="text-sm">info@htmknapen.nl</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-300">
                <i class="fas fa-map-marker-alt text-blue-400"></i>
                <span class="text-sm">Nederland</span>
              </div>
              <div class="flex items-center space-x-2">
                <p-button 
                  icon="fab fa-instagram" 
                  [text]="true" 
                  [raised]="false"
                  size="small"
                  class="social-button"
                  pTooltip="Volg ons op Instagram"
                  tooltipPosition="top">
                </p-button>
                <p-button 
                  icon="fab fa-linkedin" 
                  [text]="true" 
                  [raised]="false"
                  size="small"
                  class="social-button"
                  pTooltip="Verbind met ons op LinkedIn"
                  tooltipPosition="top">
                </p-button>
                <p-button 
                  icon="fas fa-ship" 
                  [text]="true" 
                  [raised]="false"
                  size="small"
                  class="social-button"
                  pTooltip="Maritime innovatie"
                  tooltipPosition="top">
                </p-button>
              </div>
            </div>
          </div>
        </div>

        <p-divider></p-divider>

        <div class="flex flex-col sm:flex-row justify-between items-center pt-6">
          <p class="text-sm text-gray-400 mb-4 sm:mb-0 flex items-center">
            <i class="fas fa-copyright mr-2"></i>
            2025 HTMknapen - Smart Steering Solutions
          </p>
          <div class="text-sm text-gray-400 flex items-center">
            <i class="fas fa-code mr-2 text-blue-400"></i>
            Gebouwd met Angular & PrimeNG
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer-link ::ng-deep .p-button {
      color: #d1d5db !important;
      padding: 0.25rem 0 !important;
      justify-content: flex-start !important;
      background: transparent !important;
      border: none !important;
    }
    
    .footer-link ::ng-deep .p-button:hover {
      color: #60a5fa !important;
      background: transparent !important;
    }
    
    .social-button ::ng-deep .p-button {
      color: #9ca3af !important;
      background: transparent !important;
      border: 1px solid #374151 !important;
      width: 2.5rem !important;
      height: 2.5rem !important;
    }
    
    .social-button ::ng-deep .p-button:hover {
      color: #ffffff !important;
      background: #3b82f6 !important;
      border-color: #3b82f6 !important;
    }
  `],
  imports: [ButtonModule, DividerModule, TooltipModule]
})
export class FooterComponent {}