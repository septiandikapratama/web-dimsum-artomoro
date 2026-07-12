export type MenuCategory =
  | "Original"
  | "Dimsum Mentai Premium"
  | "Dimsum Mentai"
  | "Dimsum Bolognese"
  | "Dimsum Goreng Mentai"
  | "Dimsum Bakar"
  | "Dimsum Kuah"
  | "Wonton Pedas"
  | "Mix Platter";

export type MenuVariant = {
  label: string;
  price: number;
  note?: string;
};

export type MenuItem = {
  id: string;
  category: MenuCategory;
  name: string;
  description?: string;
  variants: MenuVariant[];
  bestSeller?: boolean;
};

// Ordered category -> slug list, shared by any page that groups/links menu
// items by category (e.g. /menu, /order).
export const MENU_CATEGORIES: { category: MenuCategory; slug: string }[] = [
  { category: "Original", slug: "original" },
  { category: "Dimsum Mentai Premium", slug: "mentai-premium" },
  { category: "Dimsum Mentai", slug: "mentai" },
  { category: "Dimsum Bolognese", slug: "bolognese" },
  { category: "Dimsum Goreng Mentai", slug: "goreng-mentai" },
  { category: "Dimsum Bakar", slug: "bakar" },
  { category: "Dimsum Kuah", slug: "kuah" },
  { category: "Wonton Pedas", slug: "wonton-pedas" },
  { category: "Mix Platter", slug: "mix-platter" },
];

