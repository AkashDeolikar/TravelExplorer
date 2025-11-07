// src/app/data/placesdata.ts
export const PLACESDATA: {
  [key: string]: {
    hero: {
      title: string;
      subtitle: string;
      image: string;
      cta?: string;
    };
    info: {
      aboutTitle: string;
      aboutText: string;
      quickFacts: { key: string; value: string }[];
      highlights: { icon: string; title: string; desc: string }[];
    };
    gallery: string[];
  };
} = {
  khajjiar: {
    hero: {
      title: 'Khajjiar',
      subtitle: 'Mini Switzerland of India',
      image: '/assets/images/khajjiar.webp',
      cta: 'Explore Now'
    },
    info: {
      aboutTitle: 'About Khajjiar',
      aboutText: `
        Khajjiar, often called the “Mini Switzerland of India,” is a scenic plateau 
        nestled amidst the dense pine forests and snow-capped peaks of Himachal Pradesh.
        It offers mesmerizing views of Mount Kailash and a tranquil lake right in its heart. 
        The meadows, deodar forests, and gentle slopes make it perfect for picnics, trekking, and nature walks.`,
      quickFacts: [
        { key: 'Best Time', value: 'March – June, September – November' },
        { key: 'State', value: 'Himachal Pradesh' },
        { key: 'Altitude', value: '6,500 ft above sea level' },
        { key: 'Nearest Town', value: 'Dalhousie (22 km)' }
      ],
      highlights: [
        { icon: '🌲', title: 'Deodar Forests', desc: 'Fragrant pine and deodar woods surrounding the meadows.' },
        { icon: '🏞️', title: 'Khajjiar Lake', desc: 'A serene lake with floating islands in the middle of lush grasslands.' },
        { icon: '🐎', title: 'Adventure', desc: 'Enjoy horse riding, zorbing, and paragliding across the meadows.' }
      ]
    },
    gallery: [
      '/assets/images/khajjiar1.webp',
      '/assets/images/khajjiar2.webp',
      '/assets/images/khajjiar3.webp'
    ]
  },

  dawarkashmir: {
    hero: {
      title: 'Dawar',
      subtitle: 'The Ancient Capital of the Dards',
      image: '/assets/images/Dawar.webp',
      cta: 'Discover Serenity'
    },
    info: {
      aboutTitle: 'About Dawar',
      aboutText: `
        Hidden deep in the Gurez Valley of Jammu & Kashmir, Dawar is a remote 
        Himalayan gem known for its pristine beauty and Dardic heritage.
        Snow peaks, alpine streams, and wooden homes define its charm. 
        With limited connectivity, Dawar feels untouched by modern chaos —
        making it an ideal offbeat retreat.`,
      quickFacts: [
        { key: 'State', value: 'Jammu & Kashmir' },
        { key: 'Region', value: 'Gurez Valley' },
        { key: 'Best Time', value: 'May – September' },
        { key: 'Nearest Town', value: 'Bandipora (85 km)' }
      ],
      highlights: [
        { icon: '🏔️', title: 'Himalayan Views', desc: 'Surrounded by snow-covered peaks and flowing Kishanganga River.' },
        { icon: '🏡', title: 'Traditional Architecture', desc: 'Charming log houses showcasing Dardic craftsmanship.' },
        { icon: '🕊️', title: 'Peace & Isolation', desc: 'Experience complete digital detox amidst tranquil mountain life.' }
      ]
    },
    gallery: [
      '/assets/images/dawar1.webp',
      '/assets/images/dawar2.webp',
      '/assets/images/dawar3.webp'
    ]
  }
};
