// Write your code here
import './index.css'

const TabItems = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    clickTabItem(tabId)
  }
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  return (
    <li>
      <button
        type="button"
        className={activeTabBtnClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
