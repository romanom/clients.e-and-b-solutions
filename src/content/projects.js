import { imagesFolderPath } from "../config";

const projects = [
  {
    projectId: "4",
    client: "E&B Solutions",
    date: "May 2018",
    details: "Deeets",
    features: "Features",
    images: [
      {
        key: "img1",
        src: `${imagesFolderPath}/projects/project4/img1.jpg`,
        alt: "Screenshot 1"
      },
      {
        key: "img2",
        src: `${imagesFolderPath}/projects/project4/img2.jpg`,
        alt: "Screenshot 2"
      }
    ],
    projectType: "Website Innovation",
    thumbnail: {
      alt: "E&B Solutions",
      src: `${imagesFolderPath}/projects/project4/thumbnail.jpg`
    }
  },
  {
    projectId: "3",
    client: "Valley Love Farm",
    date: "March 2018",
    details: "Deeets",
    features: "Features",
    images: [
      {
        key: "img1",
        src: `${imagesFolderPath}/projects/project3/img1.jpg`,
        alt: "Screenshot 1"
      },
      {
        key: "img2",
        src: `${imagesFolderPath}/projects/project3/img2.jpg`,
        alt: "Screenshot 2"
      }
    ],
    projectType: "Website Implementation",
    thumbnail: {
      alt: "Valley Love Farm",
      src: `${imagesFolderPath}/projects/project3/thumbnail.jpg`
    }
  },
  {
    projectId: "2",
    client: "Valley Love Organic",
    date: "September 2016",
    details: "Deeets",
    features: "Features",
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
      },
      {
        key: "img3",
        src: `${imagesFolderPath}/projects/project2/img3.jpg`,
        alt: "Screenshot 3"
      },
      {
        key: "img4",
        src: `${imagesFolderPath}/projects/project2/img4.jpg`,
        alt: "Screenshot 4"
      }
    ],
    projectType: "Website Enhancement",
    thumbnail: {
      alt: "Valley Love Organic",
      src: `${imagesFolderPath}/projects/project2/thumbnail.jpg`
    }
  },
  {
    projectId: "1",
    client: "E&B Solutions",
    date: "July 2016",
    details: "Deeets",
    features: "Features",
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
      }
    ],
    projectType: "Website Implementation",
    thumbnail: {
      alt: "E&B Solutions",
      src: `${imagesFolderPath}/projects/project1/thumbnail.jpg`
    }
  }
];

export default projects;
