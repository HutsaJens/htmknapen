import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-solutions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-header bg-maritime-gradient text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl lg:text-5xl font-bold mb-4">Onze Oplossingen</h1>
        <p class="text-lg opacity-90">Innovatieve producten voor moderne bootvaart</p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <section class="mb-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="product-content">
            <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Steermate 1</h2>
            <p class="text-xl text-blue-600 mb-6 font-semibold">De toekomst van bootbesturing</p>
            <p class="text-gray-600 mb-8 leading-relaxed">
              Wij ontwikkelen de <strong>Steermate 1</strong>: een innovatief product waarmee je je boot op afstand kunt besturen, 
              bijvoorbeeld met een afstandsbediening. Perfect voor gemak, veiligheid en plezier op het water!
            </p>
            <ul class="space-y-3">
              <li class="flex items-center text-gray-700">
                <span class="text-green-500 mr-3">✓</span>
                Draadloze afstandsbediening
              </li>
              <li class="flex items-center text-gray-700">
                <span class="text-green-500 mr-3">✓</span>
                Veilige en betrouwbare verbinding
              </li>
              <li class="flex items-center text-gray-700">
                <span class="text-green-500 mr-3">✓</span>
                Eenvoudige installatie
              </li>
              <li class="flex items-center text-gray-700">
                <span class="text-green-500 mr-3">✓</span>
                Compatibel met verschillende boottypen
              </li>
            </ul>
          </div>
          <div class="product-image">
            <img 
              src="assets/remote_controll.webp" 
              alt="Steermate 1 Remote Control" 
              class="w-full h-auto rounded-lg shadow-lg">
          </div>
        </div>
      </section>

      <section>
        <h3 class="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-800">Product overzicht</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <img 
              src="assets/steering_wheel_detail.webp" 
              alt="Stuurwiel detail" 
              class="w-full h-48 object-cover rounded-lg mb-4">
            <p class="text-gray-600">Geavanceerd stuurwiel systeem</p>
          </div>
          <div class="text-center">
            <img 
              src="assets/boat_interior.webp" 
              alt="Boot interieur" 
              class="w-full h-48 object-cover rounded-lg mb-4">
            <p class="text-gray-600">Naadloze integratie in uw boot</p>
          </div>
          <div class="text-center">
            <img 
              src="assets/marina_hub.webp" 
              alt="Marina Hub" 
              class="w-full h-48 object-cover rounded-lg mb-4">
            <p class="text-gray-600">Perfect voor gebruik in de marina</p>
          </div>
        </div>
      </section>
    </div>
  `
})
export class SolutionsComponent {}