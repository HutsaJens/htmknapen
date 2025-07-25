import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-team',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page-header bg-maritime-gradient text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl lg:text-5xl font-bold mb-4">Ons Team</h1>
        <p class="text-lg opacity-90">Maak kennis met de experts achter HTMknapen</p>
      </div>
    </div>
    
    <div class="container mx-auto px-4 py-16">
      <section class="mb-16">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">Wie zijn wij?</h2>
            <p class="text-gray-600 leading-relaxed">
              HTMknapen is een team van gepassioneerde ingenieurs en professionals die samenwerken om 
              innovatieve maritieme technologie te ontwikkelen. Ons diverse team combineert expertise 
              in mechanica, elektronica, software en projectmanagement.
            </p>
          </div>
          <div>
            <img 
              src="assets/captain.webp" 
              alt="Team Captain" 
              class="w-full h-auto rounded-lg shadow-lg">
          </div>
        </div>
      </section>

      <section>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-2 text-gray-800">Jannick</h3>
            <p class="text-blue-600 font-semibold mb-3">Project Manager, HR manager</p>
            <p class="text-gray-600">Leidt het team en zorgt voor een optimale samenwerking tussen alle disciplines.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-2 text-gray-800">Stijn</h3>
            <p class="text-blue-600 font-semibold mb-3">Mechanical Engineer</p>
            <p class="text-gray-600">Ontwerpt en ontwikkelt de mechanische componenten van onze systemen.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-2 text-gray-800">Niels</h3>
            <p class="text-blue-600 font-semibold mb-3">Mechatronics Engineer</p>
            <p class="text-gray-600">Combineert mechanica, elektronica en software voor geïntegreerde oplossingen.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-2 text-gray-800">Max</h3>
            <p class="text-blue-600 font-semibold mb-3">Electrical Engineer</p>
            <p class="text-gray-600">Ontwikkelt de elektrische systemen en zorgt voor betrouwbare verbindingen.</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-xl font-bold mb-2 text-gray-800">Jens</h3>
            <p class="text-blue-600 font-semibold mb-3">Software Engineer</p>
            <p class="text-gray-600 mb-3">Programmeert de software en ontwikkelt gebruikersinterfaces voor onze producten.</p>
            <p class="text-sm text-gray-500">
              Site gemaakt door Jens, eigenaar van 
              <a href="https://bertenx.nl" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">
                Bertenx.nl
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  `
})
export class TeamComponent {}