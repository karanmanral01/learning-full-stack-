const users = [
    {
        fullName: "Aarav Sharma",
        username: "aarav.dev",
        image: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww",
        profession: "Frontend Developer",
        description: "Passionate about building clean and interactive web interfaces using React and JavaScript.",
        tags: ["React", "JavaScript", "UI/UX", "Frontend"]
    },
    {
        fullName: "Priya Verma",
        username: "priya.designs",
        image: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
        profession: "UI/UX Designer",
        description: "Creative designer focused on user-friendly experiences and visually appealing products.",
        tags: ["Figma", "UI Design", "UX Research", "Prototyping"]
    },
    {
        fullName: "Rohan Mehta",
        username: "rohan.codes",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
        profession: "MERN Stack Developer",
        description: "Full-stack developer who loves creating scalable web applications with MERN stack.",
        tags: ["MongoDB", "Express", "React", "Node.js"]
    },
    {
        fullName: "Sneha Kapoor",
        username: "sneha.analytics",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        profession: "Data Analyst",
        description: "Turns raw data into meaningful insights using Python, SQL, and visualization tools.",
        tags: ["Python", "SQL", "Power BI", "Analytics"]
    },
    {
        fullName: "Kabir Singh",
        username: "kabir.pm",
        image: "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
        profession: "Product Manager",
        description: "Bridges the gap between business goals and technical execution to build impactful products.",
        tags: ["Leadership", "Strategy", "Agile", "Product"]
    }
];

let sum = ''

users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

let main = document.querySelector('main')

main.innerHTML = sum