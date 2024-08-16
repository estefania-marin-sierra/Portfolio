export interface DialogData {
  title: '',
  description: '',
  tasks: [],
  images: '',
  video: '',
  titleFrench: '',
  descriptionFrench: '',
  tasksFrench: '',
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
      tasks: ['Personalized UI design', 'Usable UI for desktop and mobile', 'Design adaptation based on owner personality/interest', 'Support 3 languages (English / French / Spanish)'],
      images:'',
      video:'https://estefania-marin-sierra.github.io/Portfolio/assets/images/website.mp4',
      titleFrench: 'Site internet de mon mariage',
      descriptionFrench: "Cela a été construit pour préserver de beaux souvenirs de mon mariage et comme un moyen créatif d'informer les invités avec les nouvelles de l'événement.",
      tasksFrench: ["Développer le site Web en fonction du design réalisé par ma femme", "Ajuster l'interface utilisateur pour l'adapter au téléphone mobile", "Structurer et organiser pour pouvoir réutiliser les composants/styles lorsque cela était possible", "Traduction en 3 langues (Français/Anglais/Espagnol)"],
    }
  },
];
