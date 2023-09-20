import tour1 from "../images/tour-1.jpeg";
import Himalaya from "../images/Himalaya.jpg";
import pinkCity from "../images/pinkCity.jpg";
import goa from "../images/goa.jpg";
import lion from "../images/lion.jpg";

import tour6 from "../images/tour-6.jpeg";

export const PageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const SocialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 1, href: "https://www.instagram.com", icon: "fab fa-instagram" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "October 26th, 2023",
    title: "Unleash Northeast",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "Uttarakhand",
    duration: 6,
    price: 2100,
  },
  {
    id: 2,
    image: Himalaya,
    date: "October 15th, 2023",
    title: "best of Himalayas",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "india-Nepal",
    duration: 11,
    price: 1400,
  },
  {
    id: 3,
    image: goa,
    date: "November 1st, 2023",
    title: "gorgeous Goa",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "Goa",
    duration: 8,
    price: 5000,
  },
  {
    id: 4,
    image: pinkCity,
    date: "december 5th, 2019",
    title: "rangilo Rajasthan",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "rajasthan",
    duration: 20,
    price: 3300,
  },
  {
    id: 5,
    image: lion,
    date: "december 1st, 2023",
    title: "great Gujarat",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "Gujarat",
    duration: 9,
    price: 4500,
  },
  {
    id: 6,
    image: tour6,
    date: "January 1st, 2024",
    title: "incredible India",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    place: "India",
    duration: 15,
    price: 9999,
  },
];
