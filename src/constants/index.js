import {
  Salesforce,
  Soti,
  UCF,
  projectbest,
  SQL,
  PowerBi,
  dotnet,
  python,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  ETL,
  CSharp,
  SAAS,
  Snowflake,
  R,
  Tableau,
  RSS,
  CreditCard,
  PencilSketch,
  Diabetic,
  HospitalManagement,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "Python", icon: python },
  { title: "SQL", icon: SQL },
  { title: "Power BI", icon: PowerBi },
  { title: ".net", icon: dotnet },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Snowflake", icon: Snowflake },
  { name: "ETL", icon: ETL },
  { name: "Tableau", icon: Tableau },
  { name: "R", icon: R },
  { name: "SAAS", icon: SAAS },
  { name: "Rect JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "C#", icon: CSharp },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Academic Coach & Technical Contributor",
    company_name: "Project BEST | UCF",
    icon: projectbest,
    iconBg: "#000000",
    date: "May 2025 – Present",
    points: [
      "Redesigned the Project BEST website using WordPress, Gutenberg blocks, Bootstrap, and responsive design.",
      "Supported students with academic coaching and study strategies to enhance performance and retention."
    ],
  },
  {
    title: "Database Administrator (Migration Project)",
    company_name: "UCF CARD Services (PALS)",
    icon: UCF,
    iconBg: "#000000",
    date: "Apr 2025 – May 2025",
    points: [
      "Initiated documentation for migration from FileMaker Pro to Salesforce CRM, including data structure analysis and field mapping plan.",
      "Collaborated with the President of PALS to align Salesforce CRM setup with CARD’s automation and reporting goals."
    ],
  },  
  
  {
    title: "Software Developer",
    company_name: "Soti | Kerala | India",
    icon: Soti,
    iconBg: "#161329",
    date: "July 2023 - July 2024",
    points: [
      "Worked on accessibility enhancement tasks to ensure compliance with usability standards and improve user experience across across key modules",
      "Implemented custom branding support by building APIs and backend logic to define and store default and user-defined button styles for the company’s web-based products.",
      "Built backend logic to support certificate renewal configurations with a 100-year validity period, ensuring long-term platform stability and uninterrupted service.",
    ],
  },
  {
    title: "Salesforce Developer Intern",
    company_name: "Salesforce | Remote",
    icon: Salesforce,
    iconBg: "#161329",
    date: "July 2022 - Sep 2022",
    points: [
      "Developed Salesforce Apex classes, triggers, and Visualforce pages for automation.",
      "Integrated Salesforce with external APIs, reducing manual data entry errors by 30%.",
    ],
  },
];

export const projects = [
  {
    name: "Intelligent Resume Screening System",
    description:
      "Built an end-to-end ML pipeline to rank resumes by job fit using TF-IDF and skill scores. Deployed a Streamlit app with resume preview, sliders, and CSV/PDF downloads.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "NLP", color: "green-text-gradient" },
      { name: "Streamlit", color: "pink-text-gradient" },
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: " Tableau", color: "blue-text-gradient" }
    ],
    image: RSS,
    source_code_link: "https://github.com/panitakanaguduru/resume_screening_system",
  },
  {
    name: "Credit Card Fraud Detection Dashboard",
    description:
      "Developed a fraud detection dashboard with SQL-based ETL for efficient preprocessing and ML classifiers to enhance accuracy.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "SQL", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
      { name: "ML Models", color: "blue-text-gradient" },
    ],
    image: CreditCard,
    source_code_link: "https://github.com/panitakanaguduru/CreditCardFraudDetection",
  },
  {
    name: "Image Filter and Gif Generation",
    description:
      "Convert an input image to a pencil sketch and gif using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],

    image: PencilSketch,
    source_code_link: "https://github.com/panitakanaguduru/Image-Filter-GIF-Generator",
  },
  {
    name: "Diabetic Risk Prediction Models",
    description:
      "ML model that utilizes regression techniques to provide insights into Diabetic and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: Diabetic,
    source_code_link: "https://github.com/panitakanaguduru/Diabetes",
  },
  {
    name: "Hospital Management System",
    description:
      "Developed modules for patient registration, doctor scheduling, and appointments with real-time tracking to reduce conflicts.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MySql", color: "pink-text-gradient" },
      { name: "JWT", color: "blue-text-gradient" },
    ],
    image: HospitalManagement,
    source_code_link: "https://github.com/panitakanaguduru/Hospital-Management",
  },
];
