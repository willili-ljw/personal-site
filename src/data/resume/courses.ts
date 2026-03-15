export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: 'Bayesian Data Analysis and Machine Learning for Physical Sciences',
    number: 'STAT / ASTRO',
    link: 'https://data.berkeley.edu',
    university: 'UC Berkeley',
  },
  {
    title: 'Introduction to Artificial Intelligence',
    number: 'CS',
    link: 'https://data.berkeley.edu',
    university: 'UC Berkeley',
  },
  {
    title: 'Principles and Techniques of Data Science',
    number: 'DS',
    link: 'https://data.berkeley.edu',
    university: 'UC Berkeley',
  },
  {
    title: 'Data Structures',
    number: 'CS 61B',
    link: 'https://cs.berkeley.edu',
    university: 'UC Berkeley',
  },
  {
    title: 'Linear Algebra & Differential Equations',
    number: 'MATH 54',
    link: 'https://math.berkeley.edu',
    university: 'UC Berkeley',
  },
  {
    title: 'Multivariable Calculus',
    number: 'MATH 1B',
    link: 'https://math.berkeley.edu',
    university: 'UC Berkeley',
  },
  {
    title: 'Computational Structures in Data Science',
    number: 'COMPSCI',
    link: 'https://data.berkeley.edu',
    university: 'UC Berkeley',
  },
  {
    title: 'Astronomy Data Lab',
    number: 'ASTRON 128',
    link: 'https://astro.berkeley.edu',
    university: 'UC Berkeley',
  },
];

export default courses;
