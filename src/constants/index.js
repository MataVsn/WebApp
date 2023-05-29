import {
    web,
    aftereffects,
    ss13,
} from "../assets";

export const navLinks = [
    {
    id: "about",  title: "About",
    },
    {
    id: "work",
    title: "Work",
    },
    {
    id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "After Effects Montage",
      icon: web,
    },
    {
      title: "DM coder",
      icon: web,
    },
  ];
  
  const experiences = [
    {
      title: "Video Montage",
      name: "After Effects and Sony Vegas",
      icon: aftereffects,
      iconBg: "#383E56",
      points: [
        "I've been making video clips and montage for different purposes, mostly in a school, when teachers were asking me to make video for their classes or School Socials, my relatives requests.",
      ],
    },
    {
      title: "Space Station 13",
      name: "SS13",
      icon: ss13,
      iconBg: "#E6DEDD",
      points: [
        "Since summer 2022, i'm taking part in RU SS13 Coders community, developing and making our game better, it's a small 2D game about space station and its crew..",
      ],
    },
  ];

  export { services, experiences };