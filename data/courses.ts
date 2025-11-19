export type Course = {
  title: string;
  slug: string;
  author: string;
  rating: number;
  price: string;
  image?: string;
  description?: string;
  sections?: Array<{ title: string; lessons: number }>;
};

export const courses: Course[] = [
  {
    title: 'Complete React Developer',
    slug: 'complete-react-developer',
    author: 'Jane Doe',
    rating: 4.7,
    price: '$19.99',
    image: '/react.png',
    description: 'Build real-world applications using React 18, TypeScript, and Tailwind.',
    sections: [
      { title: 'Intro', lessons: 4 },
      { title: 'Components', lessons: 12 },
      { title: 'Advanced', lessons: 8 },
    ],
  },

  {
    title: 'Next.js Bootcamp',
    slug: 'nextjs-bootcamp',
    author: 'John Smith',
    rating: 4.8,
    price: '$24.99',
    image: '/next.jpg',
    description: 'Learn Next.js 14 with a focus on app dir and edge rendering.',
    sections: [
      { title: 'Basics', lessons: 6 },
      { title: 'Data fetching', lessons: 10 },
      { title: 'Deploy', lessons: 3 },
    ],
  },

  {
    title: 'TypeScript Masterclass',
    slug: 'typescript-masterclass',
    author: 'Emily Perez',
    rating: 4.6,
    price: '$21.99',
    image: '/ts.jpg',
    description: 'Level up your JavaScript with TypeScript — types, generics, and real projects.',
    sections: [
      { title: 'Getting started', lessons: 5 },
      { title: 'Types & Generics', lessons: 11 },
      { title: 'TSX and React', lessons: 6 },
    ],
  },

  {
    title: 'Tailwind From Zero',
    slug: 'tailwind-from-zero',
    author: 'Alex Rivera',
    rating: 4.5,
    price: '$17.99',
    image: '/tw.jpg',
    description: 'Practical Tailwind CSS: utilities, components and design systems.',
    sections: [
      { title: 'Core classes', lessons: 6 },
      { title: 'Layouts', lessons: 7 },
      { title: 'Design systems', lessons: 8 },
    ],
  },

  {
    title: 'GraphQL & Apollo',
    slug: 'graphql-apollo',
    author: 'Sam Lee',
    rating: 4.4,
    price: '$18.99',
    image: '/ql.jpg',
    description: 'GraphQL fundamentals and Apollo Client — build fast, typed data layers.',
    sections: [
      { title: 'Schemas & Queries', lessons: 8 },
      { title: 'Apollo Client', lessons: 9 },
      { title: 'Subscriptions', lessons: 4 },
    ],
  },
];
// trimmed duplicate content — keep only the initial courses array above
