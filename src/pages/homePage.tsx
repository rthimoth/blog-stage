// src/pages/HomePage.tsx

const HomePage = () => {
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
          
      </div>
      
  );
};

export default HomePage;
