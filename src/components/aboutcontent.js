import "./aboutstyles.css"
import { motion } from "framer-motion";
import { FaReact, FaCss3Alt, FaJava, FaPython, FaBrain, FaRobot, FaEye } from 'react-icons/fa';
import { SiC, SiTableau, SiMysql, SiTensorflow, SiPowerbi } from 'react-icons/si';

const Aboutcontent=()=>{
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const skills = [
        { icon: <FaPython size={50} />, name: "Python", level: 90, color: "#306998" },
        { icon: <SiMysql size={50} />, name: "SQL", level: 85, color: "#00758f" },
        { icon: <FaBrain size={50} />, name: "Machine Learning", level: 82, color: "#ff6b6b" },
        { icon: <SiTensorflow size={50} />, name: "Deep Learning", level: 80, color: "#FF6F00" },
        { icon: <FaEye size={50} />, name: "Computer Vision", level: 78, color: "#9b59b6" },
        { icon: <SiTableau size={50} />, name: "Tableau", level: 80, color: "#e97627" },
        { icon: <SiPowerbi size={50} />, name: "Power BI", level: 78, color: "#F2C811" },
        { icon: <FaReact size={50} />, name: "React", level: 85, color: "#61dafb" },
        { icon: <FaRobot size={50} />, name: "AI", level: 78, color: "#00e6ef" },
        { icon: <FaCss3Alt size={50} />, name: "CSS3", level: 88, color: "#2965f1" },
        { icon: <SiC size={50} />, name: "C", level: 82, color: "#A8B9CC" },
        { icon: <FaJava size={50} />, name: "Java", level: 85, color: "#007396" }
    ];

    return(
        <div className="about-container">
            
            <motion.div 
                className="about-content"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.p className="first" variants={itemVariants}>
                I'm Meet Kothari, currently pursuing my Bachelor's degree in Computer Science and Engineering with a specialization in Data Science, and over the years I've developed a steady interest in understanding how technology, software, and data come together to solve real problems. I enjoy learning by building—whether it's experimenting with AI and machine learning models, creating simple applications, or exploring how data can be cleaned, analyzed, and turned into something useful.
                </motion.p>

                <motion.p className="second" variants={itemVariants}>
                I've worked on several academic and personal projects that helped me improve not just my technical skills, but also my patience, clarity, and ability to break complex ideas into understandable steps. I try to keep my communication straightforward and clear, especially when working in teams or discussing technical concepts, and I believe that staying organized and asking the right questions makes a big difference in the quality of work.
                </motion.p>

                <motion.p className="third" variants={itemVariants}>
                Beyond academics, I like exploring new tools, understanding industry trends, and slowly building a mindset that values continuous learning over quick results. My goal is to grow into a role where I can apply my technical background in AI, analytics, or software development while still staying open to new opportunities and possibilities within the tech world. I want my work to be meaningful, simple, and helpful, and I'm genuinely excited to keep learning and improving as I move forward in my career.
                </motion.p>

            </motion.div>

            <motion.div 
                className="skills-section"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h1>Skills</h1>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-item"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <p className="skill-name">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    )
};

export default Aboutcontent;
