import { ExperienceCardProps } from "../site-specific/ExperienceCard";
import { constants } from "./constants";


export const experiences: ExperienceCardProps[] = [
    {
        company: "Amazon",
        title: "SDE Intern (May - August 2022)",
        description: "Worked for the AWS Investments team to manage the system to track AWS credits given to companies        ",
        imageUrl: process.env.PUBLIC_URL + "awsLogo.webp"
    },
    {
        company: "Rensselaer Polytechnic Institute",
        title: "Research Assistant (September 2021 - )",
        description: "Implementing Bayesian machine learning engine for process modeling inside a larger smart manufacturing platform used by many industrial manufacturers",
        imageUrl: process.env.PUBLIC_URL + "rpiLogo.png"
    },
    {
        company: "theCoderSchool",
        title: "Instructor (June 2021 - )",
        description: "\
            Created and facilitated a robotics program for students \n\
            Instructed students with computer science problems and questions\
        ",
        imageUrl: process.env.PUBLIC_URL + "theCoderSchoolLogo.png"
    },
    {
        company: "Oasis",
        title: "Software Engineering Intern (May - August 2021)",
        description: "\
            Added meditation program features on main page \n\
            Validated codebase and resolved all errors \
        ",
        imageUrl: process.env.PUBLIC_URL + "oasisLogo.jpeg"
    },
    {
        company: "SRI International",
        title: "Robotics Research Intern (July - September 2019)",
        description: "\
            Created simulation environment for construction robot\n\
            Used distance sensor to implement collision avoidance capabilities on the construction robot\
        ",
        imageUrl: process.env.PUBLIC_URL + "sriLogo.jpeg"
    }
];

export const educationList: ExperienceCardProps[] = [
    {
        company: "Rensselaer Polytechnic Institute",
        title: "Computer Science",
        description: `[UL]${constants.bullet}\n\
            - Courses: Data Structures (Fall 2020), Computer Organization (Spring 2021), Discrete Math (Spring 2021),  Multivariable Calculus and Linear Algebra (Spring 2021), Algorithms (Fall 2021), Probability Theory and Statistics (Fall 2021), Network Science (Fall 2021), Machine Learning from Data (Spring 2022)\n\
            - Member of Upsilon Pi Epsilon (International Computing Honor Society)\n\
            - Junior at Rensselaer Polytechnic Institute (Graduation in Winter 2023); GPA: 3.8\
        `,
        imageUrl: process.env.PUBLIC_URL + "rpiLogo.png"
    }
];

export const introBlurb: string = "I am passionate about machine learning, artificial intelligence,\
    natural language processing, reinforcement learning and computer vision. I am currently working on my\
    undergraduate degree in Computer Science at the Rensselear Polytechnic Institute. I want to be able to\
    make contributions to the field that will help people and\
    advance science.\
";