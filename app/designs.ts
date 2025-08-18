// File: app/designs.ts
// Master list for all designs (one entry per design = one page at /designs/<slug>)
export type Design = { slug: string; name: string; price: number; img: string };

export const DESIGNS: Design[] = [
  { slug: "cactus", name: "The Cactus", price: 1495, img: "/designs/cactus.jpg" },
  { slug: "fibonacci", name: "The Fibonacci", price: 1495, img: "/designs/fibonacci.jpeg" },
  { slug: "fibonaccci2", name: "The Fibonacci v2", price: 1595, img: "/designs/fibonaccci2.jpg" },
  { slug: "russian-doll", name: "Russian Doll", price: 1895, img: "/designs/russian-doll.jpg" },
  { slug: "stonehenge", name: "Stonehenge", price: 1995, img: "/designs/stonehenge.jpg" },
  { slug: "swirl", name: "Swirl", price: 2195, img: "/designs/swirl.webp" },
  { slug: "icon", name: "ICON", price: 2495, img: "/designs/icon.jpeg" },
  { slug: "icon2", name: "ICON 2", price: 2595, img: "/designs/icon2.jpeg" },
  { slug: "icon-inside", name: "ICON Interior", price: 2795, img: "/designs/icon-inside.jpeg" },
  { slug: "building-home", name: "Building Home", price: 2995, img: "/designs/building-home.jpg" },
  { slug: "commercial", name: "Commercial", price: 3995, img: "/designs/commercial.jpeg" },
  { slug: "commercial-3d", name: "Commercial 3D", price: 3995, img: "/designs/commercial-3d.webp" },
  { slug: "duplex", name: "Modern Duplex", price: 4295, img: "/designs/duplex.jpg" },
  { slug: "apartments", name: "Apartments", price: 4995, img: "/designs/apartments.jpg" },
  { slug: "futuristic-city", name: "Futuristic City", price: 5495, img: "/designs/futuristic-city.jpeg" },
  { slug: "3d-printed-community", name: "3D-Printed Community", price: 5995, img: "/designs/3d-printed-community.png" },
  { slug: "3dcommunity", name: "3D Community", price: 5995, img: "/designs/3dcommunity.jpeg" },
  { slug: "3dconstuction", name: "3D Construction", price: 6295, img: "/designs/3dconstuction.jpeg" },
  { slug: "3dprintedhouse", name: "3D-Printed House", price: 6495, img: "/designs/3dprintedhouse.jpg" },
  { slug: "cobod", name: "COBOD", price: 6995, img: "/designs/cobod.webp" },
  { slug: "cobod2", name: "COBOD 2", price: 7195, img: "/designs/cobod2.jpeg" },
  { slug: "ferrari", name: "Ferrari", price: 7995, img: "/designs/ferrari.jpg" },
  { slug: "ferrari2", name: "Ferrari 2", price: 7995, img: "/designs/ferrari2.jpg" },
  { slug: "low-income", name: "Low-Income Housing", price: 8995, img: "/designs/low-income.jpeg" },
  { slug: "rendering", name: "Rendering", price: 9295, img: "/designs/Rendering.jpg" },
  { slug: "images", name: "Images", price: 9995, img: "/designs/images.jpeg" },
];
