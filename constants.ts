import { Apartment, ShopItem } from './types';

export const SITE_NAME = "Nyumbani";
export const SITE_TAGLINE = "Where heritage meets hospitality.";

export const APARTMENTS: Apartment[] = [
  {
    id: 'loft',
    title: 'Nyumbani Loft',
    description: 'A spacious sanctuary featuring high ceilings and open-air living spaces that capture the ocean breeze. Perfect for couples seeking romance and privacy.',
    image: 'https://picsum.photos/id/1033/800/600',
    features: ['Top floor privacy', 'Ocean views', 'Open-plan living']
  },
  {
    id: 'mezzanine',
    title: 'Nyumbani Mezzanine',
    description: 'The perfect balance of history and modernity, featuring intricate wooden details and a cozy mezzanine sleeping area overlooking the living space.',
    image: 'https://picsum.photos/id/235/800/600',
    features: ['Split-level design', 'Restored wood carvings', 'Reading nook']
  },
  {
    id: 'garden',
    title: 'Nyumbani Garden',
    description: 'A lush retreat on the ground floor with direct access to a private courtyard garden. An oasis of calm in the heart of the city.',
    image: 'https://picsum.photos/id/1047/800/600',
    features: ['Private courtyard', 'Easy access', 'Lush greenery']
  }
];

export const SHOP_ITEMS: ShopItem[] = [
  { id: '1', name: 'Labeled Water Bottle', price: '35,000 TZS', image: 'https://picsum.photos/id/30/400/400' },
  { id: '2', name: 'Labeled Map Print', price: '45,000 TZS', image: 'https://picsum.photos/id/1072/400/400' },
  { id: '3', name: 'Labeled Tote Bag', price: '25,000 TZS', image: 'https://picsum.photos/id/873/400/400' },
  { id: '4', name: 'Around Nyumbani Zine', price: '15,000 TZS', image: 'https://picsum.photos/id/24/400/400' },
  { id: '5', name: 'Nyumbani Book', price: '85,000 TZS', image: 'https://picsum.photos/id/367/400/400' },
  { id: '6', name: 'Karanga (Spiced Nuts)', price: '10,000 TZS', image: 'https://picsum.photos/id/493/400/400' },
];

export const CONTENT = {
  about: {
    title: "A Historic Masterpiece Reimagined",
    text1: "Step into a world where centuries-old Swahili architecture meets contemporary luxury. Our carefully restored historic building in the heart of Stone Town offers an exclusive collection of boutique apartments, each thoughtfully designed to preserve the cultural heritage of Zanzibar while providing modern comforts.",
    text2: "From the moment you enter, you'll experience the perfect harmony of traditional Zanzibari elements - from intricate carved wooden doors to graceful arches - combined with sophisticated contemporary design and bespoke personalized service.",
    text3: "Each apartment tells a story of Stone Town's rich history while offering the privacy and comfort of your own luxurious sanctuary in this UNESCO World Heritage site."
  },
  apartmentsIntro: {
    title: "Modern Comfort Meets Cultural Heritage",
    text1: "Discover the perfect blend of contemporary living and historic charm in our boutique building nestled in the heart of Stone Town. Each of our apartments offers modern amenities while placing you steps away from Zanzibar's most iconic landmarks.",
    text2: "Located within walking distance of Forodhani Gardens, the Old Fort, and the House of Wonders, our residences provide the ideal base for exploring the UNESCO World Heritage site. Experience the vibrant culture, bustling markets, and rich history of Stone Town while enjoying the comfort of modern accommodation.",
    text3: "Our contemporary design approach respects the historic fabric of the neighborhood while offering the conveniences today's travelers expect. Each apartment occupies an entire floor, ensuring privacy and space for your Zanzibar adventure.",
    text4: "Each apartment celebrates local craftsmanship through traditional design, featuring hand-carved wooden elements, textiles, and locally sourced materials.",
    text5: "We collaborate with local artisans to incorporate authentic elements: carved wooden mirror frames, traditional kasha chests repurposed as coffee tables, and handwoven palm baskets that serve both functional and aesthetic purposes. The result is a sophisticated blend of contemporary comfort and timeless Zanzibari craftsmanship."
  },
  amenities: [
    "Breakfast served in-room",
    "Concierge assistance for tours, transport & dining reservations",
    "Airport transfers and local experiences on request",
    "Secure access and guest support",
    "High-speed WiFi & Smart TV",
    "Weekly housekeeping",
    "Air-conditioning and ceiling fans",
    "Fully equipped kitchen"
  ],
  parking: {
    text: "While on-site parking is not available in this historic neighbourhood, there is a secure public car park conveniently located just 3 minutes away for 6,000 TZS per day. Our concierge is available to assist with transportation or directions."
  },
  transport: {
    text1: "Public transportation in Zanzibar is fairly limited, but there are several convenient ways to get around the island. Dala dalas, the local shared minibuses, are the most common and budget-friendly option, though they can be crowded. Taxis are widely available and reasonably priced, but it’s best to agree on the fare in advance, as most do not have working meters.",
    text2: "For shorter trips, boda bodas (motorcycle taxis) offer a fast and inexpensive way to travel — just remember to wear a helmet for safety. Bicycles are another enjoyable and easy way to explore at your own pace, especially in coastal areas.",
    text3: "Travellers seeking more flexibility can rent a car or 4x4 vehicle, ideal for discovering Zanzibar’s less-travelled roads. Most of the island’s main routes are well maintained, and driving is generally considered safe."
  },
  experiences: {
    intro: "At Nyumbani, your stay is more than just a place to rest — it’s a doorway to Zanzibar’s vibrant soul. We partner with trusted local guides and artisans to weave together immersive experiences tailored just for you. Whether you dream of gliding across the sea at sunset, wandering aged alleys of stonetown, or sampling coastal flavors beneath swaying palms — we can arrange your perfect itinerary."
  }
};
