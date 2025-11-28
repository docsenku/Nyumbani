export interface Apartment {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface ShopItem {
  id: string;
  name: string;
  price: string; // Keeping as string for display flexibility (e.g., "25,000 TZS")
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}
