export type Product = {
  id: string;
  number: string;
  name: string;
  category: "Workspace" | "Home & living" | "Daily rituals";
  image: string;
  description: string;
  detail: string;
  notes: string[];
};

export const categories = ["All products", "Workspace", "Home & living", "Daily rituals"] as const;

export const products: Product[] = [
  {
    "id": "task-table-lamp",
    "number": "101",
    "name": "Task table lamp",
    "category": "Workspace",
    "image": "/images/task-table-lamp.webp",
    "description": "A dark table lamp with a rounded shade and warm metal accents.",
    "detail": "Give a reading corner or work surface a dedicated table light. Ask Robert to confirm the available finish, dimensions, and power connection before ordering.",
    "notes": [
      "What are the lamp dimensions?",
      "Which finishes and power connections are offered?",
      "What is the price for my quantity?"
    ]
  },
  {
    "id": "blank-page-notebook",
    "number": "102",
    "name": "Blank-page notebook",
    "category": "Workspace",
    "image": "/images/blank-page-notebook.webp",
    "description": "An open notebook with plain pages for sketches, thoughts, and daily notes.",
    "detail": "Keep a notebook close for ideas that are easier to put on paper. Ask Robert to confirm the page format, cover options, and available sizes before ordering.",
    "notes": [
      "Which notebook sizes are offered?",
      "Can you confirm the paper and page format?",
      "Which cover options are available?"
    ]
  },
  {
    "id": "mesh-pen-pot",
    "number": "103",
    "name": "Mesh pen pot",
    "category": "Workspace",
    "image": "/images/mesh-pen-pot.webp",
    "description": "A simple mesh holder that gives pens and pencils a place on the desk.",
    "detail": "Bring everyday writing tools together in an open pen pot. Ask Robert to confirm its dimensions, finish options, and current availability before ordering.",
    "notes": [
      "What are the overall dimensions?",
      "Which finishes are available?",
      "Can I enquire about several units?"
    ]
  },
  {
    "id": "table-clock",
    "number": "104",
    "name": "Table clock",
    "category": "Workspace",
    "image": "/images/table-clock.webp",
    "description": "A rectangular clock with a pale face, dark hands, and a slim golden frame.",
    "detail": "Make space for an analog clock on a desk or shelf. Ask Robert to confirm its size, power requirements, and available finishes before ordering.",
    "notes": [
      "What are the clock dimensions?",
      "What power source does it use?",
      "Which frame finishes are available?"
    ]
  },
  {
    "id": "desk-scissors",
    "number": "113",
    "name": "Desk scissors",
    "category": "Workspace",
    "image": "/images/desk-scissors.webp",
    "description": "A pair of scissors with dark handles and a warm metallic finish.",
    "detail": "Keep a pair nearby for wrapping, paper, and creative tasks. Ask Robert to confirm the size, handle options, and intended materials before ordering.",
    "notes": [
      "What length and handle options are available?",
      "Which materials are these scissors intended to cut?",
      "What is the price for my quantity?"
    ]
  },
  {
    "id": "colored-pencil-set",
    "number": "114",
    "name": "Colored pencils",
    "category": "Workspace",
    "image": "/images/colored-pencil-set.webp",
    "description": "A bright selection of sharpened pencils for drawing and putting ideas on paper.",
    "detail": "Bring a little color to sketches, notes, and desk projects. Ask Robert to confirm the color selection, pencil types, and number of pieces included before ordering.",
    "notes": [
      "Which colors and pencil types are available?",
      "How many pencils are included?",
      "Is a sharpener included or ordered separately?"
    ]
  },
  {
    "id": "desktop-stapler",
    "number": "119",
    "name": "Desktop stapler",
    "category": "Workspace",
    "image": "/images/desktop-stapler.webp",
    "description": "An orange-red stapler with a silver-colored mechanism and a simple desktop profile.",
    "detail": "Keep a stapler close to the paperwork on your desk. Ask Robert to confirm the staple size, overall dimensions, and available finishes before ordering.",
    "notes": [
      "Which staple sizes does it use?",
      "What are the overall dimensions?",
      "Which finishes and quantity options are available?"
    ]
  },
  {
    "id": "phone-stand",
    "number": "120",
    "name": "Desktop phone stand",
    "category": "Workspace",
    "image": "/images/phone-stand.webp",
    "description": "A dark phone stand with a slim upright arm and a flat desktop base.",
    "detail": "Set a phone beside your work area on a compact stand. Ask Robert to confirm device compatibility, included pieces, and any power or charging features before ordering. The pictured phone is a styling prop.",
    "notes": [
      "Will it fit my phone and case?",
      "Does the offered version have charging features or require power?",
      "What is included with the stand?"
    ]
  },
  {
    "id": "natural-weave-basket",
    "number": "105",
    "name": "Woven storage basket",
    "category": "Home & living",
    "image": "/images/natural-weave-basket.webp",
    "description": "A round, lidded basket with a pale lining and carry handles.",
    "detail": "Give blankets and household pieces a place beside a bed or sofa. Ask Robert to confirm the basket size, lining, and included lid before ordering.",
    "notes": [
      "Which basket sizes are offered?",
      "Are the lining and lid included?",
      "What materials and care instructions apply?"
    ]
  },
  {
    "id": "fringed-throw",
    "number": "106",
    "name": "Fringed throw",
    "category": "Home & living",
    "image": "/images/fringed-throw.webp",
    "description": "A textured throw for a favorite chair and the quieter moments at home.",
    "detail": "Keep a throw nearby when settling into a reading corner. Ask Robert to confirm its dimensions, composition, and care instructions before ordering.",
    "notes": [
      "What throw sizes are available?",
      "Can you confirm the fabric composition?",
      "Which colors and care instructions apply?"
    ]
  },
  {
    "id": "rose-throw-cushion",
    "number": "107",
    "name": "Rose throw cushion",
    "category": "Home & living",
    "image": "/images/rose-throw-cushion.webp",
    "description": "A square decorative cushion in a warm rose tone.",
    "detail": "Add a touch of color to a sofa, armchair, or bedroom. Ask Robert to confirm the size, cover material, and whether a filling is included before ordering.",
    "notes": [
      "Which cushion sizes are offered?",
      "Is the cushion filling included?",
      "What cover materials and colors are available?"
    ]
  },
  {
    "id": "patterned-planter",
    "number": "108",
    "name": "Patterned planter",
    "category": "Home & living",
    "image": "/images/patterned-planter.webp",
    "description": "A pale planter with a geometric pattern for a small green corner.",
    "detail": "Give a plant a decorative home on a shelf or side table. Ask Robert to confirm the pot dimensions, drainage details, and whether the offer is for the planter alone before ordering.",
    "notes": [
      "What are the inner and outer dimensions?",
      "Does the planter have drainage?",
      "Is this the pot only, or is a plant included?"
    ]
  },
  {
    "id": "classic-picture-frame",
    "number": "115",
    "name": "Classic picture frame",
    "category": "Home & living",
    "image": "/images/classic-picture-frame.webp",
    "description": "A dark picture frame with a layered border and a simple rectangular opening.",
    "detail": "Give a favorite photograph or small print a place on a shelf. Ask Robert to confirm the frame dimensions, display options, and available finishes before ordering.",
    "notes": [
      "Which print sizes will fit?",
      "Can it stand on a surface, hang on a wall, or both?",
      "Which frame finishes are available?"
    ]
  },
  {
    "id": "geometric-candle-holder",
    "number": "116",
    "name": "Geometric candle holder",
    "category": "Home & living",
    "image": "/images/geometric-candle-holder.webp",
    "description": "A pale candle holder with faceted sides and a small circular opening.",
    "detail": "Add a small geometric accent to a mantel, shelf, or table. Ask Robert to confirm the holder dimensions, suitable candle size, and number of pieces included before ordering.",
    "notes": [
      "What are the holder and candle-opening dimensions?",
      "How many holders are included?",
      "Are candles included, and what use instructions apply?"
    ]
  },
  {
    "id": "tissue-box",
    "number": "121",
    "name": "Mountain-print tissue box",
    "category": "Home & living",
    "image": "/images/tissue-box.webp",
    "description": "A rectangular tissue box with a mountain illustration and an opening at the top.",
    "detail": "Keep tissues within reach with a printed box for a desk or side table. Ask Robert to confirm the dimensions, available designs, and whether tissues are included before ordering.",
    "notes": [
      "What are the box dimensions?",
      "Which printed designs are available?",
      "Are tissues included, and can the box be refilled?"
    ]
  },
  {
    "id": "tabletop-mirror",
    "number": "122",
    "name": "Tabletop mirror",
    "category": "Home & living",
    "image": "/images/tabletop-mirror.webp",
    "description": "A round mirror with a dark frame, upright stem, and circular base.",
    "detail": "Give a dressing surface or shelf a small standing mirror. Ask Robert to confirm its overall size, mirror dimensions, and available finishes before ordering.",
    "notes": [
      "What are the overall and mirror dimensions?",
      "Can the mirror angle be adjusted?",
      "Which finishes are available?"
    ]
  },
  {
    "id": "everyday-ceramic-mug",
    "number": "109",
    "name": "Everyday ceramic mug",
    "category": "Daily rituals",
    "image": "/images/everyday-ceramic-mug.webp",
    "description": "A plain white ceramic mug with a curved handle and a glossy finish.",
    "detail": "Make room for a simple mug in your morning routine. Ask Robert to confirm its capacity, finish options, and care instructions before ordering.",
    "notes": [
      "What capacity and dimensions are available?",
      "Which finishes are offered?",
      "Can you confirm the care instructions?"
    ]
  },
  {
    "id": "glass-water-carafe",
    "number": "110",
    "name": "Glass water carafe",
    "category": "Daily rituals",
    "image": "/images/glass-water-carafe.webp",
    "description": "A clear glass carafe with a narrow neck for an everyday table setting.",
    "detail": "Set out a carafe for water at a shared meal or on a desk. Ask Robert to confirm its capacity, dimensions, and care instructions before ordering.",
    "notes": [
      "What capacity and height are available?",
      "Can you confirm what is included?",
      "What care instructions apply to the glass?"
    ]
  },
  {
    "id": "glass-soap-dispenser",
    "number": "111",
    "name": "Glass soap dispenser",
    "category": "Daily rituals",
    "image": "/images/glass-soap-dispenser.webp",
    "description": "A clear glass jar with a dark pump and a decorative soap label.",
    "detail": "Bring a refillable dispenser to a bathroom or kitchen counter. Ask Robert to confirm the capacity, pump details, and whether the dispenser is supplied empty before ordering.",
    "notes": [
      "What capacity and dimensions are available?",
      "Is the dispenser supplied empty?",
      "What pump finishes and care instructions are offered?"
    ]
  },
  {
    "id": "paper-carry-bag",
    "number": "112",
    "name": "Everyday carry bag",
    "category": "Daily rituals",
    "image": "/images/paper-carry-bag.webp",
    "description": "A plain brown carry bag with woven handles and a simple square profile.",
    "detail": "A simple carry bag for small purchases or a considered gift. Ask Robert to confirm its size, materials, and quantity options before ordering.",
    "notes": [
      "Which bag sizes are offered?",
      "Can you confirm the bag and handle materials?",
      "What quantity options and pricing are available?"
    ]
  },
  {
    "id": "wooden-kitchen-spoons",
    "number": "117",
    "name": "Wooden kitchen spoons",
    "category": "Daily rituals",
    "image": "/images/wooden-kitchen-spoons.webp",
    "description": "Kitchen spoons with visible wood grain and varied rounded profiles.",
    "detail": "Keep a simple wooden spoon close for everyday kitchen preparation. Ask Robert to confirm the sizes, wood type, and pieces included before ordering.",
    "notes": [
      "Which spoon sizes and profiles are offered?",
      "Can you confirm the wood type and care instructions?",
      "What pieces and quantities are included?"
    ]
  },
  {
    "id": "ribbed-water-glass",
    "number": "118",
    "name": "Ribbed water glass",
    "category": "Daily rituals",
    "image": "/images/ribbed-water-glass.webp",
    "description": "A clear drinking glass with fine vertical ridges and a gently tapered shape.",
    "detail": "Set out a simple glass for water at the table or beside your work. Ask Robert to confirm the capacity, dimensions, and care instructions before ordering.",
    "notes": [
      "What capacity and dimensions are available?",
      "Can I enquire about individual glasses or a set?",
      "What care instructions apply?"
    ]
  },
  {
    "id": "glass-storage-jar",
    "number": "123",
    "name": "Glass storage jar",
    "category": "Daily rituals",
    "image": "/images/glass-storage-jar.webp",
    "description": "A clear open-top jar with embossed lettering and a screw-style rim.",
    "detail": "Use a simple jar to gather small everyday items. Ask Robert to confirm the dimensions, capacity, intended uses, and whether a lid is included before ordering.",
    "notes": [
      "What capacity and dimensions are offered?",
      "Is a lid included?",
      "Which uses and care instructions apply?"
    ]
  },
  {
    "id": "cutting-board",
    "number": "124",
    "name": "Striped cutting board",
    "category": "Daily rituals",
    "image": "/images/cutting-board.webp",
    "description": "A rectangular board with broad light and dark wood-grain stripes and softened corners.",
    "detail": "Make space for a board in a kitchen prep or serving setup. Ask Robert to confirm its dimensions, composition, intended food-contact use, and care instructions before ordering.",
    "notes": [
      "What are the board dimensions and composition?",
      "Which food-contact uses are suitable?",
      "What cleaning and care instructions apply?"
    ]
  }
];

export function getProduct(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

export const featuredProductIds = ["task-table-lamp", "everyday-ceramic-mug", "fringed-throw", "patterned-planter"] as const;
