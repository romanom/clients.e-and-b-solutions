import { imagesFolderPath } from "../config";

/* eslint-disable max-len */
const projects = [
  {
    client: "E&B Solutions",
    date: "May 2018",
    details: "Deeets",
    features: "Features",
    key: "4",
    images: [
      { src: "/images/projects/project4/img1.jpg", alt: "Screenshot 1" },
      { src: "/images/projects/project4/img2.jpg", alt: "Screenshot 2" }
    ],
    information: `Using React, a JavaScript library for building user interfaces, and Amazon Web Services, the E&B Solutions' site was completely rebuilt.`,
    informationCont: `This allowed for faster page load times, theme consistency, and a strong improvement in the user's overall experience.`,
    projectType: "Website Innovation",
    thumbnail: {
      alt: "E&B Solutions",
      src: `${imagesFolderPath}/projects/project4/thumbnail.jpg`
    }
  },
  {
    client: "Valley Love Farm",
    date: "March 2018",
    details: "Deeets",
    features: "Features",
    key: "3",
    images: [
      { src: "/images/projects/project3/img1.jpg", alt: "Screenshot 1" },
      { src: "/images/projects/project3/img2.jpg", alt: "Screenshot 2" }
    ],
    information: `After proven success with the first implementation through GoDaddy's Website Builder, Valley Love Farm (formerly Valley Love Organic) decided to further trust E&B Solutions with a full website implementation.`,
    informationCont: `This required building their new website from the ground up and choosing a new theme that matched their services offered.  This also meant making sure to maintain their current site functionality and provide new features the client was excited to receive.`,
    projectType: "Website Implementation",
    thumbnail: {
      alt: "Valley Love Farm",
      src: `${imagesFolderPath}/projects/project3/thumbnail.jpg`
    }
  },
  {
    client: "Valley Love Organic",
    date: "September 2016",
    details: "Deeets",
    features: "Features",
    key: "2",
    images: [
      { src: "/images/projects/project2/img1.jpg", alt: "Screenshot 1" },
      { src: "/images/projects/project2/img2.jpg", alt: "Screenshot 2" },
      { src: "/images/projects/project2/img3.jpg", alt: "2016 Metrics" },
      { src: "/images/projects/project2/img4.jpg", alt: "2017 Metrics" }
    ],
    information: `Using GoDaddy's WebSite builder, updated the existing site to use a newer and responsive theme.`,
    informationCont: `Added new pages for new services offered by client. Client's site traffic increased significantly once they could promote their redesigned site.`,
    projectType: "Website Enhancement",
    thumbnail: {
      alt: "Valley Love Organic",
      src: `${imagesFolderPath}/projects/project2/thumbnail.jpg`
    }
  },
  {
    client: "E&B Solutions",
    date: "July 2016",
    details: "Deeets",
    features: "Features",
    key: "1",
    images: [
      { src: "/images/projects/project1/img1.jpg", alt: "Screenshot 1" },
      { src: "/images/projects/project1/img2.jpg", alt: "Screenshot 2" }
    ],
    information:
      "Created a responsive website from scratch and hosted in the cloud.",
    projectType: "Website Implementation",
    thumbnail: {
      alt: "E&B Solutions",
      src: `${imagesFolderPath}/projects/project1/thumbnail.jpg`
    }
  }
];

export default projects;
