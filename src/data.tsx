import UiImage from "./Assets/ui_design.png";
import WebDesign from "./Assets/web_design.png";
import WebDevelopment from "./Assets/web_development.png";
import Prototyping from "./Assets/prototyping_site.png";

import CardsImage from "./Components/Props/CardsImage";

export const nav = [
  {
    id: "#home",
    link: "/",
    name: "home",
  },
  {
    id: "#services",
    link: "/#services",
    name: "services",
  },
  {
    id: "#work",
    link: "/#work",
    name: "work",
  },
  {
    id: "#about",
    link: "/#about",
    name: "about",
  },
  {
    id: "#contact",
    link: "/#contact",
    name: "contact",
  },
];

export const circleColorYellowGroup = [
  {
    id: 0,
    color: "#cb132d",
  },
];

export const squareColorsYellow = [
  {
    id: 0,
    color: "#830bd2",
    theme: "yellow-theme",
  },
  {
    id: 1,
    color: "#c30eb0",
    theme: "yellow-theme",
  },
  {
    id: 2,
    color: "#cb132d",
    theme: "yellow-theme",
  },
  {
    id: 3,
    color: "#da5a14",
    theme: "yellow-theme",
  },
  {
    id: 4,
    color: "#dab500",
    theme: "yellow-theme",
  },
];

export const squareColorsBlue = [
  {
    id: 0,
    color: "#001051",
    theme: "blue-theme",
  },
  {
    id: 1,
    color: "#16095f",
    theme: "blue-theme",
  },
  {
    id: 2,
    color: "#4d0666",
    theme: "blue-theme",
  },
  {
    id: 3,
    color: "#844c60",
    theme: "blue-theme",
  },
  {
    id: 4,
    color: "#ab7e7e",
    theme: "blue-theme",
  },
];
export const squareColorsGrey = [
  {
    id: 0,
    color: "#9da6d1",
    theme: "grey-theme",
  },
  {
    id: 1,
    color: "#accc9b",
    theme: "grey-theme",
  },
  {
    id: 2,
    color: "#e4dedf",
    theme: "grey-theme",
  },
  {
    id: 3,
    color: "#cfdfff",
    theme: "grey-theme",
  },
  {
    id: 4,
    color: "#bccceb",
    theme: "grey-theme",
  },
];
export const squareColorsGreen = [
  {
    id: 0,
    color: "#b0d8db",
    theme: "green-theme",
  },
  {
    id: 1,
    color: "#fcdadc",
    theme: "green-theme",
  },
  {
    id: 2,
    color: "#8ac5c8",
    theme: "green-theme",
  },
  {
    id: 3,
    color: "#F3E5E4",
    theme: "green-theme",
  },
  {
    id: 4,
    color: "#e08a8f",
    theme: "green-theme",
  },
];

export const languages = [
  {
    id: 0,
    name: "en",
  },
  {
    id: 1,
    name: "de",
  },
  {
    id: 2,
    name: "pt",
  },
  {
    id: 3,
    name: "es",
  },
];

export const homeText = [
  {
    id: 0,
    text: "We are Webcraft Studios, we work from concept to code, crafting your digital universe.",
  },
];

export const buttonHome = [
  {
    id: "#contact",
    text: "let´s talk!",
    link: "/#contact",
  },
];

export const pageDescriptions = [
  {
    id: "services",
    title: "Services",
    description:
      "Transform your online presence with our comprehensive website development services. From initial concept to final launch, we ensure a seamless process that brings your vision to life. Partner with us to build a website that stands out and performs exceptionally in today’s digital landscape.",
  },
];

export const servicesCard = [
  {
    id: 1,
    icon: <CardsImage data={UiImage} />,
    service: "UI Design",
    text: "UI (User Interface) design services focus on creating visually appealing, user-friendly interfaces for websites, applications, and other digital products. ",
  },
  {
    id: 2,
    icon: <CardsImage data={Prototyping} />,
    service: "Prototyping",
    text: "UI prototyping services involve creating interactive, preliminary versions of a user interface to visualize and test design concepts before full development. ",
  },
  {
    id: 3,
    icon: <CardsImage data={WebDesign} />,
    service: "Web Design",
    text: "Our Web design services encompass a range of offerings that aim to create, develop, and maintain websites for businesses, organizations, and individuals. These services are tailored to meet specific needs and goals, whether to build an online presence, enhance user experience, increase sales, or improve brand visibility.",
  },
  {
    id: 4,
    icon: <CardsImage data={WebDevelopment} />,
    service: "Web Development",
    text: "Our Web development services cover a wide range of activities involved in building, creating, and maintaining websites and web applications. These services cover everything from coding and programming, ensuring a website is not only visually appealing but also fully functional, responsive, and optimized for performance.",
  },
];

export const modalContent = [
  {
    id: 1,
    title: "UI Design",
    text: "UI (User Interface) design services focus on creating visually appealing, user-friendly interfaces for websites, applications, and other digital products. These services typically include: \\nResearch and Analysis: Understanding user needs, market trends, and business objectives to inform design decisions. \\nWireframing and Prototyping: Creating sketches and interactive prototypes to visualize the layout and flow of the interface. \\nVisual Design: Crafting the aesthetic elements of the interface, such as colors, typography, and imagery, to enhance user experience. \\nInteraction Design: Defining how users interact with the interface, ensuring intuitive navigation and engagement. \\nUsability Testing: Conducting tests with real users to gather feedback and refine the design for optimal usability. \\nResponsive Design: Ensuring the interface works seamlessly across various devices and screen sizes. \\nCollaboration and Handoff: Working closely with developers to ensure the design is accurately implemented and functions as intended.",
  },
  {
    id: 2,
    title: "Prototyping",
    text: "UI prototyping services involve creating interactive, preliminary versions of a user interface to visualize and test design concepts before full development. These services typically include: \\nConcept Development: Translating initial ideas and requirements into tangible prototypes. \\nWireframing: Developing basic layouts to establish the structure and flow of the interface. \\nInteractive Prototyping: Building dynamic, clickable models that simulate the user experience. \\nUsability Testing: Conducting tests with users to gather feedback and identify areas for improvement. \\nIteration and Refinement: Making adjustments based on feedback to optimize the prototype. \\nCollaboration and Presentation: Working with stakeholders to ensure the prototype aligns with project goals and expectations. \\nThese services help validate design decisions, identify potential issues early, and ensure the final product meets user needs effectively.",
  },
];
