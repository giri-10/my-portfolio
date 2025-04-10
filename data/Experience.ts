import { MilestoneTypes } from '@/types';

export const ExperienceData = [
  {
    id: 1,
    type: MilestoneTypes.Education,
    date: 'December 2021 - June 2025',
    title: 'Bachelor of Engineering in Computer Science',
    img: '/company-logo/mvjce.png',
    organization: 'MVJ College of Engineering',
    location: 'Bengaluru, India',
    gpa: 8.7,
    description: [
      ' Relevant Coursework: Data Structures, Algorithms, Database Management Systems, Operating Systems, Software Engineering, Machine Learning, Discrete Mathematics, Cryptography, Cloud Computing',
    ],
  },
  {
    id: 2,
    type: MilestoneTypes.Work,
    date: 'September 2024 - April 2025',
    title: 'AI/ML Intern',
    img: '/company-logo/rooman.png',
    organization: "Rooman Technologies",
    location: 'Bengaluru, India',
    description: [
      'Implemented ML models using Scikit-learn, covering regression, classification, and clustering techniques',
      'Preprocessed and transformed data using Pandas, feature engineering, normalization, and encoding techniques.',
      'Worked with AI/ML pipelines, performing model evaluation, hyper-parameter tuning, and sentiment analysis.',
    ],    
    technologies: [
      'Python',
      'Machine Learning',
      'Data Preprocessing',
      'Data Visualization',      
    ],
  },
  {
    id: 3,
    type: MilestoneTypes.Work,
    date: 'November 2023 - December 2023',
    title: 'Software Engineering Intern',
    img: '/company-logo/systecks.png',
    organization: "Systecks Solutions",
    location: 'Bengaluru, India',
    description: [
      'Collaborated with a team to integrate and optimize the catalog feature on an e-commerce platform, using Java & Springboot.',
      'Developed and deployed a URL shortening tool, improving user experience and engagement.',
      'Actively engaged in reading, editing, and creating comprehensive documentation, facilitating smoother team collaboration and knowledge transfer.',
    ],    
    technologies: [
      'Java',
      'Springboot',
      'MySQL',
      'Git',
      'Test-Driven Development',
    ],
  }
];
