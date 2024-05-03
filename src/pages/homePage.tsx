// src/pages/HomePage.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TestGraph from './TestGraph';
import entrepriseImage from '../assets/images/entreprise.png';


const HomePage = () => {
    const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
  
    const toggleSection = (index: number) => {
        setOpenSectionIndex(openSectionIndex === index ? null : index);
    };
  const sections = [
    {
        title: "Information sur l'Entreprise",
        content: "Détails de l'entreprise, localisation, histoire, mission, culture d'entreprise, etc. Vous pourrez ici personnaliser avec plus de détails lorsque vous aurez les informations.",
        image: entrepriseImage,
    },
    {
      title: "1. Intégration dans l'entreprise",
      content: "Détails de votre intégration, l'équipe, l'environnement de travail, etc.",
    },
    {
      title: "2. Difficultés rencontrées & Solutions apportées",
      content: "Description des défis auxquels vous avez été confronté et des solutions que vous avez mises en œuvre.",
      graph: true,
    },
    {
      title: "3. Aspect technique des missions effectuées",
      content: "Explication des aspects techniques des tâches réalisées pendant le stage.",
    },
    {
      title: "4. Connaissances mobilisées lors des missions",
      content: "Liste des connaissances préexistantes que vous avez utilisées durant vos missions.",
    },
    {
      title: "5. Compétences acquises",
      content: "Discussion sur les nouvelles compétences que vous avez développées pendant votre stage.",
    },
    {
      title: "6. De l'actualité en lien avec mon profil",
      content: "Informations récentes ou tendances dans votre domaine qui sont pertinentes pour votre expérience de stage.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 my-2 rounded-md pb-6">
      <h1 className="text-4xl font-bold  text-center mb-12">
        Rapport de Stage
      </h1>

      {sections.map((section, index) => (
        <div key={index} className="mb-10">
          <div 
            className="p-6 bg-white shadow-lg rounded-lg flex justify-between items-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => toggleSection(index)}
          >
            <h2 className="text-3xl font-bold">{section.title}</h2>
            <FontAwesomeIcon icon={openSectionIndex === index ? faChevronUp : faChevronDown} />
          </div>
          {openSectionIndex === index && (
            <div className="p-4 bg-white rounded-b-lg">
              <p className="text-lg">{section.content}</p>
              {section.graph && <TestGraph />}
              {section.image && <img src={section.image} alt="Description de l'entreprise" className="mt-4 max-w-full h-auto" />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;