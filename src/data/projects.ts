// import IPLDashboardApp from '/images/ipldashboard.png';

export interface Project {
  date: string;
  title: string;
  description: string;
  technology: string;
  image: any;
  demo: string;
  sourcecode: string;
}

export const projects: Project[] = [
  {
    date: "25/05/2022",
    title: "IPL Dashboard",
    description:
      "A dashboard where the user can view the different IPL teams that have played matches between 2008 and 2021. The user can also view the details of all the matches played by a team in a specific year.",
    technology:
      "React, React Hooks, Spring Boot, Java Persistence API, AWS Elastic Beanstalk",
    // image: IPLDashboardApp,
    demo: "http://ipldashboard-env.eba-bbijaju7.us-west-2.elasticbeanstalk.com/",
    sourcecode: "https://github.com/sailakshmy/iplJavaReact",
  },
  // Add more projects here
]; 