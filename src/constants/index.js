import { 
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  // diggajCoder
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiMongoose,
  SiExpress,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMicrosoftazure,  
  
} from "react-icons/si";

import {
  FaHardHat,  
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import { DiCss3, DiMsqlServer } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1yphU2GgT1g7RY_CgW7LFjjIEEsVIZbR-/view?usp=sharing";
export const repoLink = "https://github.com/ydvishu";

export const callToAction = "https://www.linkedin.com/in/ishu-yadav-b43892223/";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },  
  {
    id: "projects",
    title: "Projects",
  }, 
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: devfolio,
    title: "Indian Institute of Technology, Ropar",
    degree: "Bachelor of Technology",
    duration: "December 2021 - May 2025",
    content1: "Major: Chemical Engineering",
    
  },
 
];




export const skills = [
  {
    title: "Programming Languages",
    items: [      
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-3",
        icon: SiCplusplus,
        name: "C++",
      },      
      
      {
        id: "pl-7",
        icon: SiC,
        name: "C",
      },
      {
        id: "pl-8",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-9",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-10",
        icon: SiJavascript,
        name: "JavaScript",
      },      
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [
      {
        id: "f-1",
        icon: SiDjango,
        name: "Django",
      },      
      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },            
    ],
  },
  {
    title: "Tools",
    items: [      
      
      {
        id: "t-3",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-4",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-5",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-6",
        icon: AiFillGithub,
        name: "GitHub",
      },      
      {
        id: "t-8",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-9",
        icon: SiVite,
        name: "ViteJS",
      },
    ],
  },
];

export const experiences = [
  {
    organisation: "Diggaj Coder, India",
    //  logo: diggajCoder,
    // link: "https://www.oracle.com/in/",
    positions: [
      {
        title: "Full Stack Developer Internship",
        duration: "Jul 2024 - Present",
        content: [
          {
            text: "Led the development of HR management platform",            
          },
          {
            text: "Utilizing the MERN stack to deliver a highly responsive and user-friendly interface. Emphasized clean coding practices by structuring router files for improved readability and long-term maintainability."
          },
          {
            text: "Integrated the React.js front-end with Node.js back-end APIs, ensuring secure and efficient data handling. Leveraged version control to streamline code management and perform thorough bug resolution."
          }
        ],
      },
     
    ],
  },
  
 
];



export const projects = [
  {
    id: "project-1",
    title: "VideoHub",
    github: "https://github.com/ydvishu/VideoHub_Backend",
    github: "https://github.com/ydvishu/VideoHub_Frontend",
    // link: "https://comicify-ai.vercel.app/",
    image: comicify_ai,
    content:
      "It is a complete video hosting website similar to youtube with all the features like login, signup, upload video, like, dislike, comment, reply, subscribe, unsubscribe, and many more. Project uses all standard practices like JWT, bcrypt, access tokens, refresh Tokens and many more.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },
      {
        id: "icon-7",
        icon: SiMongodb,
        name: "MongoDB"
      },
      {
        id: "icon-3",
        icon: SiExpress,
        name: "Express.js"
      },
      {
        id: "icon-4",
        icon: SiNodedotjs,
        name: "Node.js"
      },
      {
        id: "icon-5",
        icon: SiMongoose,
        name: "Mongoose"
      },
    ],
  },
  {
    id: "project-2",
    title: " Continuing Education and Outreach Portal | Affiliated with IIT Ropar",
    github: "https://github.com/TuhinanshuModgil/CEOE_website",
    // link: "https://green-trust-fantom.netlify.app/",
    image: greentrust,
    content:
      "Designed and developed a responsive web portal for IIT Ropar’s using React and Tailwind CSS, facilitating course browsing, announcements, registration, and certificate verification. Built an admin dashboard with comprehensive CRUD functionality, real-time updates, and robust data validation, while integrating course analytics and visualizations using Chart.js to drive insights on user engagement and registration trends.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "TailwindCSS"
      },                  
      {
        id: "icon-6",
        icon: SiChartdotjs,
        name: "Chart.js"
      },
    ],
  },
  {
    id: "project-3",
    title: "News Aggregator",
    github: "https://github.com/chopra-prisha/News-Aggregator",
    // link: "https://devfolio.co/projects/chargeswap-3527",
    image: chargeswap,
    content:
      " Developed an interactive, swipeable news feed with React.js and Tailwind CSS, featuring upvote functionality and 'View Full Article' options for improved user engagement. Created a Python-based web scraping tool using BeautifulSoup4 to aggregate and store tech news, with automatic article summarization via Groq API and Llama 3B model.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-3",
        icon: SiPython,
        name: "Python"
      },
      {
        id: "icon-4",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },     
    ],
  },
  {    
    id: "project-5",
    title: "Center of Research for Energy Efficiency and Decarbonization Website | Affiliated with IIT Ropar",
    github: "https://github.com/TuhinanshuModgil/CREED_website",
    link: "https://iitrpr.ac.in/creed",
    image: recruitment,
    content:
      "Designed and developed the static website of CREED IIT Ropar, under the guidance of Dr. Manigandan",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiFigma,
        name: "Figma"
      },
      {
        id: "icon-3",
        icon: SiVite,
        name: "Vite"
      },
      {
        id: "icon-4",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      }      
    ],
  },
         
];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "Chemical Engineering Society, IIT Ropar",
    title: "Vice President",
    duration: "August 2023 - August 2024",
    content: [
      {
        text: " Led a team of 13 members for handling social media, content writing, poster making, club’s website, outreach, etc",
      },
      {
        text: " Effectively organized and coordinated significant events such as the Chem-Quiz, Mixer 2023, and Cheers 2023.",
      },
    ],
    logo: devfolio,
  },
  {
    organisation: "Raavi Hostel, Mess, IIT Ropar",
    title: "Representative",
    duration: "August 2022 - August 2024",
    content: [
      {
        text: "Managed hospitality, ensuring health, hygiene, and a welcoming environment for 3000+ individuals",
        link: "",
      },      
    ],
    logo: devfolio,
  },
  {
    organisation: "ESportZ Gaming club, IIT Ropar",
    title: "Coordinator",
    duration: "December 2022 - August 2023",
    content: [
      {
        text: " Arranged and led diverse sessions (Revanche), workshops, and panel discussions with 11 coordinators, collaborated with other IITs for successful partnerships, and actively contributed to social media initiatives.",
        link: "",
      },      
    ],
    logo: devfolio,
  },
  {
    organisation: "Institute Student Mentorship Programme, IIT Ropar",
    title: "Mentor",
    duration: "July 2023 - August 2024",
    content: [
      {
        text: "Effectively mentored and managed 6 individuals as an ISMP Mentor, coordinating sessions and overseeing program activities.",        
      },
    ],
    logo: devfolio,
  },
  {
    organisation: "Career Development and Placement Cell, Media Outreach Team",
    title: "Coordinator",
    duration: "January 2022 - August 2023",
    content: [
      {
        text: "Organized the seasons, worked on the placement brochure, and handled email correspondence.",
        // link: "https://www.youtube.com/watch?v=uA-Yrk6bVDc",
      },      
    ],
    logo: devfolio,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/ishu-yadav-b43892223/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/ydvishu",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:raoishu5600@gmail.com",
  },    
];

export const aboutMe = {
    name: "Ishu Yadav",
    tagLine: "Final year undergrad at Indian Institute of Technology, Ropar | ex-Full Stack Intern @Diggaj Coder",
    intro: "Software Developer from India who is either busy improving his craft or pondering over the next big idea."
}
