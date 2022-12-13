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



	const makeButton = (imgSrc, title) => {
		return (<motion.button
		className='motionB'
		whileHover={{ scale: 1.1 }}
	>
	<Skill source={imgSrc} type='image' alt={`The logo icon for ${title}`} title={title}/>
	</motion.button>
	)}

    return (

        <div className="skills" id='techstack'>

                <h1>Technologies</h1>
 
            <div className="skillsGrid">


				{makeButton(htmlImg, "HTML5")}
				{makeButton(cssImg, "CSS")}
				{makeButton(jsImg, "JavaScript")}
				{makeButton(reactImg, "ReactJs")}
				{makeButton(nextImg, "NextJs")}
				{makeButton(reduxImg, "Redux")}
				{makeButton(twImg, "Tailwind Css")}
				{makeButton(nodeImg, "NodeJs")}
				{makeButton(expressImg, "ExpressJs")}
				{makeButton(mongoImg, "Mongo Db")}
				{makeButton(postgreSQLImg, "PostgreSQL")}
				{makeButton(tsImg, "TypeScript")}
				{makeButton(githubImg, "Github")}
				{makeButton(mongooseImg, "Mongoose")}
				{makeButton(graphqlImg, "GraphQL")}
				{makeButton(awsImg, "AWS")}
				{makeButton(netlifyImg, "Netlify")}
				{makeButton(postmanImg, "Postman")}
				{makeButton(sassImg, "Sass Css")}
				{makeButton(gitImg, "Git")}
				{makeButton(herokuImg, "Heroku")}

            </div>            
        </div>
    )
}
export default Skills;
