// src/pages/CV.tsx

const CV = () => {
  return (
    
    <div className="max-w-4xl mx-auto p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-8">
        CV - Thimothee Ranvin
      </h1>

      <section>
        <h2 className="text-3xl font-bold mt-6 mb-4">Profil</h2>
        <p className="text-lg">
          Passionné d'informatique et de développement web, je suis actuellement en deuxième année de Bachelor à Ynov Campus Bordeaux en Informatique. Je cherche un stage et une alternance pour continuer mes études.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mt-6 mb-4">Compétences Techniques</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-200 rounded-lg p-4">
            <h4 className="font-semibold">Développement Web</h4>
            <ul className="list-disc list-inside">
              <li>HTML, CSS, JS, SCSS, Twig</li>
              <li>Golang, Python, C#, Java, NodeJS</li>
            </ul>
          </div>
          <div className="bg-gray-200 rounded-lg p-4">
            <h4 className="font-semibold">Outils Informatiques</h4>
            <ul className="list-disc list-inside">
              <li>Git, Docker</li>
              <li>Commandes Linux</li>
              <li>Gestion de base de données SQL</li>
            </ul> 
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mt-6 mb-4">Expériences Professionnelles</h2>
        <div className="space-y-2">
          {[
            { role: "Ajusteur monteur", company: "Lectra, Cestas", period: "07.2021 - 08.2022", tasks: ["Assemblage d'une machine à couper du tissu"] },
            { role: "Préparateur de commande", company: "Lidl, Cestas", period: "05.2021 - 07.2021", tasks: ["Préparation des produits destinés à être livrés"] },
            { role: "Contrôleur qualité aéronautique", company: "Latelec, Liposthey", period: "04.2019 - 08.2020", tasks: ["Établissement des documents de contrôle"] },
            { role: "Stagiaire", company: "Delobel, Salles", period: "05.2018 - 06.2018", tasks: ["Conception de pièces sur machine à commande numérique"] },
          ].map((exp, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold">{exp.role}</h3>
              <p className="italic">{exp.company} - {exp.period}</p>
              <ul className="list-disc list-inside">
                {exp.tasks.map((task, taskIndex) => <li key={taskIndex}>{task}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mt-6 mb-4">Formation</h2>
        <p className="text-lg">
          Expert informatique et systèmes d'informations, Ynov, Bordeaux (09.2022 - Présent)
        </p>
        <p className="text-lg">
          BTS CPRP, Lycée de Baudre, Agen (09.2016 - 05.2018)
        </p>
        <p className="text-lg">
          Bac STI2D, Lycée Borda, Dax (08.2014 - 06.2015)
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mt-6 mb-4">Intérêts</h2>
        <p className="text-lg">
          Tennis, Padel, Sport d'équipe, Cryptomonnaie, Cinéma
        </p>
      </section>
    </div>
  );
};

export default CV;
