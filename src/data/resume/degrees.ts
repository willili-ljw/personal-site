export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'University of California, Berkeley',
    degree: 'B.A. Data Science & Astrophysics (expected May 2027)',
    link: 'https://berkeley.edu',
    year: 2027,
  },
];

export default degrees;
