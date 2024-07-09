import "./aboutstyles.css"
import { FaReact, FaCss3Alt, FaJava, FaPython } from 'react-icons/fa'; // FontAwesome icons
import { SiC, SiTableau } from 'react-icons/si'; // Simple Icons

const Aboutcontent=()=>{
    return(
        <div className="about-container">
            
            <div className="about-content">
                <p className="first">
                Hello! My name is Meet Kothari, and I am a third-year B.Tech student majoring in Computer Science and Engineering with a specialization in Data Science at D.J. Sanghvi College of Engineering. My academic journey has been driven by a deep passion for data 
                science, and I have developed a strong foundation in this field through extensive coursework and hands-on projects.
                </p>

                <p className="second">
                I am proficient in programming languages such as C, Java, Python, and SQL, and I have a solid grasp of data structures and algorithms. My expertise in data science encompasses machine learning, data analysis, and visualization, where I have applied various techniques to uncover insights and drive decision-making.
                </p>

                <p className="third">
                Beyond my technical skills, I am enthusiastic about exploring the intersection of data science with marketing, finance, and the stock market. This interdisciplinary approach allows me to leverage data-driven strategies to solve complex problems and create impactful solutions.

               I am continuously seeking opportunities to apply my knowledge in real-world scenarios and to collaborate on innovative projects. Welcome to my portfolio, where you can explore my work and learn more about my journey in data science.


                </p>

            </div>

            <div className="skills-section">
                <h1> Skills</h1>
                <div className="logos">
                <FaPython size={50} color="#306998" /> {/* Python logo */}
                    <FaReact size={50} color="#61dafb" /> {/* React logo */}
                    <SiTableau size={50} color="#e97627" /> {/* Tableau logo */}
                    <FaCss3Alt size={50} color="#2965f1" /> {/* CSS logo */}
                    <SiC size={50} color="#A8B9CC" /> {/* C logo */}
                    <FaJava size={50} color="#007396" /> {/* Java logo */}
                   
                </div>


            </div>
        </div>
    )
};

export default Aboutcontent;
