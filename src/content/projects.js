import { imagesFolderPath } from "../config";

/* eslint-disable max-len */
const projects = [
  {
    client: "E&B Solutions",
    date: "May 2018",
    key: "project4",
    images: [
      { src: "/images/project4_img1.jpg", alt: "Screenshot 1" },
      { src: "/images/project4_img2.jpg", alt: "Screenshot 2" }
    ],
    information: `Using React, a JavaScript library for building user interfaces, and Amazon Web Services, the E&B Solutions' site was completely rebuilt.`,
    informationCont: `This allowed for faster page load times, theme consistency, and a strong improvement in the user's overall experience.`,
    title: "Website Innovation",
    thumbnail: {
      alt: "E&B Solutions",
      src: `${imagesFolderPath}/project4_thumbnail.jpg`
    }
  },
  {
    client: "Valley Love Farm",
    date: "March 2018",
    key: "project3",
    images: [
      { src: "/images/project3_img1.jpg", alt: "Screenshot 1" },
      { src: "/images/project3_img2.jpg", alt: "Screenshot 2" }
    ],
    information: `After proven success with the first implementation through GoDaddy's Website Builder, Valley Love Farm (formerly Valley Love Organic) decided to further trust E&B Solutions with a full website implementation.`,
    informationCont: `This required building their new website from the ground up and choosing a new theme that matched their services offered.  This also meant making sure to maintain their current site functionality and provide new features the client was excited to receive.`,
    title: "Website Implementation",
    thumbnail: {
      alt: "Valley Love Farm",
      src: `${imagesFolderPath}/project3_thumbnail.jpg`
    }
  },
  {
    client: "Valley Love Organic",
    date: "September 2016",
    key: "project2",
    images: [
      { src: "/images/project2_img1.jpg", alt: "Screenshot 1" },
      { src: "/images/project2_img2.jpg", alt: "Screenshot 2" },
      { src: "/images/project2_img3.jpg", alt: "2016 Metrics" },
      { src: "/images/project2_img4.jpg", alt: "2017 Metrics" }
    ],
    information: `Using GoDaddy's WebSite builder, updated the existing site to use a newer and responsive theme.`,
    informationCont: `Added new pages for new services offered by client. Client's site traffic increased significantly once they could promote their redesigned site.`,
    title: "Website Enhancement",
    thumbnail: {
      alt: "Valley Love Organic",
      src: `${imagesFolderPath}/project2_thumbnail.jpg`
    }
  },
  {
    client: "E&B Solutions",
    date: "July 2016",
    key: "project1",
    images: [
      { src: "/images/project1_img1.jpg", alt: "Screenshot 1" },
      { src: "/images/project1_img2.jpg", alt: "Screenshot 2" }
    ],
    information:
      "Created a responsive website from scratch and hosted in the cloud.",
    title: "Website Design",
    thumbnail: {
      alt: "E&B Solutions",
      src: `${imagesFolderPath}/project1_thumbnail.jpg`
    }
  }
];

export default projects;
