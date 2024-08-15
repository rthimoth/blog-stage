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
            subsections: [
                {
                    title: "Présentation",
                    description: "Drapo Solutions est une agence digitale qui s'adresse à tous les acteurs de la transition énergétique. À l'écoute des besoins du marché, nous développons des solutions sur-mesure pour améliorer vos performances et développer votre volume d'affaires.",
                },
                {
                    title: "Localisation",
                    description: "L'entreprise est située au 34 Rue Laffitte, 75009 Paris, un emplacement central qui facilite les interactions avec les partenaires et clients parisiens. Elle dispose également de locaux à Bordeaux, renforçant ainsi sa présence dans le sud-ouest de la France.",
                },
            ],
            image: entrepriseImage,
        },
        {
            title: "1. Intégration dans l'entreprise",
            subsections: [
                {
                    title: "Introduction",
                    description: "Mon intégration dans l'entreprise s'est déroulée de manière fluide. J'ai rejoint une équipe d'une dizaine de personnes, chacune apportant des compétences variées en informatique.",
                },
                {
                    title: "Environnement de travail",
                    description: "L'environnement de travail est particulier, car le poste est entièrement en distanciel. Cependant, il est possible de se rendre au bureau situé à Bordeaux, si besoin ou simplement si l'envie nous prend.",
                },
                {
                    title: "Premières missions",
                    description: "Dès mon arrivée, j'ai été rapidement mis dans le bain avec une première mission consistant à développer un site vitrine avancé. Ce projet devait être presque entièrement éditable via une interface d'administration, ce qui m'a permis de me familiariser avec Laravel. Par la suite, j'ai dû me former à React pour répondre aux besoins du projet. Plus récemment, ma première tâche a été de mettre à jour des tests end-to-end en utilisant Playwright.",
                },
            ],
        },
        {
            title: "2. Difficultés rencontrées & Solutions apportées",
            subsections: [
                {
                    title: "Autonomie",
                    description: "Au cours de mon stage, j'ai rencontré quelques difficultés liées à l'autonomie. Il m'a fallu passer un cap pour améliorer ma rapidité de compréhension des tâches qui m'étaient attribuées et pour faire les bons choix en termes de solutions techniques.",
                },
                {
                    title: "Résolution des problèmes",
                    description: "Cette expérience m'a poussé à développer ma capacité à travailler de manière indépendante et à prendre des décisions éclairées plus rapidement.",
                },
            ],
            graph: true,
        },
        {
            title: "3. Aspect technique des missions effectuées",
            subsections: [
                {
                    title: "Explications techniques",
                    description: "Explication des aspects techniques des tâches réalisées pendant le stage.",
                },
            ],
        },
        {
            title: "4. Connaissances mobilisées lors des missions",
            subsections: [
                {
                    title: "Connaissances techniques",
                    description: "Au cours de ce stage, j'ai dû mobiliser un grand nombre de connaissances acquises durant ma formation, notamment dans l'utilisation de Docker, la réalisation de la logique 'back-end', et le design 'front-end'. Tous les cours liés au développement se sont révélés extrêmement utiles et m'ont grandement aidé à réussir les missions qui m'ont été confiées.",
                },
            ],
        },
        {
            title: "5. Compétences acquises",
            subsections: [
                {
                    title: "Autonomie",
                    description: "J'ai renforcé ma capacité à travailler de manière indépendante, en prenant des initiatives et en gérant mes tâches de manière efficace.",
                },
                {
                    title: "Création de sites vitrines",
                    description: "J'ai acquis une solide expérience dans la création de sites vitrines, en travaillant sur des projets nécessitant une interface admin éditable.",
                },
                {
                    title: "Tests end-to-end",
                    description: "J'ai pris des compétences dans la mise à jour et la gestion des tests end-to-end avec Playwright.",
                },
                {
                    title: "Framework React",
                    description: "J'ai commencé à me familiariser avec l'utilisation de React, posant ainsi les bases pour une maîtrise future de ce framework.",
                },
                {
                    title: "Choix de solutions",
                    description: "J'ai développé des compétences dans l'évaluation et le choix des solutions techniques les plus adaptées aux projets sur lesquels j'ai travaillé.",
                },
            ],
        },
        {
            title: "6. De l'actualité en lien avec mon profil",
            subsections: [
                {
                    title: "Situation actuelle",
                    description: "Au moment de la rédaction de ce rapport, je suis toujours en stage chez Drapo Solutions, un stage de 4 mois qui m'a énormément enrichi en termes de compétences. Ce stage m'a offert l'opportunité de me spécialiser dans l'utilisation de React et Laravel, ainsi que de développer mes compétences dans l'utilisation de Docker et d'autres outils techniques.",
                },
            ],
        },
    ];

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50 my-2 rounded-md pb-6">
            <h1 className="text-4xl font-bold text-center mb-12">
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
                            {section.subsections && section.subsections.map((sub, subIndex) => (
                                <div key={subIndex} className="mb-4">
                                    <h3 className="text-2xl font-semibold">{sub.title}</h3>
                                    <p className="text-lg mt-2">{sub.description}</p>
                                </div>
                            ))}
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
