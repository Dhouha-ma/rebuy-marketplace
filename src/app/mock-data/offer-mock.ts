import { Offer } from '../types/offer-type';

export const OFFERS_MOCK: Offer[] = [
  {
    id: 1,
    title: 'Wireless Earbuds',
    description: 'High-quality wireless earbuds with noise cancellation.',
    details:
      'Experience crystal-clear audio with advanced noise cancellation that blocks out distractions. These wireless earbuds offer a comfortable fit, long-lasting battery life, and seamless Bluetooth pairing — perfect for travel, workouts, or everyday use.',
    price: 59,
    likes: 59,
    dislikes: 15,
    image: 'assets/images/earbuds.png',
  },
  {
    id: 2,
    title: 'Smartwatch',
    description: 'Track your fitness and receive notifications.',
    details:
      'Stay connected and motivated with a sleek smartwatch designed for your daily routine. Monitor your heart rate, track workouts, review sleep patterns, and receive notifications right on your wrist. Durable, stylish, and built for active lifestyles.',
    price: 199,
    likes: 40,
    dislikes: 2,
    image: 'assets/images/smartwatch.png',
  },
  {
    id: 3,
    title: 'Bluetooth Speaker',
    description: 'Compact waterproof speaker with rich sound.',
    details:
      "Enjoy powerful, room-filling audio from a compact waterproof speaker built for both indoor and outdoor use. With rich bass, crisp highs, and long battery life, it's perfect for parties, travel, or relaxing at home.",
    price: 75,
    likes: 75,
    dislikes: 5,
    image: 'assets/images/speaker.png',
  },
  {
    id: 4,
    title: 'Wireless Mouse',
    description: 'Ergonomic mouse with high precision.',
    details:
      'Work comfortably and efficiently with an ergonomic wireless mouse featuring precise tracking and responsive clicks. Its lightweight design, long battery life, and smooth glide make it ideal for productivity and everyday computing.',
    price: 64,
    likes: 64,
    dislikes: 6,
    image: 'assets/images/mouse.png',
  },
];
