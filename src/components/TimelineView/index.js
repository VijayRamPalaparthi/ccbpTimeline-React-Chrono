// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)
  const items = timelineItemsList.map(each => ({
    title: each.title,
  }))

  return (
    <div className="bg-container">
      <div className="heading-container">
        <h1 className="heading">
          MY JOURNEY <br /> <span className="heading2">OF CCBP 4.0</span>
        </h1>
      </div>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={items}>
          {timelineItemsList.map(object => {
            if (object.categoryId === 'COURSE') {
              return <CourseTimelineCard dataObject={object} key={object.id} />
            }
            return <ProjectTimelineCard dataObject={object} key={object.id} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
