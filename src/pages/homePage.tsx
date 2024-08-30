// src/pages/HomePage.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TestGraph from './TestGraph';
import entrepriseImage from '../assets/images/entreprise.png';
import actu from '../assets/images/actu-1.png';
import detail from '../assets/images/détail-article.png';
import offre from '../assets/images/nos-offres.png';
import engagement from '../assets/images/nos-engagements.png';
import avis from '../assets/images/avis-clients.png';
import admin from '../assets/images/modifier-offres-admin.png';
import webflow from '../assets/images/webflow.png';
import test from '../assets/images/end_to_end.png';
import simulateur from '../assets/images/simulateur.png';
import solution from '../assets/images/solution.png';
import formulaire from '../assets/images/formulaire.png';
import resultat from '../assets/images/resultat.png';
import article_admin from '../assets/images/modification-article-admin.png';
import offre_admin from '../assets/images/modifier-offres-admin.png';
import engagement_admin from '../assets/images/modification-engagement-admin.png';
import avis_admin from '../assets/images/modifier-avis-admin.png';
import question_config from '../assets/images/question_config.png';
import configurateur from '../assets/images/configurateur.png';

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
                    description: "Drapo Solutions est une agence digitale spécialisée dans l'accompagnement des acteurs de la transition énergétique. À l'écoute des besoins du marché, l'entreprise conçoit des solutions sur mesure pour optimiser les performances de ses clients et développer leur volume d'affaires.",
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
                    description: "Mon intégration dans l'entreprise s'est déroulée de manière fluide. J'ai rejoint une équipe d'une dizaine de personnes, chacune apportant des compétences variées et complémentaires en informatique.",
                },
                {
                    title: "Environnement de travail",
                    description: "L'environnement de travail est particulier, car mon poste est entièrement en distanciel. Cependant, il est possible de se rendre au bureau de Bordeaux, que ce soit par nécessité ou simplement par envie, offrant ainsi une flexibilité appréciable.",
                },
                {
                    title: "Premières missions",
                    description: "Dès mon arrivée, j'ai été rapidement plongé dans l'action avec une première mission consistant à développer un site vitrine avancé. Ce projet devait être presque entièrement éditable via une interface d'administration, ce qui m'a permis de me familiariser avec Laravel. Par la suite, j'ai dû me former à React pour répondre aux besoins du projet. Plus récemment, ma tâche initiale a été de mettre à jour des tests end-to-end en utilisant Playwright. Ces tests sont essentiels pour détecter et corriger les bugs dans l'application de l'entreprise, garantissant ainsi sa stabilité et son bon fonctionnement.",
                },
            ],
        },
        {
            title: "2. Difficultés rencontrées & Solutions apportées",
            subsections: [
                {
                    title: "Autonomie",
                    description: "Durant mon stage, j'ai fait face à des défis en matière d'autonomie. Au départ, il m'a fallu surmonter certains obstacles pour mieux comprendre rapidement les tâches qui m'étaient confiées et pour faire des choix judicieux en termes de solutions techniques. Ce processus a nécessité un temps d'adaptation, mais il m'a permis de progresser et de gagner en confiance.",
                },
                {
                    title: "Résolution des problèmes",
                    description: "Cette expérience m'a incité à renforcer ma capacité à travailler de manière autonome. J'ai appris à prendre des décisions éclairées plus rapidement, ce qui a non seulement amélioré ma réactivité, mais aussi ma capacité à résoudre les problèmes de manière efficace et proactive.",
                },
            ],
            graph: true,
        },
        {
            title: "3. Aspect technique des missions effectuées",
            subsections: [
                {
                    title: "Développement du site vitrine GAIA semaine 1",
                    description: "Extraction du code à partir d'un lien Webflow qu'un designer a produit et intégration de celui-ci dans Laravel, il y a eu 14 pages à extraire.",
                    images: [webflow],
                },
                {
                    title: "Développement du site vitrine GAIA semaine 2 et 3",
                    description: "Pour la partie article, j'ai dû afficher les articles avec une logique : en haut, on doit retrouver 1 article, ensuite 4 articles sur sa droite et 8 articles en dessous, puis un système de pagination ainsi qu'un affichage en fonction des dates de création de l'article, avec également la possibilité de prévoir la sortie d'un article en fonction de la date.",
                    images: [actu],
                },
                {
                    title: "partie administrateur des articles",
                    // description: "",
                    images: [article_admin],
                },
                {
                    title: "Développement du site vitrine GAIA semaine 4",
                    description: "On affiche tous les détails d'articles avec un système de sommaire qui est créé avec une ancre permettant de récupérer les titres du RichEditor dans Filament en front dans le rendu HTML.",
                    images: [detail],
                },
                {
                    title: "Développement du site vitrine GAIA semaine 5",
                    description: "Création d'offres d'emploi avec un espace administrateur permettant de modifier dynamiquement les offres et de programmer des offres à l'avance pour qu'elles soient visibles le jour voulu.",
                    images: [offre],
                },
                {
                    title: "Partie administrateur des offres d'emploi",
                    // description: "Création d'offres d'emploi avec un espace administrateur permettant de modifier dynamiquement les offres et d'uploader des offres à l'avance pour qu'elles soient visibles le jour voulu.",
                    images: [offre_admin],
                },
                {
                    title: "Développement du site vitrine GAIA semaine 6",
                    description: "Dynamisation de la homepage : pour cette page, j'ai travaillé sur les avis clients dynamiques, les projets GAIA et les engagements GAIA, avec également une gestion administrateur à l'aide de Filament.",
                    images: [engagement],
                },
                {
                    title: "Partie administrateur des engagements",
                    // description: "Dynamisation de la homepage : pour cette page, j'ai travaillé sur les avis clients dynamiques, les projets GAIA et les engagements GAIA, avec également une gestion administrateur à l'aide de Filament.",
                    images: [engagement_admin],
                },
                {
                    title: "Développement du site vitrine GAIA semaine 7",
                    description: "Avis clients intégrés dans la partie 'Solutions', qui contient 5 solutions différentes, avec un affichage aléatoire pour changer l'ordre selon les pages et donner un peu de vie aux avis.",
                    images: [avis],
                },
                {
                    title: "Partie administrateur des avis clients",
                    // description: "Avis clients intégrés dans la partie 'Solutions', qui contient 5 solutions différentes, avec un affichage aléatoire pour changer l'ordre selon les pages et donner un peu de vie aux avis.",
                    images: [avis_admin],
                },
                {
                    title: "Développement du site vitrine GAIA semaine 8",
                    description: "Photo montrant l'espace admin complet, créé grâce à Filament, pour rendre l'ensemble du site administrable, permettant à l'entreprise de modifier chaque information qu'elle désire, avec également l'intégration de méta-données.",
                    images: [admin],
                },
                {
                    title: "Début d'apprentissage de React semaine 9",
                    description: "Début d'apprentissage de React, suivi d'un cours explicatif, pour ensuite essayer de rattraper le retard et me rendre utile en front-end pour l'entreprise.",
                },
                {
                    title: "Arrivée sur la plateforme principale de l'entreprise OPX semaine 10",
                    description: "Travail sur les tests end-to-end, visant à compléter des formulaires et à créer des chantiers, tout en utilisant l'application dans son ensemble pour identifier et corriger les régressions au fur et à mesure de son développement.",
                    images: [test],
                },
                {
                    title: "Retour sur GAIA suite au retour du client semaine 11",
                    description: "Correction de petits détails sur plusieurs pages de l'application, en particulier sur le simulateur et le configurateur, qu'il a fallu adapter entièrement pour le mobile à l'aide de Tailwind CSS et React.",
                    images: [simulateur, solution],
                },
                {
                    title: "Suite des pages mobile",
                    description: ".",
                    images: [configurateur, resultat],
                },
                {
                    title: "Suite des pages mobile",
                    // description: ".",
                    images: [formulaire, question_config],
                },
            ],
        },
        {
            title: "4. Connaissances mobilisées lors des missions",
            subsections: [
                {
                    title: "Connaissances techniques",
                    description: "Au cours de ce stage, j'ai eu l'opportunité de mettre en pratique un large éventail de connaissances acquises durant ma formation, en particulier dans l'utilisation de Docker, la conception de la logique 'back-end', et le design 'front-end'. Les cours liés au développement se sont avérés particulièrement précieux et m'ont fourni les bases solides nécessaires pour accomplir avec succès les missions qui m'ont été confiées.",
                },
            ],
        },
        {
            title: "5. Compétences acquises",
            subsections: [
                {
                    title: "Autonomie",
                    description: "J'ai considérablement renforcé ma capacité à travailler de manière autonome, en prenant des initiatives et en gérant efficacement mes tâches. Cela m'a permis de mener à bien des projets de manière indépendante tout en respectant les délais.",
                },
                {
                    title: "Création de sites vitrines",
                    description: "J'ai acquis une solide expérience dans la création de sites vitrines, en concevant des interfaces administrables et en répondant aux besoins spécifiques des clients. Mon travail sur ces projets m'a permis de développer une approche centrée sur l'utilisateur tout en maîtrisant les aspects techniques.",
                },
                {
                    title: "Tests end-to-end",
                    description: "J'ai approfondi mes compétences en matière de tests end-to-end en utilisant Playwright. J'ai participé à la mise à jour et à la gestion de ces tests, ce qui a renforcé ma compréhension des processus de test automatisés et de leur importance pour assurer la qualité du code.",
                },
                {
                    title: "Framework React",
                    description: "J'ai commencé à me familiariser avec le framework React, posant ainsi les bases solides pour une maîtrise future. Cette initiation m'a permis de comprendre les concepts fondamentaux de React et de les appliquer dans des projets concrets.",
                },
                {
                    title: "Choix de solutions",
                    description: "J'ai développé une expertise dans l'évaluation et le choix des solutions techniques les plus adaptées aux projets sur lesquels j'ai travaillé. Cette compétence m'a permis de prendre des décisions éclairées pour optimiser les résultats et répondre aux exigences des projets.",
                },
            ],
        },
        {
            title: "6. De l'actualité en lien avec mon profil",
            subsections: [
                {
                    title: "Situation actuelle",
                    description: "Au moment de la rédaction de ce rapport, je suis toujours en stage chez Drapo Solutions, un stage de près de 3 mois qui m'a énormément enrichi en termes de compétences. Ce stage m'a offert l'opportunité de me spécialiser dans l'utilisation de React et Laravel, ainsi que de développer mes compétences dans l'utilisation de Docker, Git et d'autres outils techniques tels que Linear.",
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
                                    {'images' in sub && sub.images && (
                                        <div className={`mt-4 flex justify-center ${sub.images.length > 1 ? 'space-x-4' : ''}`}>
                                            {sub.images.map((image, imgIndex) => (
                                                <img
                                                    key={imgIndex}
                                                    src={image}
                                                    alt={sub.title}
                                                    className="max-w-full h-auto flex-1"
                                                />
                                            ))}
                                        </div>
                                    )}
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