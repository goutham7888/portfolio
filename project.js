const projects = {
    transcrypt: {
        name: "TransCrypt – Secure File Transfer System",
        image: "post11.png",
        description: "My project is TransCrypt, a secure file transfer system developed during my cybersecurity internship at Ashtaksha Labs \n Problem we are tried solve from this project is In many organizations, sensitive files are shared over networks. If these files are not protected, they can be tempered, modified, or accessed by unauthorized users. My project focuses on securely transferring those files while ensuring confidentiality, integrity, and authentication. Objective The main goal of this project is to: Secure files during transmission Ensure only authorized users can upload and download files Prevent data tampering and unauthorized access",
        technologies: ["Python", "Flask", "MySQL", "AES", "RSA", "SSL/TLS"]
    },

    chatbot: {
        name: " AI Chatbot",
        image: "chatbot.jpg",
        description: "An intelligent AI-powered chatbot web application developed using Spring Boot for backend services and HTML, CSS, and JavaScript for the frontend interface. The chatbot communicates through RESTful APIs to process user queries and deliver real-time responses efficiently.The system is designed with a scalable architecture where the backend handles business logic, API requests, and AI integration, while the frontend provides a clean and responsive user experience. This project demonstrates strong skills in full-stack development, API design, and backend performance optimization.",
        technologies: ["Java", "SpringBoot", "HTML", "CSS" , "RESTfull APIs"]
    },

    aiassistant: {
        name: "Personal Portfolio Website",
        image: "portfolio_page1.png",
        description: "A fully responsive personal portfolio website developed using HTML, CSS, and JavaScript to showcase my projects, skills, and professional journey. The website features a clean user interface with smooth navigation and interactive elements, providing visitors with an engaging browsing experience.The project includes dynamic sections such as project showcases, contact forms, and smooth scrolling effects, demonstrating strong fundamentals in front-end development and web design principles. It is optimized for performance and works seamlessly across desktop and mobile devices..",
        technologies: ["HTML", "CSS", "Java Script"]
    }
};

// Get project name from URL
const params = new URLSearchParams(window.location.search);
const projectKey = params.get("project");

const project = projects[projectKey];

if(project){
    document.getElementById("projectImage").src = project.image;
    document.getElementById("projectName").textContent = project.name;
    document.getElementById("projectDescription").textContent = project.description;

    const techList = document.getElementById("projectTech");
    project.technologies.forEach(tech => {
        const li = document.createElement("li");
        li.textContent = tech;
        techList.appendChild(li);
    });
}

