export interface Experience {
  companyName: string;
  designation: string;
  technology: string;
  duration: string;
  jobDescription: string[];
}

export const experiences: Experience[] = [
  {
    companyName: "Synechron",
    designation: "Lead React Developer",
    technology: "NextJS, JavaScript, React.js, React Hooks,TypeScript, React Native, GraphQL",
    duration: "September 28,2023- Present",
    jobDescription: [
      "Spearheading front-end development projects as a Senior React Developer, utilizing extensive knowledge in React JS to build dynamic and scalable web components.",
      "Expanding expertise to React Native, enabling efficient development of cross-platform mobile applications with consistent codebases and enhanced user experiences.",
      "Innovating user interface performance through the design of optimized GraphQL calls in React, facilitating faster and more responsive interactions.",
      "Demonstrating mastery in React state management, ensuring seamless state transitions and data handling across complex application architectures.",
      "Collaborating with UI/UX design teams to accurately translate visual designs into functional code, focusing on creating engaging and user-friendly interfaces.",
      "Implementing comprehensive unit testing practices using Jest, contributing significantly to the stability and reliability of the application's codebase.",
      "Actively participating in quality assurance processes, identifying and resolving issues early in the development cycle to maintain high standards of software quality.",
      "Leading efforts in integrating NextJS for server-side rendering, boosting application performance and scalability.",
      "Engaging in continuous learning and application of emerging technologies, staying ahead of industry trends and bringing innovative solutions to development projects.",
      "Playing a pivotal role in team collaborations, sharing knowledge, and mentoring peers to foster a culture of technical excellence and shared learning.",
    ]
  },
  // Add more experiences here
]; 