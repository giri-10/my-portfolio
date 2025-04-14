import { ProjectCategories } from '@/types';

export const projectsData = [
  {
    id: 1,
    src: '/project-img/cc1.png',
    title: 'CodeChoreo',
    description:
      'A web application for real-time collaborative coding, allowing users to code together in real-time.',
    sourceUrl: 'https://codechoreo.onrender.com',
    githubUrl: 'https://github.com/giri-10/CodeChoreo',
    technologyStack: [
      'React.js',
      'TailwindCSS',
      'Node.js',
      'Express.js',
      'Typescript',
      'Socket.io',
      'React router',
      'Git',
      'Docker',
      'Vite',
      'Render'
    ],
    features: [
      'Real-Time Collaboration: Multiple users can edit code simultaneously with live cursor tracking.',
      'Integrated Chat: Built-in chat system for seamless communication during coding sessions.',
      'Room-Based Sessions: Create and join unique rooms for private collaboration.',
    ],
    challenges: [
      'Real-Time Synchronization: Ensuring consistent and conflict-free code synchronization among users.​',
      'Scalability: Managing server performance with increasing concurrent users.​',
      'Security: Implementing secure authentication and protecting session integrity.',
    ],
    accomplishments: [
      'Full-Stack Development: Successfully built a comprehensive application integrating front-end and back-end technologies.',
      'Deployment: Deployed the application on a live server for user access.',
      'User Experience: Designed an intuitive interface facilitating efficient collaboration.​',
    ],
  },
  {
    id: 2,
    src: '/project-img/codemate.png',
    title: 'BookHaven',
    description:
      'A web application for a bookstore, allowing users to buy and sell books.',
    sourceUrl: '',
    githubUrl: 'https://github.com/giri-10/book-haven',
    technologyStack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'OAuth2',
      'Postgresql',
      'REST',
      'Lombok',
      'Docker',
      'Github',
      'Github Actions',
      'Postman',
      'Bootstrap',
      'TailwindCSS',
      'Alpine.js',
      'Thymeleaf',
      'Keycloak',
      'RabbitMQ',
      'Docker',
    ],
    features: [
      'Developed a microservices-based bookstore web application with catalog management, order processing, and real-time notifications.',
      'Secure Authentication: Integrates Keycloak for robust user authentication and authorization.',
      'Responsive UI: Utilizes Thymeleaf, Alpine.js, and Bootstrap to ensure a seamless user experience across devices.',
    ],
    challenges: [
      'Integration Complexity: Coordinating between multiple microservices and ensuring seamless communication.',
      'Real-Time Notifications: Implementing RabbitMQ to handle asynchronous events and provide timely updates to users.',
      'Responsive Design: Ensuring the UI remains intuitive and accessible across various devices and screen sizes.',
    ],
    accomplishments: [
      'Full-Stack Development: Successfully built a comprehensive application integrating front-end and back-end technologies.',
      'Dockerized the application for easy deployment.',
      'Secure Authentication: Implemented Keycloak to manage user identities and access control effectively.',
      'Followed good coding practices like SOLID principles and design patterns.',
    ],
  },
  {
    id: 3,
    category: ProjectCategories.DesktopApplication,
    src: '/project-img/friday.png',
    title: 'F.R.I.D.A.Y',
    description:
      'A desktop application for a personal voice assistant, allowing users to interact with the assistant using natural voice commands.',
    sourceUrl: null,
    githubUrl:
      'https://github.com/giri-10/Friday-Voice-Assistant',
    technologyStack: [
      'Python',
      'OpenAI',
      'Pyttsx3',
      'SpeechRecognition',
      'PyAudio',
      'Pywhatkit',
      'Pyjokes',
      'Selenium',
      'Tkinter',

    ],
    features: [
      'Voice-Controlled Interface: Interact with the assistant using natural voice commands',
      'Web Navigation: Open websites like YouTube, Google, GitHub, and Spotify via voice commands.​',
      "Fetches info from Wikipedia, Google, news, and weather using voice commands.",
    ],
    challenges: [
      'Speech Recognition Accuracy: Ensuring the assistant accurately interprets diverse voice inputs.​',
      'API Integration: Seamlessly connecting with various web APIs for information retrieval.​',
      'Real-Time Responsiveness: Maintaining quick response times for a smooth user experience.',
    ],
    accomplishments: [
      'Comprehensive Assistant: Developed a multifaceted voice assistant capable of handling information retrieval, system operations, and entertainment.​',
      'User Engagement: Enhanced user interaction through conversational capabilities and real-time feedback.​',
    ],
  },
  {
    id: 4,
    src: '/project-img/talkspace.png',
    title: 'Talkspace',
    description:
      'A chatroom application for real-time communication, allowing users to join chat rooms and communicate with each other.',
    sourceUrl: '',
    githubUrl: 'https://github.com/giri-10/talkspace',
    technologyStack: [
      'HTML',
      'CSS',
      'JavaScript',
      'Java',
      'Spring Boot',
      'Web Socket',
    ],
    features: [
      'Real-Time Chat: Enables users to join chat rooms and communicate instantly.​',
      'Responsive UI: Designed for seamless interaction across devices.​',
    ],
    challenges: [
      'Scalability: Ensuring the application can handle increasing user load.​',
      'Security: Protecting user data and preventing unauthorized access.​',
    ],
    accomplishments: [
      'Full-Stack Development: Built both front-end and back-end components for a complete application.​',    ],
  },
  {
    id: 5,
    src: '/project-img/massageapp.png',
    title: "Employee Management System",
    description:
      "A web application for managing employee records, allowing users to create, read, update, and delete employee information.",
    sourceUrl: '',
    githubUrl: 'https://github.com/giri-10/Employee-Management-System',
    technologyStack: [
      'React',
      'Java',
      'Spring Boot',
      'H2 Database',
      'Spring Data JPA',

    ],
    features: [
      'Employee Records Management: Create, read, update, and delete employee information.​',
      'User-Friendly Interface: Intuitive UI built with React for seamless interaction.​',
      'Backend Integration: Robust backend powered by Spring Boot for efficient data handling.​',
    ],
    challenges: [
      "Frontend-Backend Integration: Ensuring smooth communication between React and Spring Boot components.",
      'State Management: Maintaining consistent application state across different components.​',
      'Data Validation: Implementing checks to ensure data integrity and prevent errors.',
    ],
    accomplishments: [
      'Responsive Design: Created a responsive UI that adapts to various screen sizes.​',
      'Efficient Data Handling: Implemented effective CRUD operations for managing employee data.​',    ],
  },
  {
    id: 6,
    src: '/project-img/blackjack.png',
    title: 'Plant Disease Detection',
    description:
      'A web application for detecting plant diseases using machine learning, allowing users to upload images of plants and receive disease predictions.',
    sourceUrl: null,
    githubUrl: 'https://github.com/giri-10/plantdiseasedetection',
    technologyStack: ['Python', 'Pandas', 'Numpy', 'Scikit-learn', 'Keras', 'Streamlit', 'Flask', 'Jupyter Notebook'],
    features: [
      'Image-Based Diagnosis: Utilizes image processing techniques to identify plant diseases from leaf images.​',
      'Machine Learning Integration: Employs machine learning algorithms for accurate disease classification.​',
    ],
    challenges: [
      'Data Collection: Gathering a diverse and representative dataset of diseased and healthy plant images.​',
      'Model Accuracy: Ensuring high accuracy in disease detection across various plant species.​',
      'Generalization: Developing a model that generalizes well to new, unseen data.​',
    ],
    accomplishments: [
      'Practical Application: Demonstrated the potential for real-world application in agriculture.​',
    ],
  },

  {
    id: 7,
    src: '/project-img/webportfolio1.png',
    title: 'Enhanced Super-Resolution GANs',
    description:
      'A model for enhancing image resolution using GANs, allowing users to upload low-resolution images and receive high-resolution outputs.',
    sourceUrl: '',
    githubUrl: 'https://github.com/giri-10/enchanced-super-res-gans',
    technologyStack: [
      'Python',
      'Pytorch',
      'OpenCV',
      'Tensorboard',
      'Flask',
      'Streamlit',
    ],
    features: [
      'Advanced Image Upscaling: Utilizes Enhanced Super-Resolution Generative Adversarial Networks (ESRGAN) to upscale low-resolution images, preserving intricate details.​',
      'Customizable Training: Offers configurable parameters for tailored model training to suit specific datasets and requirements.',
      'Dataset Handling: Includes utilities for efficient dataset loading and preprocessing, streamlining the training pipeline.​',
    ],
    challenges: [
      'High-Quality Data Requirement: Necessitates a substantial dataset of high-resolution images for effective training and accurate super-resolution.​',
      'Computational Demand: Training GANs, especially for high-resolution outputs, demands significant computational resources and time.',
      'Model Stability: Ensuring stability during GAN training to prevent issues like mode collapse and to achieve consistent results.',
    ],
    accomplishments: [
      'Model Implementation: Successfully implemented the ESRGAN architecture, enhancing image super-resolution capabilities.​',
      'Performance Evaluation: Conducted thorough evaluations of model performance, demonstrating significant improvements in image quality over traditional methods.',
    ],
  },
  {
    id: 8,
    src: '/project-img/webportfolio1.png',
    title: 'Web portfolio',
    description:
      'A space-themed web portfolio showcasing my skills, experiences, and projects.',
    sourceUrl: '',
    githubUrl: 'https://github.com/giri-10/my-portfolio',
    technologyStack: [
      'Framer',
      'Tailwind CSS',
      'Three.JS',
      'Next.JS',
      'Typescript',
      'Aceternity UI',
      'Github',
    ],
    features: [
      'Utilised Three.JS for a 3D space-themed universe, allowing users to navigate through projects as if traveling through space.',
      'Dynamic content loading with Framer Motion for smooth, visually captivating transitions between portfolio sections.',
      'Integrated Vercel analytics for tracking visitor engagement.',
    ],
    challenges: [
      'Integrating 3D graphics without compromising site performance and load times.',
      'Designing an interesting user experience that balances creativity with usability, ensuring visitors can easily find and engage with content.',
    ],
    accomplishments: [
      'Component Reusability: Implemented reusable components to streamline future updates',
      'Responsive Implementation: Achieved a responsive layout adaptable to various screen sizes.​',
    ],
  },
  {
    id: 9,
    src: '/project-img/texteditor.png',
    title: 'GUI Text Editor',
    description:
      'A simple text editor application built using Java Swing, allowing users to create and edit text files.',
    sourceUrl: null,
    githubUrl: 'https://github.com/giri-10/Text-Editor',
    technologyStack: [
      'Java', 'Java Swing', 'AWT', "Java I/O",],
    features: [
      'Basic Text Operations: Supports essential functions like cut, copy, paste, and basic font customization.​',
      'User-Friendly Interface: Designed for simplicity, providing an intuitive environment for text editing.​',
      'Lightweight Application: Minimalistic design ensures quick and efficient performance.',    ],
    challenges: [
      'GUI Implementation: Developing a responsive and intuitive graphical user interface using Java Swing.​',
      'Functionality Integration: Ensuring seamless integration of text editing features within the GUI.',
    ],
    accomplishments: [
      'Enhanced Usability: Implemented features that cater to users seeking a straightforward text editing tool.​',
      'Code Organization: Structured codebase facilitates easy maintenance and future enhancements.​',
    ],
  },
];
