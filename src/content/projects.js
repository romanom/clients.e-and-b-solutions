import { imagesFolderPath } from "../config";

const projects = [
  {
    projectId: "3",
    details: {
      client: "JD Wireart Studio",
      date: "January 2019",
      design:
        "Embraces the creative spirit by showcasing images of artwork in a lively fashion.  Management of the inventory is achieved through a simple yet modern inbox layout.",
      features: [
        "Accepts PayPal payments",
        "Inventory management",
        "Contact form",
        "Supports Youtube video for About Us",
        "Works on any device"
      ],
      overview:
        "JD Wireart Studio is artwork created by Holly Springs local Jonathan Daniels, originally from Zimbabwe. He visits local schools to inspire children to be creative using only what is around them."
    },
    images: [
      {
        key: "img1",
        src: `${imagesFolderPath}/projects/project3/img1.jpg`,
        alt: "Gallery"
      },
      {
        key: "img2",
        src: `${imagesFolderPath}/projects/project3/img2.jpg`,
        alt: "Gallery Mobile"
      },
      {
        key: "img3",
        src: `${imagesFolderPath}/projects/project3/img3.jpg`,
        alt: "Details"
      },
      {
        key: "img4",
        src: `${imagesFolderPath}/projects/project3/img4.jpg`,
        alt: "Inbox Layout 1"
      },
      {
        key: "img5",
        src: `${imagesFolderPath}/projects/project3/img5.jpg`,
        alt: "Inbox Layout 2"
      },
      {
        key: "img6",
        src: `${imagesFolderPath}/projects/project3/img6.jpg`,
        alt: "Contact form"
      },
      {
        key: "img7",
        src: `${imagesFolderPath}/projects/project3/img7.jpg`,
        alt: "About me mobile"
      }
    ],
    thumbnail: {
      alt: "JD Wireart Studio",
      src: `${imagesFolderPath}/projects/project3/thumbnail.jpg`
    }
  },
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
