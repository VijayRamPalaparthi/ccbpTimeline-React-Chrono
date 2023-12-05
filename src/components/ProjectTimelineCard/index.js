// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {dataObject} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = dataObject

  return (
    <div className="card-container">
      <img src={imageUrl} className="image" alt="project" />
      <div className="title-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar width={30} height={30} color="#1e293b" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        {' '}
        Visit{' '}
      </a>
    </div>
  )
}
export default CourseTimelineCard
