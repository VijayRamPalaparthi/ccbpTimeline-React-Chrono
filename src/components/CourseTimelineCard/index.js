// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {dataObject} = props
  const {courseTitle, description, tagsList, duration} = dataObject

  return (
    <div className="card-container">
      <div className="title-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle width={30} height={30} color="#1e293b" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="list-container">
        {tagsList.map(each => (
          <li className="tag-container">
            <p className="tag">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
