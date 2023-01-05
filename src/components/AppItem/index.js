// Write your code here
import './index.css'

const ProjectItem = props => {
  const {allItems} = props
  const {appName, imageUrl} = allItems
  return (
    <li className="eachItem">
      <img src={imageUrl} alt={appName} className="eachImage" />

      <p>{appName}</p>
    </li>
  )
}

export default ProjectItem
