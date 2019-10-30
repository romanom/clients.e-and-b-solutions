import { IMAGES_FOLDER_PATH } from "../config";

const services = [
  {
    content:
      "Creating easy to use web apps or sites, designed to work on any screen, that give the user a wonderful experience.",
    image: {
      alt: "Desktop Computer",
      src: `${IMAGES_FOLDER_PATH}/services_1.png`
    },
    title: "Web Apps and Websites"
  },
  {
    content:
      "Providing cloud hosting and support for your site so you can worry about other things.",
    image: {
      alt: "Cloud hosting",
      src: `${IMAGES_FOLDER_PATH}/services_2.png`
    },
    title: "Hosting and Support"
  },
  {
    content: "Let's see what we can do together to make things easier for you.",
    image: {
      alt: "Consulting",
      src: `${IMAGES_FOLDER_PATH}/services_3.png`
    },
    title: "Technical Consulting"
  }
];

export default services;
