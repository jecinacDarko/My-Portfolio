import Skill from '../Skill/'
import htmlImg from "../../assets/skills/html.png";
import cssImg from "../../assets/skills/css.png";
import jsImg from "../../assets/skills/javascript.png";
import reactImg from "../../assets/skills/react.png";
import nextImg from "../../assets/skills/nextjs.png";
import twImg from "../../assets/skills/tailwind.png";
import nodeImg from "../../assets/skills/node.png";
import expressImg from "../../assets/skills/express.png";
import mongoImg from "../../assets/skills/mongo.png";
import postgreSQLImg from "../../assets/skills/postgres.png";
import tsImg from "../../assets/skills/typescript.png";
import githubImg from "../../assets/skills/github.png";
import mongooseImg from '../../assets/skills/mongoose.png';
import reduxImg from '../../assets/skills/redux.png';
import graphqlImg from '../../assets/skills/graphql.png';
import awsImg from '../../assets/skills/aws.png';
import netlifyImg from '../../assets/skills/netlify.png';
import postmanImg from '../../assets/skills/postman.png';
import sassImg from '../../assets/skills/sass.png';
import gitImg from '../../assets/skills/git.png';
import herokuImg from '../../assets/skills/heroku.png';
import './Skills.css'
import { motion } from 'framer-motion';

function Skills () {
    return (

        <div className="skills" id='techstack'>

                <h1>Technologies</h1>
 
            <div className="skillsGrid">

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={htmlImg} type='image' alt="The logo icon for HTML" title="HTML5"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={cssImg} alt="The logo icon for CSS3" title="CSS 3"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={jsImg} alt="The logo icon for JavaScript" title="Javascript"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={reactImg} alt="The logo icon for ReactJs" title="ReactJs"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={nextImg} alt="The logo icon for NextJs" title="NextJs"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={twImg} alt="The logo icon for tailwind css" tittle="Tailwind"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={nodeImg} alt="The logo icon for NodeJs" title="NodeJs"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={expressImg} alt="The logo icon for ExpressJs" title="ExpressJs"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={mongooseImg} alt="The logo icon for Mongoose" title="Mongoose"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={tsImg} alt="The logo icon for Typescript" title="Typescript"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={reduxImg} alt="The logo icon for Redux" title="Redux"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={graphqlImg} alt="The logo icon for graphqlImg" title="GraphQL"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={awsImg} alt="The logo icon for AWS" title="AWS"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={netlifyImg} alt="The logo icon for Netlify" title="Netlify"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={postmanImg} alt="The logo icon for Postman" title="Postman"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={mongoImg} alt="The logo icon for MongoDb" title='MongoDb'/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={sassImg} alt="The logo icon for Sass css" title="Sass"/>
							</motion.button>

							
							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
							<Skill source={herokuImg} alt="The logo icon for Heroku" title="Heroku"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Skill source={postgreSQLImg} alt="The logo icon for PostgreSQL" title="PostgreSql"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Skill source={gitImg} alt="The logo icon for Git" title="Git"/>
							</motion.button>

							<motion.button
								className='motionB'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
							>
								<Skill source={githubImg} alt="The logo icon for Github" title="Github"/>
							</motion.button>
            </div>            
        </div>
    )
}
export default Skills;
