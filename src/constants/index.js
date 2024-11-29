import { Prompt, Software, Competitive, Computational } from "@/assets";

const words = [
    "Computational Problem Solver. ",
    "Competitive programmer. ",
    "Prompt Engineer. ",
    "Software Engineer. ",
];

const socialsData = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ritamsaha137",
        icon: "bx bxl-linkedin"
    },
    {
        name: "GitHub",
        url: "https://github.com/Ritam369",
        icon: "bx bxl-github"
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/r_i_t_a_m_s_a_h_a/profilecard/?igsh=OWFuNDU2cmd3ZmU0",
        icon: "bx bxl-instagram-alt"
    },
    {
        name: "Twitter",
        url: "https://x.com/saharitam963",
        icon: "bx bxl-twitter"
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100080013277806&mibextid=ZbWKwL",
        icon: "bx bxl-facebook"
    }
];

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    // {
    //     id: "education",
    //     title: "Education",
    // },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Computational Problem Solver",
        icon: Computational,
    },
    {
        title: "Competitive programmer",
        icon: Competitive,
    },
    {
        title: "Prompt Engineer",
        icon: Prompt,
    },
    {
        title: "Software Engineer",
        icon: Software,
    },

];

const techStack = ["C", "Cpp", "Python", "Java", "Chatgpt", "Gemini", "Notion"].map(name => ({
    name,
    imageUrl: `https://go-skill-icons.vercel.app/api/icons?i=${name.toLowerCase()}`
}));


const home_page_text = "I'm a passionate second-year Computer Science Engineering student at Bengal Institute of Technology, where I lead the DSA (Data Structures and Algorithms) and CP (Competitive Programming) domain at Google Developer Student Clubs (GDSC) on campus. In this role, I mentor fellow students, organize coding bootcamps, and lead hands-on workshops to help peers master complex algorithms and optimize their problem-solving skills. I actively contribute to fostering a collaborative learning environment where students can excel in coding competitions like Codeforces, LeetCode, and HackerRank. My journey is driven by a relentless curiosity for software development, algorithmic problem-solving, and empowering others to unlock their potential in the world of tech"

const about_page_text = "I am currently pursuing my Bachelor's degree, where I am deeply passionate about software development, web development, and mobile app development. My interests also extend to the exciting fields of cybersecurity and Web3 technologies. I am continuously exploring new ways to enhance my skills and stay at the forefront of technological advancements. Whether it's building responsive websites, developing secure applications, or delving into decentralized solutions, I am committed to expanding my expertise and contributing to innovative projects. My goal is to become a versatile developer who can navigate both traditional and cutting-edge technologies to create impactful solutions."

const Work_page_text = "As a fresher in the field, I have yet to gain industrial experience but am actively working on personal and academic projects, driven by a strong eagerness to learn and grow .I serve as the Lead of the Data Structures and Algorithms & Competitive Programming domain for Google Developers Group on Campus at Bengal Institute of Technology, where I organize and lead coding workshops, interactive sessions, and theme-based contests to cultivate foundational skills and a passion for coding among students. In this role, I've focused on making learning engaging and accessible, fostering a collaborative atmosphere and guiding junior peers. Additionally, as the Campus Ambassador for E-Summit '24 at Jadavpur University, I am dedicated to enhancing outreach and connecting students with unique opportunities in entrepreneurship and innovation."


const Email = "ritamsaha75579@gmail.com";


export {
    socialsData,
    words,
    navLinks,
    services,
    techStack,
    home_page_text,
    about_page_text,
    Work_page_text,
    Email
};

