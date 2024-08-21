export interface DialogData {
  title: '',
  description: '',
  tasks: [[]],
  images: [],
  video: [],
  titleFrench: '',
  descriptionFrench: '',
  tasksFrench: [[]],
}

/* personal projects*/
export const Projects = [
  { 
    id: 1,
    image: 'https://estefania-marin-sierra.github.io/Portfolio/assets/images/wedding_project.png', 
    link: 'https://nicolasfrechette91.github.io/nico_fanny_wedding_2020/home/index.html',
    name: 'Design for event website',
    description: 'Personalized UI design for a major event. The website was used to inform the event details as well as to create announcements, photo repository and souvenir details in one location.',
    linkFrench: 'https://nicolasfrechette91.github.io/nico_fanny_wedding_2020/home/index_fr.html',
    nameFrench: `Creation d'un site web d'événement`,
    descriptionFrench: "Conception d'interface utilisateur personnalisée pour un événement majeur. Le site Web a été utilisé pour informer les détails de l'événement ainsi que pour créer des annonces, un référentiel de photos et des souvenirs en un seul endroit.",
    dialog: {
      title: 'Event website',
      description: 'This website was built to preserve memories while keeping a personalized and creative style throughout the website',
      tasks: [['Personalized UI design', 'Usable UI for desktop and mobile', 'Design adaptation based on owner personality/interest', 'Support 3 languages (English / French / Spanish)']],
      images:[''],
      video:['https://estefania-marin-sierra.github.io/Portfolio/assets/images/website.mp4'],
      titleFrench: 'Site internet de mon mariage',
      descriptionFrench: "Cela a été construit pour préserver de beaux souvenirs de mon mariage et comme un moyen créatif d'informer les invités avec les nouvelles de l'événement.",
      tasksFrench: [["Développer le site Web en fonction du design réalisé par ma femme", "Ajuster l'interface utilisateur pour l'adapter au téléphone mobile", "Structurer et organiser pour pouvoir réutiliser les composants/styles lorsque cela était possible", "Traduction en 3 langues (Français/Anglais/Espagnol)"]],
    }
  },
  {
    id: 2,
    image: 'https://estefania-marin-sierra.github.io/Portfolio/assets/images/dashboard.png', 
    name: 'Automated dashboard',
    description: "Creation of a tool in Smartsheet for the automatic generation of dashboards with key project data. The dashboard was specifically designed to give updates to C-level stakeholders with a high-level summary.",
    nameFrench: "Tableau de bord automatisé",
    descriptionFrench: `Création d'un outil dans Smartsheet pour la génération automatique de tableaux de bord avec les données clés du projet. Le tableau de bord a été spécifiquement conçu pour fournir des mises à jour aux parties prenantes de niveau C avec un résumé de haut niveau.`,
    dialog: {
      title: 'Automatic creation of high-level dashboards',
      description: 'Generation and update of information from main project plan and their subsequent reports',
      tasks: [['Self-retrieval of data', 'Auto-update', 'Modification of visual features as the status gets modified', 'Chart creation for visual project assessment']],
      images:[''],
      video:['https://estefania-marin-sierra.github.io/Portfolio/assets/images/dashboard.mp4'],
      titleFrench: 'Création automatique tableaux de bord des résumés',
      descriptionFrench: "Génération et mettre à jour des informations du plan principal du projet et ses rapports associés",
      tasksFrench:[["Auto-récupération des données","Mise à jour automatique","Modification des caractéristiques visuelles au fur et à mesure que le statut des tâches est modifié","Création de graphiques pour l'évaluation visuelle du projet"]],
    }
  },
  {
    id: 3,
    image: 'https://estefania-marin-sierra.github.io/Portfolio/assets/images/project.png', 
    name: 'Project plan template with automatization',
    description: "Creation of a high-level template for project plans. It included all automatization and trackers for self follow-up and reporting.",
    nameFrench: "Modèle de plan de projet avec automatisation",
    descriptionFrench: `Création d'un modèle de haut niveau pour les plans de projet. Il comprenait toutes les automatisations et les outils de suivi pour l'auto-suivi et le reporting.`,
    dialog: {
      title: 'Automated-tracking project plan',
      description: "Creation of a template with all major common activities for a tech transfer and their average timeline. Included several features for self-tracking and flagging tasks, payments and the project's overall status",
      tasks:[['Indication of a project health status', 'Auto-update of status based on the ratio of tasks marked overdue or at risk'], 
              ['Automatic flagging of taskswith due date in less than 10 days', 'Automatic flagging of overdue tasks', 'Automatic flagging when tasks are set on hold'],
              ['Auto update of task status','Task status based on baseline plan', 'Task status based on percentage of completion reached'], 
              ['Usage of latest comment feature to track historical comments', 'Update of main project plan with only comments provided in the last 10 days for easy assessment', 'Creation of automated report for latest comments'],
              ['Creation of multiple reports that sutomatically feed from the main project plan', 'Generation of RAID reports based on project status', 'Auto-feeding of items of project plan in children sheets', 'Auto-update of children reports and sheets']],
      images:['https://estefania-marin-sierra.github.io/Portfolio/assets/images/Project_health.png',
              'https://estefania-marin-sierra.github.io/Portfolio/assets/images/at_risk.png',
              'https://estefania-marin-sierra.github.io/Portfolio/assets/images/status.png',
              'https://estefania-marin-sierra.github.io/Portfolio/assets/images/comment.png',],
      video:['','','','', 'https://estefania-marin-sierra.github.io/Portfolio/assets/images/subfolders.mp4'],
      titleFrench: 'Plan de projet avec suivi automatisé',
      descriptionFrench: "Création d'un modèle avec toutes les principales activités courantes pour un transfert de technologie et leur calendrier moyen. Inclusion de plusieurs fonctionnalités pour le suivi automatique et le signalement des tâches, des paiements et du statut général du projet",
      tasksFrench: [["Auto-récupération des données","Mise à jour automatique","Modification des caractéristiques visuelles au fur et à mesure que le statut des tâches est modifié","Création de graphiques pour l'évaluation visuelle du projet"], ["LALALALA"]],
    }
  },
];
