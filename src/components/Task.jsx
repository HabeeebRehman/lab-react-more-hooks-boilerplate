import './Task.css'
const Task = (props) => {
    const {task, index, dispatch} = props
    const {text, isHidden} = task
  return (
    <div className='todo'>
        {
            isHidden ? <h3>This content is hidden</h3> : <h3>Task: {text}</h3>
        }
            <button onClick={() => dispatch({type: "TOGGLE_TEXT", payload: index})} className='toggle-btn'>Toggle</button>
    </div>
  )
}

export default Task