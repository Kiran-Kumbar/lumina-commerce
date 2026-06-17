import { Product } from "@/types";

export const products: Product[] = [
  {
    id: '1', slug: 'custom-photo-mug', name: 'Custom Photo Mug',
    price: 499, originalPrice: 699, category: 'Mugs', occasion: ['Birthday', 'Anniversary'],
    badge: 'Best Seller',
    images: ['https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=800&q=80'],
    description: 'A premium ceramic mug printed with your most cherished memory.',
    longDescription: 'A premium ceramic mug printed with your most cherished memory. Perfect for everyday use.',
    deliveryDays: '4', customizable: true, tags: ['mug', 'photo', 'ceramic']
  },
  {
    id: '2', slug: 'spotify-glass-plaque', name: 'Spotify Glass Plaque',
    price: 799, originalPrice: 999, category: 'Plaques', occasion: ['Anniversary', 'Couple'],
    badge: 'Popular',
    images: ['https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80'],
    description: 'Scan to play your song. A keepsake for music that means everything.',
    longDescription: 'Scan to play your song. A keepsake for music that means everything. Laser etched on premium glass.',
    deliveryDays: '5', customizable: true, tags: ['music', 'spotify', 'glass']
  },
  {
    id: '3', slug: 'led-name-lamp', name: 'LED Name Lamp',
    price: 1299, originalPrice: 1599, category: 'Lamps', occasion: ['Birthday', 'Wedding'],
    images: ['https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&q=80'],
    description: 'Warm glow, your name in light. Perfect for any desk or bedside.',
    longDescription: 'Warm glow, your name in light. Perfect for any desk or bedside. USB powered LED with warm tone.',
    deliveryDays: '5', customizable: true, tags: ['lamp', 'name', 'light']
  },
  {
    id: '4', slug: 'custom-photo-frame', name: 'Custom Photo Frame',
    price: 899, originalPrice: 1099, category: 'Frames', occasion: ['Wedding', 'Baby'],
    images: ['https://images.unsplash.com/photo-1531685250784-7569952593d2?w=800&q=80'],
    description: 'Solid wood frame, engraved with a date or message that matters.',
    longDescription: 'Solid wood frame, engraved with a date or message that matters. Available in oak and walnut finish.',
    deliveryDays: '3', customizable: true, tags: ['frame', 'photo', 'wood']
  },
  {
    id: '5', slug: 'premium-name-plate', name: 'Premium Name Plate',
    price: 1499, originalPrice: 1799, category: 'Home', occasion: ['Corporate', 'Housewarming'],
    images: ['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'],
    description: 'Brushed metal finish. Your name, your identity, displayed with pride.',
    longDescription: 'Brushed metal finish. Your name, your identity, displayed with pride. Suitable for home or office.',
    deliveryDays: '6', customizable: true, tags: ['nameplate', 'metal', 'office']
  },
  {
    id: '6', slug: 'personalised-cushion', name: 'Personalised Cushion',
    price: 599, originalPrice: 799, category: 'Decor', occasion: ['Birthday', 'Couple'],
    images: ['https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80'],
    description: 'Soft, huggable, and completely yours. Photo-printed on premium fabric.',
    longDescription: 'Soft, huggable, and completely yours. Photo-printed on premium fabric. Machine washable cover.',
    deliveryDays: '4', customizable: true, tags: ['cushion', 'photo', 'fabric']
  },
  {
    id: '7', slug: 'memory-photo-book', name: 'Memory Photo Book',
    price: 1999, originalPrice: 2499, category: 'Frames', occasion: ['Wedding', 'Anniversary'],
    badge: 'Premium',
    images: ['https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80'],
    description: 'A hardbound story of your most treasured moments, beautifully laid out.',
    longDescription: 'A hardbound story of your most treasured moments, beautifully laid out. 20 pages, premium print.',
    deliveryDays: '7', customizable: true, tags: ['book', 'photo', 'hardbound']
  },
  {
    id: '8', slug: 'couple-portrait', name: 'Custom Couple Portrait',
    price: 2499, originalPrice: 2999, category: 'Decor', occasion: ['Anniversary', 'Wedding'],
    badge: 'New',
    images: ['https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80'],
    description: 'Hand-drawn style digital portrait from your photo. Framed and ready.',
    longDescription: 'Hand-drawn style digital portrait from your photo. Framed and ready. Digital file also included.',
    deliveryDays: '7', customizable: true, tags: ['portrait', 'couple', 'art']
  },
]
