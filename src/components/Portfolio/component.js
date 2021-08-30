import PortfolioItem from '../PortfolioItem'

import { PROJECTS } from './constants'

const Portfolio = () => (
  <div className={'Portfolio'}>
    {PROJECTS.map((project) => (
      <PortfolioItem
        description={project.description}
        image={project.image}
        key={project.title}
        technologies={project.technologies}
        title={project.title}
      />
    ))}
  </div>
)
export default Portfolio
