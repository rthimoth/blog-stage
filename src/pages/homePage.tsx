// src/pages/HomePage.tsx
import React, { useState } from 'react';


const HomePage = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    
      <div className="max-w-4xl mx-auto p-8 bg-gray-100 ">
          <h1 className="text-4xl font-bold underline text-center mb-8">
              Drapo
          </h1>

          <section className="mb-8">
              <h2 className="text-3xl font-bold mt-6">1. Intégration dans l'entreprise</h2>
              <p className="mt-2 text-lg">
                  Détails de votre intégration, l'équipe, l'environnement de travail, etc.
              </p>
          </section>

          <section className="mb-8">
              <h2 className="text-3xl font-bold mt-6">2. Difficultés rencontrées & Solutions apportées</h2>
              <p className="mt-2 text-lg">
                  Description des défis auxquels vous avez été confronté et des solutions que vous avez mises en œuvre.
              </p>
          </section>

          <section className="mb-8">
              <h2 className="text-3xl font-bold mt-6">3. Aspect technique des missions effectuées</h2>
              <p className="mt-2 text-lg">
                  Explication des aspects techniques des tâches réalisées pendant le stage.
              </p>
          </section>

          <section className="mb-8">
              <h2 className="text-3xl font-bold mt-6">4. Connaissances mobilisées lors des missions</h2>
              <p className="mt-2 text-lg">
                  Liste des connaissances préexistantes que vous avez utilisées durant vos missions.
              </p>
          </section>

          <section className="mb-8">
              <h2 className="text-3xl font-bold mt-6">5. Compétences acquises</h2>
              <p className="mt-2 text-lg">
                  Discussion sur les nouvelles compétences que vous avez développées pendant votre stage.
              </p>
          </section>

          <section className="mb-8">
              <h2 className="text-3xl font-bold mt-6">6. De l'actualité en lien avec mon profil</h2>
              <p className="mt-2 text-lg">
                  Informations récentes ou tendances dans votre domaine qui sont pertinentes pour votre expérience de stage.
              </p>
          </section>

          <div className="p-8">
            <div className="collapse collapse-arrow bg-base-200" onClick={toggleAccordion}>
              <input type="radio" name="my-accordion" id="accordion-1" defaultChecked />
              <label htmlFor="accordion-1" className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </label>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>

          
      </div>
      
      
      
  );
};

export default HomePage;
