export type Product = {
  id: string;
  number: string;
  name: string;
  category: "Desk & work" | "Comfort & rest" | "Home rituals";
  image: string;
  description: string;
  detail: string;
  notes: string[];
};

export const categories = ["All products", "Desk & work", "Comfort & rest", "Home rituals"] as const;

export const products: Product[] = [
  {
    id: "posture-seat-cushion",
    number: "01",
    name: "Posture Seat Cushion",
    category: "Comfort & rest",
    image: "/products/seat-cushion.png",
    description: "A contoured seat cushion for a more considered desk setup.",
    detail: "Add a softly shaped cushion to the chair you use every day. Ask Robert to confirm dimensions, available options, and fit for your chair before ordering.",
    notes: ["What dimensions will fit my chair?", "Which colors are available?", "What is the price for my quantity?"],
  },
  {
    id: "cervical-rest-pillow",
    number: "02",
    name: "Cervical Rest Pillow",
    category: "Comfort & rest",
    image: "/products/neck-pillow.png",
    description: "A softly shaped pillow for the quieter part of your day.",
    detail: "A contoured pillow for a bed or resting space. Ask Robert to confirm the size, materials, and available options before ordering.",
    notes: ["Which sizes are available?", "What materials and cover options are offered?", "Can you confirm current availability?"],
  },
  {
    id: "walnut-footrest",
    number: "03",
    name: "Walnut Footrest",
    category: "Comfort & rest",
    image: "/products/footrest.png",
    description: "A curved footrest for the space beneath your desk.",
    detail: "A low-profile footrest with a curved frame for a desk setup. Ask Robert to confirm its dimensions, finish, and suitability for your space before ordering.",
    notes: ["What are the overall dimensions?", "Which finishes are available?", "What is the price for my quantity?"],
  },
  {
    id: "dual-beam-monitor-light",
    number: "04",
    name: "Dual Beam Monitor Light",
    category: "Desk & work",
    image: "/products/monitor-light.png",
    description: "A monitor light for a focused evening workspace.",
    detail: "Bring task lighting to the space around your monitor. Ask Robert to confirm mounting compatibility, power requirements, and available options before ordering.",
    notes: ["Will the mount fit my monitor?", "What power connection does it use?", "Can you confirm current availability?"],
  },
  {
    id: "modular-oak-desk-tray",
    number: "05",
    name: "Modular Oak Desk Tray",
    category: "Desk & work",
    image: "/products/desk-tray.png",
    description: "Wooden trays that give everyday desk objects a place of their own.",
    detail: "Arrange notebooks, small accessories, and daily essentials in a modular tray setup. Ask Robert to confirm the tray sizes, set contents, and available finishes before ordering.",
    notes: ["Which tray sizes are included?", "Which finishes are available?", "Can I enquire about multiple sets?"],
  },
  {
    id: "quiet-desk-screen",
    number: "06",
    name: "Quiet Desk Screen",
    category: "Desk & work",
    image: "/products/acoustic-screen.png",
    description: "A freestanding screen for defining a desk area in a shared room.",
    detail: "Give a desk area a visual boundary with a softly textured screen. Ask Robert to confirm dimensions, placement requirements, and available finishes before ordering.",
    notes: ["Which screen dimensions are available?", "What space does the base require?", "Which finish options can I choose?"],
  },
  {
    id: "micro-mist-humidifier",
    number: "07",
    name: "Micro-Mist Humidifier",
    category: "Home rituals",
    image: "/products/humidifier.png",
    description: "A compact humidifier for a desk, shelf, or quiet corner.",
    detail: "A small humidifier with a simple form for an everyday home setting. Ask Robert to confirm capacity, care instructions, and power requirements before ordering.",
    notes: ["What capacity and dimensions are available?", "What care does the unit require?", "Which plug or power options are offered?"],
  },
  {
    id: "precision-temperature-kettle",
    number: "08",
    name: "Precision Temperature Kettle",
    category: "Home rituals",
    image: "/products/kettle.png",
    description: "A countertop kettle for tea breaks and daily rituals.",
    detail: "Make room for a kettle in the small pauses between tasks. Ask Robert to confirm capacity, temperature settings, and local power compatibility before ordering.",
    notes: ["Which capacity and settings are available?", "Is the power specification suitable for my location?", "What is the price for my quantity?"],
  },
  {
    id: "magnetic-cable-rail",
    number: "09",
    name: "Magnetic Cable Rail",
    category: "Desk & work",
    image: "/products/magnetic-cable-rail.png",
    description: "A rail that keeps everyday charging cables together at the desk edge.",
    detail: "Give frequently used charging cables a place to rest. Ask Robert to confirm the rail length, mounting method, and cable fit before ordering.",
    notes: ["What rail lengths are available?", "How does it attach to a desk?", "Will it fit the cables I use?"],
  },
  {
    id: "folded-felt-laptop-stand",
    number: "10",
    name: "Folded Felt Laptop Stand",
    category: "Desk & work",
    image: "/products/felt-laptop-stand.png",
    description: "A fold-away laptop stand with a soft felt finish.",
    detail: "A folded stand that gives a laptop its own place on the desk. Ask Robert to confirm device compatibility, dimensions, and available colors before ordering.",
    notes: ["Will it fit my laptop size?", "What are the open and folded dimensions?", "Which colors are available?"],
  },
  {
    id: "stackable-utility-caddy",
    number: "11",
    name: "Stackable Utility Caddy",
    category: "Desk & work",
    image: "/products/utility-caddy.png",
    description: "A compartmented caddy for stationery and small everyday essentials.",
    detail: "Bring pens, notes, and small tools together in a modular caddy. Ask Robert to confirm the dimensions, included compartments, and available options before ordering.",
    notes: ["Which compartments are included?", "What are the overall dimensions?", "Can I enquire about multiple units?"],
  },
  {
    id: "silver-ion-air-purifier",
    number: "12",
    name: "Silver-Ion Air Purifier",
    category: "Home rituals",
    image: "/products/air-purifier.png",
    description: "A compact air-care unit for the space where you work or unwind.",
    detail: "A compact air purifier for an everyday home or workspace setting. Ask Robert to confirm specifications, replacement-filter availability, and local power compatibility before ordering.",
    notes: ["Can you confirm the full product specifications?", "Are replacement filters available?", "Is the power specification suitable for my location?"],
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export const featuredProductIds = [
  "modular-oak-desk-tray",
  "dual-beam-monitor-light",
  "posture-seat-cushion",
  "precision-temperature-kettle",
] as const;
