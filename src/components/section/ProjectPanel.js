import { motion } from 'framer-motion';
import Animations from '../../animation';

const ProjectPanel = ({ index, project, whichPanel, hoverPanel, controls }) => {
  return (
    <motion.div
      id={`panel-${index + 1}`}
      className={`project-panel ${index !== 4 ? 'border' : ''}`}
      onMouseEnter={whichPanel}
      onMouseLeave={whichPanel}
      variants={Animations.movement}
      initial="initialY"
      animate={controls}
      custom={500}
      transition={{ duration: 0.5, delay: index * 0.2, ease: 'linear' }}
    >
      <img
        alt={`${project.img}`}
        className="project-image"
        src={`${process.env.PUBLIC_URL}/assets/projects/${project.img}`}
      ></img>
      <div className="project-details">
        <motion.h1
          variants={Animations.movement}
          initial="initialY"
          custom={30}
          animate={
            hoverPanel === `panel-${index + 1}` ? 'endingXY' : 'initialY'
          }
          transition={{
            duration: 0.5,
          }}
        >
          {project.letter}
        </motion.h1>
        <h2>{project.client}</h2>
        <motion.p
          variants={Animations.movement}
          initial="initialY"
          custom={30}
          animate={
            hoverPanel === `panel-${index + 1}` ? 'endingXY' : 'initialY'
          }
          transition={{
            duration: 0.5,
          }}
        >
          {project.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectPanel;
