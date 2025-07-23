import { Job } from "@/types/job";
import { Nav } from "@/types/navbar";

export const navList: Nav[] = [
  {
    title: "For jobseekers",
    children: [
      {
        title: "Nav Menu 1",
      },
      {
        title: "Nav Menu 2",
      },
    ],
  },
  {
    title: "For clients",
    children: [
      {
        title: "Nav Menu 1",
      },
      {
        title: "Nav Menu 2",
      },
    ],
  },
  {
    title: "Sectors",
    children: [
      {
        title: "Nav Menu 1",
      },
      {
        title: "Nav Menu 2",
      },
    ],
  },
  {
    title: "Resources",
    children: [
      {
        title: "Nav Menu 1",
      },
      {
        title: "Nav Menu 2",
      },
    ],
  },
  {
    title: "Cloud",
  },
];

export const navFooterList: Nav[] = [
  {
    title: "Explore",
    children: [
      {
        title: "Homepage",
      },
      {
        title: "For jobseekers",
      },
      {
        title: "For clients",
      },
      {
        title: "Our sectors",
      },
      {
        title: "Resources",
      },
      {
        title: "Contact us",
      },
    ],
  },
  {
    title: "Sectors",
    children: [
      {
        title: "Software engineering",
      },
      {
        title: "DevOps",
      },
      {
        title: "Cloud",
      },
      {
        title: "Infrastructure",
      },
      {
        title: "Testing",
      },
      {
        title: "Securtiy",
      },
    ],
  },
  {
    title: "Services",
    children: [
      {
        title: "Service 1",
      },
      {
        title: "Service 2",
      },
      {
        title: "Service 3",
      },
      {
        title: "Service 4",
      },
      {
        title: "Service 5",
      },
    ],
  },
];

export const data: Job[] = [
  {
    id: 0,
    stack: "Python",
    title: "Software Engineer",
    location: "London",
    salary: 65000,
    shortDescription:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    createdAt: new Date(),
  },
  {
    id: 2,
    stack: "Typescript",
    title: "Front-End Engineer",
    location: "London",
    salary: 75000,
    shortDescription:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    createdAt: new Date(),
  },
  {
    id: 3,
    stack: "NodeJs",
    title: "Back-End Engineer",
    location: "London",
    salary: 55000,
    shortDescription:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    createdAt: new Date(),
  },
  {
    id: 4,
    stack: "Ollama",
    title: "ML Engineer",
    location: "London",
    salary: 85000,
    shortDescription:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    createdAt: new Date(),
  },
  {
    id: 5,
    stack: "Python",
    title: "Software Engineer",
    location: "London",
    salary: 95000,
    shortDescription:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    createdAt: new Date(),
  },
  {
    id: 6,
    stack: "Python",
    title: "Software Engineer",
    location: "London",
    salary: 65000,
    shortDescription:
      "Odio mi amet commodo convallis nunc. Tincidunt mauris eu egestas eget in aliquam.",
    createdAt: new Date(),
  },
];
