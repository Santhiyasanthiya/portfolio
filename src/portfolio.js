import BookMyShow from "./Assets/BookMyShow.jpg"
import Diary from "./Assets/diary.png"
import Money from "./Assets/money.png"
import email from "./Assets/email.png"
import Redux from "./Assets/redux.png"

//I Would Highly Recommend You To Customize The Theme According To Your Taste.
export const globalStyles = {

    "--grad": "linear-gradient(315deg,#48a9fe,#00cdac)", // Use gradients only
    // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
    // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
    "--txtcolor": "#272341",
    "--p_color": "#00cdac",
    "--s_color": "#fff"
}

// Navigation Bar Name
export const navbar_name = "Santhiya"

// Main Page
export const main = {
    name: "Santhiya.K",
    doamin: "A self-taught developer with an interest in Computer Science.",
    resume: "https://drive.google.com/file/d/1bEMbW0WeorNpArpRdfEmbbh-K9yPAG9D/view?usp=sharing"
}

// AboutMe
export const aboutme = {
    imgLink: "https://pbs.twimg.com/media/FLuc7e7aUAcpyDm?format=jpg&name=small",
    p1: "Hey,My name is Santhiya. I seek to work in a competitive field and ready to accept the challenges, utilizing my skills would like to work with a highly esteemed company  which gives me a platform to use my expertise and  skills for mutual growth and  benefit of company and myself.",
    p2: "Born: 6 Dec 1997",
    p3:"Department: IT",
    p4:"Dip: Nursing",
    p5:"Nationality: Indian",
    p6:"Language: Tamil & English",
    p7:"City: Vellore, TamilNadu, India",
    p8:"I Started off my self-learning journey with online tutorials Google, YouTube, etc and took a step further and Enrolled in the GUVI IIT MADRAS Fullstack developer Program which involved extensive programming and real world projects. Later, I learned MERN Stack From Guvi and built an Website using React JS, Node, Express Js, MongoDB."
}

// Skills
export const whatido = {
    title: "Full Stack Development",

    details: ["Building responsive website using React",
        "Creating backend application in Node, Express",
        "Building Simple RESTful CRUD APIs",
        "Knowledge of Object-Oriented programming languages like JavaScript"],
    logos: [{
        name: "HTML5",
        iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
        id: "1"
    },
    {
        name: "CSS",
        iconifyClassName: "vscode-icons:file-type-css",
        id: "2"
    },
    {
        name: "Bootstrap",
        iconifyClassName: "devicon:bootstrap",
        id: "3"
    },
    {
        name: "JavaScript",
        iconifyClassName: "logos:javascript",
        id: "4"
    },
    {
        name: "ReactJS",
        iconifyClassName: "vscode-icons:file-type-reactjs",
        id: "5"
    },
    {
        name: "Material-UI",
        iconifyClassName: "simple-icons:mui",
    
        id: "6"
    },
    {
        name: "MySql",
        iconifyClassName: "logos:mysql-icon",

        id: "7"
    },
    {
        name: "MongoDB",
        iconifyClassName: "logos:mongodb",
        id: "8"
    },
    {
        name: "NodeJS",
        iconifyClassName: "logos:nodejs",
        id: "9"
    },
    {
        name: "ExpressJS",
        iconifyClassName: "skill-icons:expressjs-light",
        id: "10"
    },
    {
        name: "PostMan",
        iconifyClassName: "logos:postman-icon",
        id: "11"
    },
    {
        name: "AWS",
        iconifyClassName: "logos:aws",
        id: "12"
    }
   
    ]
}

// Project Details
const book =  BookMyShow;
const diary = Diary;
const money = Money;
const redux = Redux;

export const details = [{
    id: 1,
    title: "Book MyShow Clone",
    desc: "Ticket booking is a process of selecting and making reservations for the cinema in a particular theatre via the online source.",
    img: book,
    frontend: "https://github.com/Santhiyasanthiya/guvi-hackathon2-frontend",
    backend:"https://github.com/Santhiyasanthiya/guvi-hackathon2-backend",
    feature:"ReactJs, Bootstrap, MongoDB, NodeJS, Express ",
    link: "https://youtu.be/1x73l7V_Egk",
    deploy:"https://guvi-hackathon-frontend.vercel.app/"
    
},
{
    id: 2,
    title: "Diary manager app",
    desc: "Diary management entails scheduling and documenting each and every forthcoming meeting in a precise and timely manner.",
    img: diary,
    feature:"ReactJs, Bootstrap, MongoDB, NodeJS, Express ",
    frontend: "https://github.com/Santhiyasanthiya/Diary-Manager-frontend",
    backend:"https://github.com/Santhiyasanthiya/Diary-Manager-Backend",
    deploy:"https://diary-manager-frontend.vercel.app/"
},
{
    id: 3,
    title: "Money Manager Clone",
    desc: "Money Manager Web Application that will be useful for managing personal finances as easy as pie!",
    img: money,
    feature:"ReactJs, Bootstrap, MongoDB, NodeJS, Express",
    frontend: "https://github.com/Santhiyasanthiya/money-manager-frontend",
    backend:"https://github.com/Santhiyasanthiya/money-manager-backend",
    deploy:"https://playful-kelpie-719896.netlify.app/"
},
{
    id: 4,
    title: "Redux CRUD Operation",
    desc: "Creating Crud Operation using redux_toolkit !",
    img: redux,
    feature:"ReactJs, Bootstrap, Redux",
    frontend: "https://github.com/Santhiyasanthiya/Redux-practice",
    deploy:"https://redux-practice-rose.vercel.app/"
},
{
    id: 5,
    title: "Email Project",
    desc: "ReactJs, Bootstrap, MongoDB, NodeJS, Express",
    img: email,
    feature:"ReactJs, Material ui, nodejs ",
    frontend: "https://github.com/Santhiyasanthiya/email_project.git",
    backend:"https://github.com/Santhiyasanthiya/email-project_backend.git",
    deploy:"https://email-project.vercel.app/emails/inbox/"
},
]


// Social Media Links
export const links = ["https://www.linkedin.com/in/santhiya-k-4a8783242/",
    "https://github.com/Santhiyasanthiya",
    "mailto:santhiya30032@gmail.com",
    
    ]

