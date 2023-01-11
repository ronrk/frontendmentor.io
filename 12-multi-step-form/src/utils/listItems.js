import iconAdvanced from "../assets/images/icon-advanced.svg";
import iconArcade from "../assets/images/icon-arcade.svg";
import iconPro from "../assets/images/icon-pro.svg";

export const pagesList = [
  {
    name: "your info",
    page: 1,
  },
  {
    name: "select plan",
    page: 2,
  },
  {
    name: "add-ons",
    page: 3,
  },
  {
    name: "summary",
    page: 4,
  },
];

export const planList = [
  {
    name: "arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: iconArcade,
  },
  {
    name: "advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: iconAdvanced,
  },
  {
    name: "pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: iconPro,
  },
];

export const addonsList = [
  {
    name: "online service",
    desc: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    name: "larger storage",
    desc: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    name: "Customizable profile",
    desc: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
];
