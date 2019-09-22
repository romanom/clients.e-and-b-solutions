import { imagesFolderPath } from "../config";

const projects = [
  {
    projectId: "2",
    details: {
      client: "Valley Love Farm",
      date: "March 2018",
      design:
        "Using earth tones, created a customized design to have a simple yet modern look including animations.",
      features: [
        "Contact form",
        "Works on any device",
        "Search Engine Optimization",
        "Quick mobile load times"
      ],
      overview:
        "Valley Love Farm was rebranded in 2018 from the previous Valley Love Organic. They began to increase their community presence at the local farmer's market as well as expanding their lawn care services."
    },
    images: [
      {
        key: "img1",
        src: `${imagesFolderPath}/projects/project2/img1.jpg`,
        alt: "Screenshot 1"
      },
      {
        key: "img2",
        src: `${imagesFolderPath}/projects/project2/img2.jpg`,
        alt: "Screenshot 2"
      }
    ],
    thumbnail: {
      alt: "Valley Love Farm",
      src: `${imagesFolderPath}/projects/project2/thumbnail.jpg`
    }
  },
  {
    projectId: "1",
    details: {
      client: "Valley Love Organic",
      date: "September 2016",
      design:
        "Utilized GoDaddy's Website builder template to bring new life to the previous site's design.",
      features: ["Contact form", "Works on any device"],
      overview:
        "Valley Love Organic was started to bring high quality produce to local customers. Community Supported Agriculture (CSA) is the perfect way for a customer, who cares about local food, to ally with a farmer and get the best they have to offer."
    },
    images: [
      {
        key: "img1",
        src: `${imagesFolderPath}/projects/project1/img1.jpg`,
        alt: "Screenshot 1"
      },
      {
        key: "img2",
        src: `${imagesFolderPath}/projects/project1/img2.jpg`,
        alt: "Screenshot 2"
      },
      {
        key: "img3",
        src: `${imagesFolderPath}/projects/project1/img3.jpg`,
        alt: "Screenshot 3"
      }
    ],
    thumbnail: {
      alt: "Valley Love Organic",
      src: `${imagesFolderPath}/projects/project1/thumbnail.jpg`
    }
  }
];

export default projects;
