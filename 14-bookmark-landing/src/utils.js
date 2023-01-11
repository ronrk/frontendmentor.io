import articleImg1 from "./images/illustration-features-tab-1.svg";
import articleImg2 from "./images/illustration-features-tab-2.svg";
import articleImg3 from "./images/illustration-features-tab-3.svg";

import { ReactComponent as Chrome } from "./images/logo-chrome.svg";
import { ReactComponent as FireFox } from "./images/logo-firefox.svg";
import { ReactComponent as Opera } from "./images/logo-opera.svg";

export const linkList = [
  { name: "Features", path: "/Features" },
  { name: "Pricing", path: "/Pricing" },
  { name: "Contact", path: "/Contact" },
];

export const featuresArticles = [
  {
    title: "Bookmark in one click",
    text: `Organize your bookmarks however you like. Our simple drag-and-drop interface 
gives you complete control over how you manage your favourite sites.`,
    img: articleImg1,
  },
  {
    title: "Intelligent search",
    text: `Our powerful search feature will help you find saved sites in no time at all. 
    No need to trawl through all of your bookmarks.`,
    img: articleImg2,
  },
  {
    title: "Share your bookmarks",
    text: `Easily share your bookmarks and collections with others. Create a shareable 
    link that you can send at the click of a button.`,
    img: articleImg3,
  },
];

export const downloadList = [
  { title: "Add to Chrome", sub: "Minumum version 62", icon: <Chrome /> },
  { title: "Add to Firefox", sub: "Minumum version 55", icon: <FireFox /> },
  { title: "Add to Opera", sub: "Minumum version 46", icon: <Opera /> },
];

export const FAQList = [
  {
    question: "What is Bookmark?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
  },
  {
    question: "How can I request a new browser?",
    answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
    Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
    ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
    Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.`,
  },
  {
    question: "Is there a mobile app?",
    answer: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
    urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
    sollicitudin ex et ultricies bibendum.`,
  },
  {
    question: "What about other Chromium browsers?",
    answer: `Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
    vitae neque eget nisl gravida pellentesque non ut velit.`,
  },
];
