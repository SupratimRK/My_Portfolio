import { Prompt, Software, Competitive, Computational } from "@/assets";

const words = [
    "Software Developer",
    "Problem Solver",
    "MERN Stack Developer",
    "Context-Prompt Engineer",
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
    {
        id: "education",
        title: "Education",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Problem Solving & Algorithms",
        icon: Computational,
        description: "Expert in data structures, algorithms, and computational problem-solving with strong analytical thinking."
    },
    {
        title: "Competitive Programming",
        icon: Competitive,
        description: "Active competitive programmer with experience in coding contests and algorithmic challenges."
    },
    {
        title: "AI & Prompt Engineering",
        icon: Prompt,
        description: "Skilled in AI prompt design, optimization, and working with large language models and AI tools."
    },
    {
        title: "Full-Stack Development",
        icon: Software,
        description: "Proficient in modern web technologies including MERN stack, responsive design, and scalable applications."
    },
];

const techStack = ["C", "Java", "Python", "html", "css", "js", "nodejs", "Expressjs", "React", "Mysql", "Mongodb", "VScode", "Git", "Github", "Ubuntu", "Notion"].map(name => ({
    name,
    imageUrl: `https://go-skill-icons.vercel.app/api/icons?i=${name.toLowerCase()}`
}));


const home_page_text = "A 3rd-year Computer Science Engineering student at Techno Bengal Institute of Technology with a strong passion for problem-solving, algorithms, and emerging technologies. My journey has been shaped by exploring the depth of coding, AI, and innovation while continuously striving to create meaningful impact through technology. I bring with me valuable past experiences as the Lead of DSA and CP at GDG on Campus BIT and as a Campus Ambassador for E-Summit'24, Jadavpur University. These roles have helped me develop leadership, mentorship, and collaboration skills while working with diverse teams and communities. Through my leadership roles and project experience, I have developed strong collaboration skills and a commitment to mentoring others in the tech community."

const about_page_text = "I am a dedicated Computer Science Engineering student with a strong foundation in software development, problem-solving, and modern web technologies. My expertise spans across full-stack development using the MERN stack, competitive programming, and emerging technologies like AI and prompt engineering. I am passionate about creating efficient, scalable solutions and continuously expanding my technical knowledge to stay at the forefront of technological innovation."

const Work_page_text = "As a fresher in the field, I have yet to gain industrial experience but am actively working on personal and academic projects, driven by a strong eagerness to learn and grow .I serve as the Lead of the Data Structures and Algorithms & Competitive Programming domain for Google Developers Group on Campus at Bengal Institute of Technology, where I organize and lead coding workshops, interactive sessions, and theme-based contests to cultivate foundational skills and a passion for coding among students. In this role, I\'ve focused on making learning engaging and accessible, fostering a collaborative atmosphere and guiding junior peers. Additionally, as the Campus Ambassador for E-Summit '24 at Jadavpur University, I am dedicated to enhancing outreach and connecting students with unique opportunities in entrepreneurship and innovation."


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

