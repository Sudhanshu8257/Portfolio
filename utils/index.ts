import { Project, education, navLink, skill } from "@/types";

export const navLinks: navLink[] = [
  {
    label: "home",
    path: "/",
  },
  {
    label: "about me",
    path: "/about",
  },
  {
    label: "projects",
    path: "/projects",
  },
];
export const skillRay: skill[][] = [
  [
    {
      image: "/assets/icons/html.svg",
      label: "html",
    },
    {
      image: "/assets/icons/css.svg",
      label: "css",
    },
    {
      image: "/assets/icons/javascript.svg",
      label: "javascript",
    },
    {
      image: "/assets/icons/react.svg",
      label: "react",
    },
    {
      image: "/assets/icons/next.svg",
      label: "next",
    },
  ],
  [
    {
      image: "/assets/icons/typescript.svg",
      label: "typescript",
    },
    {
      image: "/assets/icons/mongo.svg",
      label: "mongoDb",
    },
    {
      image: "/assets/icons/node.svg",
      label: "node",
    },
    {
      image: "/assets/icons/express.svg",
      label: "express",
    },
  ],
  [
   {
      image: "/assets/icons/tailwind.svg",
      label: "tailwind",
    },
    {
      image: "/assets/icons/git.svg",
      label: "git",
    },
    {
      image: "/assets/icons/figma.svg",
      label: "figma",
    },
  ],
  [
    {
      image: "/assets/icons/redux.svg",
      label: "redux",
    },
    {
      image: "/assets/icons/firebase.svg",
      label: "firebase",
    },
  ],
];
export const skillMobRay: skill[][] = [
  [
    {
      image: "/assets/icons/html.svg",
      label: "html",
    },
    {
      image: "/assets/icons/css.svg",
      label: "css",
    },
    {
      image: "/assets/icons/javascript.svg",
      label: "javascript",
    },
  ],
  [
    {
      image: "/assets/icons/react.svg",
      label: "react",
    },
    {
      image: "/assets/icons/next.svg",
      label: "next",
    },
    {
      image: "/assets/icons/typescript.svg",
      label: "typescript",
    },
  ],
  [
    {
      image: "/assets/icons/tailwind.svg",
      label: "tailwind",
    },
    {
      image: "/assets/icons/redux.svg",
      label: "redux",
    },
    {
      image: "/assets/icons/firebase.svg",
      label: "firebase",
    },
  ],
  [
    {
      image: "/assets/icons/mongo.svg",
      label: "mongoDb",
    },
    {
      image: "/assets/icons/node.svg",
      label: "node",
    },
    {
      image: "/assets/icons/express.svg",
      label: "express",
    },

  ],
  [
    {
      image: "/assets/icons/git.svg",
      label: "git",
    },
    {
      image: "/assets/icons/figma.svg",
      label: "figma",
    },  
  ],
];
export const selectedProjects: Project[] = [
  {
    name: "Converse AI Chatbot with Gemini API",
    image: "/assets/project-images/chatbot.png",
    shortDescription:
      "Full-stack AI chatbot application built with MERN stack and integrated Gemini API.",
    deployedLink: "https://converse-chatbot.netlify.app/",
    githubLink: "https://github.com/Sudhanshu8257/converse",
    detailedDescription: [
      "Developed using the MERN (MongoDB, Express.js, React, Node.js) stack for a robust and scalable architecture.",
      "Implemented user authentication with JWT for secure access to chatbot features and personalized experiences.",
      "Ensured a well-organized file structure for maintainability and ease of collaboration.",
      "Integrated Gemini API for advanced AI capabilities, enabling natural language processing and intelligent responses.",
      "Focused on creating an intuitive user interface and smooth user experience.",
      "Optimized frontend using Next.js with server-side rendering (SSR), achieving a PageSpeed Insights score of 90+"
    ],
    skills: [
      {
        image: "/assets/icons/react.svg",
        label: "React.js",
      },
      {
        image: "/assets/icons/mongo.svg",
        label: "MongoDB",
      },
      {
        image: "/assets/icons/node.svg",
        label: "Node.js",
      },
      {
        image: "/assets/icons/express.svg",
        label: "Express.js",
      },
      {
        image: "/assets/icons/javascript.svg",
        label: "JavaScript",
      },
    ],
  },
  {
    name: "Stack Flow - Stack Overflow Clone",
    image: "/assets/project-images/stackflow.png",
    shortDescription:
      "Full-stack Q&A platform with upvoting, filtering, and optimal rendering.",
    deployedLink: "https://stack-flow-mu.vercel.app/",
    githubLink: "https://github.com/Sudhanshu8257/StackFlow",
    detailedDescription: [
      "Built using Clerk for authentication, Shadcn for UI, and MongoDB for data storage.",
      "Leveraged Next.js for efficient server-side rendering and improved performance.",
      "Implemented advanced features such as upvoting, downvoting, and filtering.",
      "Ensured an optimal user experience through thoughtful UI/UX design.",
    ],
    skills: [
      {
        image: "/assets/icons/react.svg",
        label: "react",
      },
      {
        image: "/assets/icons/mongo.svg",
        label: "mongodb",
      },
      {
        image: "/assets/icons/next.svg",
        label: "next",
      },
      {
        image: "/assets/icons/typescript.svg",
        label: "typescript",
      },
      {
        image: "/assets/icons/tailwind.svg",
        label: "tailwind",
      },
    ],
  },
  {
    name: "Real-Time Full Stack Chat App",
    image: "/assets/project-images/whisperwire.png",
    shortDescription:
      "Real-time chat app with authentication, messaging, and clean UI.",
    deployedLink: "https://whisperwire.vercel.app/",
    githubLink: "https://github.com/Sudhanshu8257/whisperwire",
    detailedDescription: [
      "Developed using Next.js, React, and Tailwind CSS for a modern frontend.",
      "Implemented Firebase for real-time messaging and user authentication.",
      "Integrated Shadcn UI and Clerk for a seamless and secure user experience.",
      "Currently expanding functionality with ongoing development efforts.",
    ],
    skills: [
      {
        image: "/assets/icons/next.svg",
        label: "next",
      },
      {
        image: "/assets/icons/react.svg",
        label: "react",
      },
      {
        image: "/assets/icons/typescript.svg",
        label: "typescript",
      },
      {
        image: "/assets/icons/tailwind.svg",
        label: "tailwind",
      },
      {
        image: "/assets/icons/firebase.svg",
        label: "firebase",
      },
    ],
  },
];
export const projects: Project[] = [
  {
    name: "Converse AI Chatbot with Gemini API",
    image: "/assets/project-images/chatbot.png",
    shortDescription:
      "Full-stack AI chatbot application built with MERN stack and integrated Gemini API.",
    deployedLink: "https://converse-chatbot.netlify.app/",
    githubLink: "https://github.com/Sudhanshu8257/converse",
    detailedDescription: [
      "Developed using the MERN (MongoDB, Express.js, React, Node.js) stack for a robust and scalable architecture.",
      "Implemented user authentication with JWT for secure access to chatbot features and personalized experiences.",
      "Ensured a well-organized file structure for maintainability and ease of collaboration.",
      "Integrated Gemini API for advanced AI capabilities, enabling natural language processing and intelligent responses.",
      "Focused on creating an intuitive user interface and smooth user experience.",
      "Optimized frontend using Next.js with server-side rendering (SSR), achieving a PageSpeed Insights score of 90+"
    ],
    skills: [
      {
        image: "/assets/icons/next.svg",
        label: "Next.js",
      },
      {
        image: "/assets/icons/react.svg",
        label: "React.js",
      },
      {
        image: "/assets/icons/mongo.svg",
        label: "MongoDB",
      },
      {
        image: "/assets/icons/node.svg",
        label: "Node.js",
      },
      {
        image: "/assets/icons/express.svg",
        label: "Express.js",
      },
      {
        image: "/assets/icons/javascript.svg",
        label: "JavaScript",
      },
    ],
  },
  {
    name: "Stack Flow - Stack Overflow Clone",
    image: "/assets/project-images/stackflow.png",
    shortDescription:
      "Full-stack Q&A platform with upvoting, filtering, and optimal rendering.",
    deployedLink: "https://stack-flow-mu.vercel.app/",
    githubLink: "https://github.com/Sudhanshu8257/StackFlow",
    detailedDescription: [
      "Built using Clerk for authentication, Shadcn for UI, and MongoDB for data storage.",
      "Leveraged Next.js for efficient server-side rendering and improved performance.",
      "Implemented advanced features such as upvoting, downvoting, and filtering.",
      "Ensured an optimal user experience through thoughtful UI/UX design.",
    ],
    skills: [
      {
        image: "/assets/icons/react.svg",
        label: "react",
      },
      {
        image: "/assets/icons/mongo.svg",
        label: "mongodb",
      },
      {
        image: "/assets/icons/next.svg",
        label: "next",
      },
      {
        image: "/assets/icons/typescript.svg",
        label: "typescript",
      },
      {
        image: "/assets/icons/tailwind.svg",
        label: "tailwind",
      },
    ],
  },
  {
    name: "Real-Time Full Stack Chat App",
    image: "/assets/project-images/whisperwire.png",
    shortDescription:
      "Real-time chat app with authentication, messaging, and clean UI.",
    deployedLink: "https://whisperwire.vercel.app/",
    githubLink: "https://github.com/Sudhanshu8257/whisperwire",
    detailedDescription: [
      "Developed using Next.js, React, and Tailwind CSS for a modern frontend.",
      "Implemented Firebase for real-time messaging and user authentication.",
      "Integrated Shadcn UI and Clerk for a seamless and secure user experience.",
      "Currently expanding functionality with ongoing development efforts.",
    ],
    skills: [
      {
        image: "/assets/icons/next.svg",
        label: "next",
      },
      {
        image: "/assets/icons/react.svg",
        label: "react",
      },
      {
        image: "/assets/icons/typescript.svg",
        label: "typescript",
      },
      {
        image: "/assets/icons/tailwind.svg",
        label: "tailwind",
      },
      {
        image: "/assets/icons/firebase.svg",
        label: "firebase",
      },
    ],
  },
  {
    name: "Full Stack Spotify Clone",
    image: "/assets/project-images/spotify.png",
    shortDescription:
      "Seamless Spotify clone with music playback, Stripe integration for premium access.",
    deployedLink: "https://spotify-clone-swart-eight.vercel.app/",
    githubLink: "https://github.com/Sudhanshu8257/spotify-clone",
    detailedDescription: [
      "Developed using Next.js, Shadcn UI, and Tailwind CSS for a visually appealing frontend.",
      "Integrated Supabase for data storage and React for building interactive user interfaces.",
      "Implemented Stripe for premium user access to advanced features.",
      "Focused on delivering a seamless and enjoyable UI/UX experience.",
    ],
    skills: [
      {
        image: "/assets/icons/next.svg",
        label: "next",
      },
      {
        image: "/assets/icons/typescript.svg",
        label: "typescript",
      },
      {
        image: "/assets/icons/tailwind.svg",
        label: "tailwind",
      },
      {
        image: "/assets/icons/supabase.svg",
        label: "supabase",
      },
      {
        image: "/assets/icons/git.svg",
        label: "Git",
      },
    ],
  },
  {
    name: "Full Stack Pokedex App",
    image: "/assets/project-images/pokedex.png",
    shortDescription:
      "Comprehensive Pokedex app with search, favorites, and Firebase authentication.",
    deployedLink: "https://pokedex2-0-six.vercel.app/",
    githubLink: "https://github.com/Sudhanshu8257/Pokedex2.0",
    detailedDescription: [
      "Developed with React, React Router DOM, and Firebase for a responsive frontend.",
      "Integrated MUI, React Redux, and React Query for state management and enhanced functionality.",
      "Implemented Firebase authentication for user security.",
      "Utilized Firestore as the backend to optimize performance.",
    ],
    skills: [
      {
        image: "/assets/icons/react.svg",
        label: "react",
      },
      {
        image: "/assets/icons/redux.svg",
        label: "redux",
      },
      {
        image: "/assets/icons/figma.svg",
        label: "Figma",
      },
      {
        image: "/assets/icons/css.svg",
        label: "css",
      },
      {
        image: "/assets/icons/firebase.svg",
        label: "firebase",
      },
    ],
  },
  {
    name: "Simple React Calculator App",
    image: "/assets/project-images/calculator.png",
    shortDescription:
      "Responsive calculator app with basic arithmetic operations.",
    deployedLink: "https://calculator-nine-nu-12.vercel.app/",
    githubLink: "https://github.com/Sudhanshu8257/calculator",
    detailedDescription: [
      "Developed using React to create a single-page application.",
      "Implemented features for addition, subtraction, multiplication, and deletion.",
      "Prioritized a clean and responsive UI/UX design for enhanced user experience.",
    ],
    skills: [
      {
        image: "/assets/icons/html.svg",
        label: "html",
      },
      {
        image: "/assets/icons/css.svg",
        label: "css",
      },
      {
        image: "/assets/icons/react.svg",
        label: "react",
      },
    ],
  },
];
export const educationDetails: education[] = [
  {
    title: "BCA",
    date: "2021-2024",
    platform: "SS.Jain.Subodh",
    link: "https://www.subodhpgcollege.com/",
  },
  {
    title: "Senior Secondary",
    date: "2021",
    platform: "Maheshwari Public School",
    link: "https://www.mpsjaipur.com/",
  },
  {
    title: "DSA and Algorithms",
    date: "2023",
    platform: "Coursera",
    link: "https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/",
  },
  {
    title: "React Js",
    date: "2023",
    platform: "Coursera",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
  },
];
