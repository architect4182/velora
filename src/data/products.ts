export type Theme = 'white' | 'dark' | 'silk' | 'pista' | 'about';

export interface Product {
  id: string;
  type: Theme;
  subtitle: string;
  description: string;
  watermarkText: string;
  indexLabel: string;
  imageUrl: string;
  price: number;
  weight: string;
  ingredients: string[];
}

export const products: Product[] = [
  {
    id: 'white-madagascar',
    type: 'white',
    subtitle: "Velvet Sweetness.\nPure Indulgence.",
    description: "Creamy white chocolate crafted with\nMadagascar vanilla and silky cocoa butter.\n\nSmooth, delicate, and irresistibly luxurious.",
    watermarkText: "WHITE",
    indexLabel: "01 / WHITE COLLECTION",
    imageUrl: "/images/white.jpg",
    price: 24.00,
    weight: "250g",
    ingredients: ["Madagascar Vanilla", "32% Cocoa Butter", "Whole Milk Powder", "Cane Sugar"]
  },
  {
    id: 'dark-intense',
    type: 'dark',
    subtitle: "Bold. Intense.\nUnforgettable.",
    description: "Rich cocoa notes unfold into layers\nof depth and sophistication.\n\nCrafted for true chocolate connoisseurs.",
    watermarkText: "DARK",
    indexLabel: "02 / DARK COLLECTION",
    imageUrl: "/images/dark.jpg",
    price: 28.00,
    weight: "250g",
    ingredients: ["72% Single Origin Cacao", "Organic Cocoa Butter", "Raw Cane Sugar", "Sea Salt"]
  },
  {
    id: 'silk-classic',
    type: 'silk',
    subtitle: "Wrapped In Elegance.\nCrafted For Desire.",
    description: "A luxurious milk chocolate experience\nwith velvety texture and unforgettable richness.\n\nThe definition of modern indulgence.",
    watermarkText: "SILK",
    indexLabel: "03 / SILK COLLECTION",
    imageUrl: "/images/silk.jpg",
    price: 22.00,
    weight: "250g",
    ingredients: ["45% Milk Chocolate", "Caramelized Sugar", "Toasted Hazelnut Notes", "Vanilla Bean"]
  },
  {
    id: 'pista-roasted',
    type: 'pista',
    subtitle: "A Taste Of\nLuxury Nature.",
    description: "Premium roasted pistachios meet\nsmooth artisan chocolate in perfect harmony.\n\nNutty, creamy, and remarkably refined.",
    watermarkText: "PISTA",
    indexLabel: "04 / PISTACHIO COLLECTION",
    imageUrl: "/images/pista.jpg",
    price: 32.00,
    weight: "250g",
    ingredients: ["Sicilian Pistachios", "35% White Chocolate", "Sea Salt Flakes", "Cardamom Hint"]
  }
];
