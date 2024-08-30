import React from 'react';
import ImageProjet from '../assets/images/forum.png';
import ImageProjetecommerce from '../assets/images/ecommerce.png';
import ImageProjetMeteo from '../assets/images/meteo.png';

const Portfolio = () => {
  const projects = [
    {
      name: "Forum de discussion",
      description: "établir une interaction entre 2 utilisateurs.",
      imageUrl: ImageProjet, // Assurez-vous d'avoir des images représentatives pour chaque projet
      githubUrl: "https://github.com/rthimoth/laravel.git",
      liveUrl: "https://projet1.com"
    },
    {
      name: "Ecommerce",
      description: "Site ecommerce crèer en symfony",
      imageUrl: ImageProjetecommerce,
      githubUrl: "https://github.com/fyleeds/ecommerce",
      liveUrl: "https://projet2.com"
    },
    {
      name: "Application météo",
      description: "Application météo fait en c#",
      imageUrl: ImageProjetMeteo,
      githubUrl: "https://github.com/rthimoth/appmeteotest",
      liveUrl: "https://projet3.com"
    },
    
    // Ajoutez autant de projets que vous le souhaitez
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 my-12">
      <h2 className="text-3xl font-bold text-center mb-10">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div key={project.name} className="shadow-lg rounded-lg overflow-hidden">
            <img src={project.imageUrl} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold">{project.name}</h3>
              <p className="text-sm">{project.description}</p>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">GitHub</a>
              {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="ml-4 text-blue-500 hover:text-blue-700">Voir le projet</a>}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="https://github.com/rthimoth" className="text-lg font-bold text-blue-500 hover:text-blue-700">Voir plus sur GitHub</a>
        <a href="https://www.linkedin.com/in/thimothee-ranvin-a946372a0/" className="ml-4 text-lg font-bold text-blue-500 hover:text-blue-700">LinkedIn</a>
      </div>
    </div>
  );
};

export default Portfolio;