export const menuItems: MenuItem[] = [
  // ===== ORIGINAL =====
  {
    id: "original-siomay-ayam",
    category: "Original",
    name: "Siomay Ayam",
    variants: [
      { label: "4 pcs", price: 10000 },
      { label: "8 pcs", price: 20000 },
      { label: "10 pcs", price: 25000 },
      { label: "20 pcs", price: 50000 },
    ],
  },
  {
    id: "original-dimsum-goreng-keju",
    category: "Original",
    name: "Dimsum Goreng Keju",
    variants: [
      { label: "3 pcs", price: 25000 },
      { label: "4 pcs", price: 30000 },
    ],
  },
  {
    id: "original-kentang-goreng",
    category: "Original",
    name: "Kentang Goreng",
    variants: [
      { label: "Small", price: 13000 },
      { label: "Big", price: 20000 },
    ],
  },
  {
    id: "original-wonton-goreng",
    category: "Original",
    name: "Wonton Goreng",
    variants: [{ label: "6 pcs", price: 14000 }],
  },
  {
    id: "original-gyoza-panggang",
    category: "Original",
    name: "Gyoza Panggang",
    variants: [
      { label: "4 pcs", price: 12000 },
      { label: "8 pcs", price: 24000 },
      { label: "10 pcs", price: 30000 },
    ],
  },
  {
    id: "original-gyoza-goreng",
    category: "Original",
    name: "Gyoza Goreng",
    variants: [
      { label: "4 pcs", price: 13000 },
      { label: "8 pcs", price: 25000 },
      { label: "10 pcs", price: 32000 },
    ],
  },

  // ===== DIMSUM MENTAI PREMIUM =====
  {
    id: "mentai-premium-original",
    category: "Dimsum Mentai Premium",
    name: "Dimsum Mentai Premium",
    bestSeller: true,
    variants: [
      { label: "8 pcs", price: 32000 },
      { label: "20 pcs", price: 86000 },
    ],
  },
  {
    id: "mentai-premium-spicy",
    category: "Dimsum Mentai Premium",
    name: "Dimsum Mentai Premium Spicy",
    variants: [{ label: "8 pcs", price: 33000 }],
  },

  // ===== DIMSUM MENTAI (topping variants) =====
  // Grup A: 6/8/16 pcs @ 18000/24000/48000
  {
    id: "mentai-nori",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Nori",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 18000 },
      { label: "8 pcs", price: 24000 },
      { label: "16 pcs", price: 48000 },
    ],
  },
  {
    id: "mentai-spicy",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Spicy",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 18000 },
      { label: "8 pcs", price: 24000 },
      { label: "16 pcs", price: 48000 },
    ],
  },
  {
    id: "mentai-nori-spicy",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Nori + Spicy",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 18000 },
      { label: "8 pcs", price: 24000 },
      { label: "16 pcs", price: 48000 },
    ],
  },
  // Grup B: 6/8/16 pcs @ 20000/27000/53000
  {
    id: "mentai-nori-cheese",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Nori + Cheese",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 20000 },
      { label: "8 pcs", price: 27000 },
      { label: "16 pcs", price: 53000 },
    ],
  },
  {
    id: "mentai-nori-moza",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Nori + Moza",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 20000 },
      { label: "8 pcs", price: 27000 },
      { label: "16 pcs", price: 53000 },
    ],
  },
  {
    id: "mentai-spicy-cheese",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Spicy + Cheese",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 20000 },
      { label: "8 pcs", price: 27000 },
      { label: "16 pcs", price: 53000 },
    ],
  },
  {
    id: "mentai-spicy-moza",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Spicy + Moza",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 20000 },
      { label: "8 pcs", price: 27000 },
      { label: "16 pcs", price: 53000 },
    ],
  },
  {
    id: "mentai-cheese-moza",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Cheese + Moza",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 20000 },
      { label: "8 pcs", price: 27000 },
      { label: "16 pcs", price: 53000 },
    ],
  },
  {
    id: "mentai-cheese",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Cheese",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 20000 },
      { label: "8 pcs", price: 27000 },
      { label: "16 pcs", price: 53000 },
    ],
  },
  {
    id: "mentai-moza",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Moza",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 20000 },
      { label: "8 pcs", price: 27000 },
      { label: "16 pcs", price: 53000 },
    ],
  },
  {
    id: "mentai-mix-topping",
    category: "Dimsum Mentai",
    name: "Dimsum Mentai Mix Topping",
    bestSeller: true,
    variants: [
      { label: "6 pcs", price: 20000 },
      { label: "8 pcs", price: 27000 },
      { label: "16 pcs", price: 53000 },
    ],
  },

  // ===== DIMSUM BOLOGNESE =====
  {
    id: "bolognese-full",
    category: "Dimsum Bolognese",
    name: "Full Bolognese",
    variants: [
      { label: "6 pcs", price: 25000 },
      { label: "8 pcs", price: 33000 },
      { label: "16 pcs", price: 65000 },
    ],
  },
  {
    id: "bolognese-half-mentai-half-bolognese",
    category: "Dimsum Bolognese",
    name: "½ Mentai + ½ Bolognese",
    variants: [
      { label: "6 pcs", price: 22000 },
      { label: "8 pcs", price: 28000 },
      { label: "16 pcs", price: 56000 },
    ],
  },

  // ===== DIMSUM GORENG MENTAI =====
  {
    id: "goreng-mentai-kentang",
    category: "Dimsum Goreng Mentai",
    name: "Kentang Goreng Mentai",
    variants: [{ label: "Reguler", price: 20000 }],
  },
  {
    id: "goreng-mentai-dimsum-goreng-keju",
    category: "Dimsum Goreng Mentai",
    name: "Dimsum Goreng Keju Mentai",
    variants: [
      { label: "2 pcs", price: 18000 },
      { label: "3 pcs", price: 27000 },
    ],
  },

  // ===== DIMSUM BAKAR =====
  {
    id: "bakar-dimsum",
    category: "Dimsum Bakar",
    name: "Dimsum Bakar",
    description: "Bisa minta tidak pedas.",
    variants: [
      { label: "2 Tusuk (6 pcs)", price: 18000 },
      { label: "3 Tusuk (9 pcs)", price: 27000 },
      { label: "4 Tusuk (12 pcs)", price: 36000 },
    ],
  },
  {
    id: "bakar-gyoza",
    category: "Dimsum Bakar",
    name: "Gyoza Bakar",
    variants: [
      { label: "2 Tusuk (6 pcs)", price: 20000 },
      { label: "3 Tusuk (9 pcs)", price: 30000 },
    ],
  },
  {
    id: "bakar-mentai-cheese",
    category: "Dimsum Bakar",
    name: "Dimsum Bakar Mentai Cheese",
    variants: [{ label: "Reguler", price: 17000 }],
  },
  {
    id: "bakar-mentai-nori",
    category: "Dimsum Bakar",
    name: "Dimsum Bakar Mentai Nori",
    variants: [{ label: "Reguler", price: 14000 }],
  },

  // ===== DIMSUM KUAH =====
  {
    id: "kuah-gyoza-keju-creamy",
    category: "Dimsum Kuah",
    name: "Gyoza Kuah Keju Creamy",
    variants: [{ label: "Reguler", price: 18000 }],
  },
  {
    id: "kuah-wonton-keju-creamy",
    category: "Dimsum Kuah",
    name: "Wonton Kuah Keju Creamy",
    variants: [{ label: "Reguler", price: 15000 }],
  },
  {
    id: "kuah-siomay-keju-creamy",
    category: "Dimsum Kuah",
    name: "Siomay Kuah Keju Creamy",
    variants: [{ label: "Reguler", price: 18000 }],
  },
  {
    id: "kuah-gyoza-keju-pedas",
    category: "Dimsum Kuah",
    name: "Gyoza Kuah Keju Pedas",
    variants: [{ label: "Reguler", price: 20000 }],
  },
  {
    id: "kuah-wonton-keju-pedas",
    category: "Dimsum Kuah",
    name: "Wonton Kuah Keju Pedas",
    variants: [{ label: "Reguler", price: 20000 }],
  },
  {
    id: "kuah-siomay-keju-pedas",
    category: "Dimsum Kuah",
    name: "Siomay Kuah Keju Pedas",
    variants: [{ label: "Reguler", price: 20000 }],
  },

  // ===== WONTON PEDAS =====
  {
    id: "wonton-pedas-rebus-chili-oil",
    category: "Wonton Pedas",
    name: "Wonton Rebus Chili Oil",
    variants: [{ label: "Reguler", price: 14000 }],
  },
  {
    id: "wonton-pedas-goreng-chili-oil",
    category: "Wonton Pedas",
    name: "Wonton Goreng Chili Oil",
    variants: [{ label: "Reguler", price: 16000 }],
  },

  // ===== MIX PLATTER =====
  {
    id: "platter-mix",
    category: "Mix Platter",
    name: "Mix Platter",
    variants: [{ label: "Reguler", price: 80000 }],
  },
  {
    id: "platter-birthday-love",
    category: "Mix Platter",
    name: "Birthday Love",
    variants: [{ label: "Reguler", price: 65000 }],
  },
  {
    id: "platter-birthday-besar",
    category: "Mix Platter",
    name: "Birthday Besar",
    variants: [{ label: "Reguler", price: 100000 }],
  },
];
