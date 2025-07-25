import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="hero-section bg-maritime-gradient text-white relative overflow-hidden">
      <div class="container mx-auto px-4 py-16 lg:py-24">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="hero-content">
            <h1 class="text-4xl lg:text-6xl font-bold mb-4">HTMknapen</h1>
            <p class="text-xl lg:text-2xl mb-4 opacity-90">Smart Steering Solutions</p>
            <p class="text-lg mb-8 opacity-80">Innovatieve technologie voor veiliger en gemakkelijker varen</p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                routerLink="/solutions" 
                class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                Ontdek onze oplossingen
              </a>
              <a 
                routerLink="/team" 
                class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center">
                Leer ons team kennen
              </a>
            </div>
          </div>
          <div class="hero-image">
            <img 
              src="assets/hero_header.webp" 
              alt="HTMknapen Hero" 
              class="w-full h-auto rounded-lg shadow-2xl">
          </div>
        </div>
      </div>
    </div>
    
    <section class="py-16 lg:py-24 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-800">Waarom HTMknapen?</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <img 
              src="assets/very_safe.webp" 
              alt="Veiligheid" 
              class="w-full h-48 object-cover rounded-lg mb-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Veiligheid</h3>
            <p class="text-gray-600">Geavanceerde technologie voor maximale veiligheid op het water</p>
          </div>
          <div class="text-center">
            <img 
              src="assets/wireless_tech.webp" 
              alt="Draadloze technologie" 
              class="w-full h-48 object-cover rounded-lg mb-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Draadloze controle</h3>
            <p class="text-gray-600">Innovatieve draadloze besturing voor ultiem gemak</p>
          </div>
          <div class="text-center">
            <img 
              src="assets/engineering_workspace.webp" 
              alt="Engineering" 
              class="w-full h-48 object-cover rounded-lg mb-6">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">Expertise</h3>
            <p class="text-gray-600">Een team van ervaren ingenieurs en professionals</p>
          </div>
        </div>
      </div>
    </section>
  `,
  imports: [RouterLink]
})
export class HomeComponent {}