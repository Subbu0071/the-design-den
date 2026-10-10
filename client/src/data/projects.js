import compactVanity from "../assets/images/projects/compact-vanity.jpeg";
import contemporaryLounge from "../assets/images/projects/contemporary-lounge.jpeg";
import contrastingWardrobe from "../assets/images/projects/contrasting-wardrobe.jpeg";
import naturalWoodKitchen from "../assets/images/projects/natural-wood-kitchen.jpeg";
import panelledLivingRoom from "../assets/images/projects/panelled-living-room.jpeg";
import statementWardrobe from "../assets/images/projects/statement-wardrobe.jpeg";
import warmGeometryKitchen from "../assets/images/projects/warm-geometry-kitchen.jpeg";
import woodenTvUnit from "../assets/images/projects/wooden-tv-unit.jpeg";

// Additional optimized project photographs
import compactVanity01 from "../assets/images/projects/compact-vanity-01.webp";
import compactVanity03 from "../assets/images/projects/compact-vanity-03.webp";

import contemporaryLounge01 from "../assets/images/projects/contemporary-lounge-01.webp";
import contemporaryLounge02 from "../assets/images/projects/contemporary-lounge-02.webp";

import panelledLivingRoom01 from "../assets/images/projects/panelled-living-room-01.webp";
import panelledLivingRoom02 from "../assets/images/projects/panelled-living-room-02.webp";

import statementWardrobe01 from "../assets/images/projects/statement-wardrobe-01.webp";

import woodenTvUnit01 from "../assets/images/projects/wooden-tv-unit-01.webp";
import woodenTvUnit02 from "../assets/images/projects/wooden-tv-unit-02.webp";

const projects = [
  {
    id: "contemporary-lounge",
    title: "Contemporary Lounge",
    location: "Location to be confirmed",
    category: "Living Spaces",
    filterCategory: "Living Spaces",
    description:
      "A welcoming lounge combining patterned accent seating, warm wood finishes, a compact coffee table, and a coordinated entertainment wall. The layered textures create a comfortable living space with distinct character.",
    image: contemporaryLounge,
    gallery: [contemporaryLounge01, contemporaryLounge02],
    status: "Project Photography",
  },
  {
    id: "panelled-living-room",
    title: "Panelled Living Room",
    location: "Location to be confirmed",
    category: "Living Spaces",
    filterCategory: "Living Spaces",
    description:
      "A living room defined by decorative wall panelling, a contrasting media unit, and deep wood flooring. Upholstered seating adds softness, while the clean-lined entertainment wall gives the room a structured focal point.",
    image: panelledLivingRoom,
    gallery: [panelledLivingRoom01, panelledLivingRoom02],
    status: "Project Photography",
  },
  {
    id: "wooden-tv-unit",
    title: "Wood & Contrast TV Unit",
    location: "Location to be confirmed",
    category: "TV Units",
    filterCategory: "TV Units",
    description:
      "A statement entertainment unit combining natural wood-grain surfaces, open display shelving, and contrasting dark drawers. The arrangement balances display space with concealed storage around the television.",
    image: woodenTvUnit,
    gallery: [woodenTvUnit01, woodenTvUnit02],
    status: "Project Photography",
  },
  {
    id: "compact-vanity",
    title: "Compact Bathroom Vanity",
    location: "Location to be confirmed",
    category: "Bathroom Interiors",
    filterCategory: "Bathroom Interiors",
    description:
      "A compact vanity arrangement featuring wood-finish cabinetry, dark countertops, a vessel basin, and a mirrored storage cabinet. Teal wall tiles introduce a strong accent against the lighter surrounding surfaces.",
    image: compactVanity,
    gallery: [compactVanity01, compactVanity03],
    status: "Project Photography",
  },
  {
    id: "statement-wardrobe",
    title: "Statement Bedroom Wardrobe",
    location: "Location to be confirmed",
    category: "Wardrobes",
    filterCategory: "Wardrobes",
    description:
      "A full-height wardrobe combines mustard-toned panels, textured central finishes, and glazed sections that reveal internal shelving. Coordinated wood tones and the upholstered headboard bring warmth to the bedroom.",
    image: statementWardrobe,
    gallery: [statementWardrobe01],
    status: "Project Photography",
  },
  {
    id: "contrasting-wardrobe",
    title: "Bold Two-Tone Wardrobe",
    location: "Location to be confirmed",
    category: "Wardrobes",
    filterCategory: "Wardrobes",
    description:
      "A distinctive wardrobe composition pairs deep blue cabinet fronts with bright yellow drawers and surrounding neutral storage. The strong colour contrast gives this storage installation a contemporary, graphic look.",
    image: contrastingWardrobe,
    status: "Project Photography",
  },
  {
    id: "warm-geometry-kitchen",
    title: "Warm Geometric Kitchen",
    location: "Location to be confirmed",
    category: "Modular Kitchens",
    filterCategory: "Modular Kitchens",
    description:
      "Textured brown cabinetry and light lower units are paired with a geometric patterned backsplash. The contrasting surfaces create visual depth, while the continuous countertop and integrated hob keep the kitchen layout cohesive.",
    image: warmGeometryKitchen,
    status: "Project Photography",
  },
  {
    id: "natural-wood-kitchen",
    title: "Natural Wood Kitchen",
    location: "Location to be confirmed",
    category: "Modular Kitchens",
    filterCategory: "Modular Kitchens",
    description:
      "A practical parallel kitchen featuring wood-grain cabinet fronts, light upper surfaces, and dark countertops. The opposing work areas make use of the available space, with open shelving and task lighting completing the composition.",
    image: naturalWoodKitchen,
    status: "Project Photography",
  },
];

export default projects;
