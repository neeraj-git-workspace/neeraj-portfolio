/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Neeraj Kumar",
  title: "Hi all, I'm Neeraj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Spring Boot and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1imnDw9rQ2RS_N-El-5-DgeyqS1d45oRR/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/neeraj-git-workspace",
  linkedin: "https://www.linkedin.com/in/neeraj-kumar-50abb0196/",
  gmail: "neeraj.kumar.mca24@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Backend Development Using Node.js, Express.js and MongoDB"),
    emoji(
      "⚡ Java Development using Java,Spring Boot and postgreSQL"
    ),
    emoji(
      " ⚡ Manual + Automation Testing, API Testing, Load + Performance Testing using Jmeter, Postman, CloudRunner, Swagger, Selenium"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-power-off"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "VIT University, Vellore",
      logo: require("./assets/images/vitLogo.png"),
      subHeader: "Master of Computer Application",
      duration: "July 2022 - June 2024",
      desc: "Courses",
      descBullets: [
        "Data Science, Machine Learning, Python, Soft Computing, R programming, Statistics",
        "Java, Data Structure, Computer Networking, Operating System, Cloud Computing, Database Management, Software Engineering"
      ]
    },
    {
      schoolName: "ST. Xavier's College, Ranchi",
      logo: require("./assets/images/XavierRanchi.png"),
      subHeader: "Bachelor of Computer Application",
      duration: "July 2018 - August 2021",
      desc: "Got 8+ CGPA",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Salesqueen Software",
      companylogo: require("./assets/images/salesqueenLogo.jpg"),
      date: "October 2023 – April 2024",
      desc: "",
      descBullets: [
        "Executed the creation of interactive web application screen flows including Dashboard, Login UI, and Registration page",
        "Engineered an intuitive screen flow navigation system incorporating custom icons and clear headers",
        "Bootstrap, jQuery, Javascript"
      ]
    },
    {
      role: "Test Engineer",
      company: "Infosys",
      companylogo: require("./assets/images/infosys.jpg"),
      date: "Feb 2021 – Feb 2022",
      descBullets: [
        "API Testing, Performance Testing, Load Testing and Regression Testing",
        "Presentation and demonstration of product to the client",
        "Team collaboration to facilitate successful project completion",
        "Postman, Jmeter, Cloud Runner, Swagger, Selenium, Manual Testing"
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "",
  projects: [
    {
      //image: require("./assets/images/"),
      projectName: "MERN Task Manager",
      projectDesc: "Architected user-friendly screen flows such as Sign up, Login, and UI for logged tasks, Developed the functionalities to add, update and delete tasks.",
      footerLink: [
        {
          name: "Github Link",
          url: "https://github.com/neeraj-git-workspace/task-manager.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Bookstore Management with chatbot",
      projectDesc: "Tech Used :-Python,Django, Speech Recognition Library, ChatBot API, Postman. Deployed in Azure Cloud. Voice Search and Book Recommendation Available. Integrated Chatbot.",
      footerLink: [
        {
          name: "Github link",
          url: "https://github.com/neeraj-git-workspace/django_ecommerce_boilerplate-main.git"
        }
      ]
    },
    {
      projectName: "Customer churn prediction in Telecommunication",
      projectDesc: "Applied predictive models using the IBM customer churn data set containing data of 7500 customers, leveraging machine learning algorithms to forecast customer churn, enabling customer retention strategies and reducing churn",
      footerLink: [
        {
          name: "Github link",
          url: "https://github.com/neeraj-git-workspace/Customer-Churn-Prediction-Using-Data-Mining-main.git"
        }
      ]
    },
    {
      projectName: "Medibuddy Smart Disease predictor",
      projectDesc: "Spearheaded the development of a cutting-edge website leveraging predictive analytics to detect breast cancer, diabetes, heart disease, kidney disease, malaria, and pneumonia",
      footerLink: [
        {
          name: "Github link",
          url: "https://github.com/neeraj-git-workspace/Medibuddy-Smart-Disease-Predictor-main.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "J.P. Morgan - Software Engineering Job Simulation",
      subtitle:
        "Resolved broken files in the repository, ensuring proper functioning of the web application; Developed and implemented a live graph feature utilizing J.P. Morgan Chase's Perspective library to enhance data visualization for traders.",
      image: require("./assets/images/forage.png"),
      imageAlt: "J.P Morgan by Forage Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_aXfAKkYXv6XH8QFSr_1711648822527_completion_certificate.pdf"
        }
      ]
    },
    {
      title: "Backend Development and APIs",
      subtitle:
        "Completed the certification on Backend Development using Node.js, Express.js, MongoDB and Mongoose",
      image: require("./assets/images/freeCodeCamp.png"),
      imageAlt: "FreeCodeCamp Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://freecodecamp.org/certification/fccccde4bfe-479f-45d0-b487-5afaf0db720b/back-end-development-and-apis"
        }
      ]
    },

    {
      title: "Become a RESTful API Developer",
      subtitle: "Completed the certification on RESTful API Development through LikedIn Learning. In this Learning path, I learned about REST APIs, Web Security- OAuth and OpenID, API Testing and Validation",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "LinkedIn Learning Logo",
      footerLink: [
        {name: "Certification", 
        url: "https://www.linkedin.com/learning/certificates/4d64efd0d353d464d213a5224b2776d6ba887707a00e6e75dc670c5af6863f25"},
        
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  resumeLink: "https://drive.google.com/file/d/1imnDw9rQ2RS_N-El-5-DgeyqS1d45oRR/view?usp=sharing",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open for Opportunities, Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 7321955257",
  email_address: "neeraj.kumar.mca24@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
