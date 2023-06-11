// Write your code here
import {component} from 'react'

import './index.css'

class ClickCounter extends component {
  state = {count: 0}
  onIncreament = () => {
    this.state(prevstate => ({count: prevstate.count + 1}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1>
          The Button has been clicked <span>0</span>
        </h1>
        <p>Click the button to increase the count!</p>
        <button onClick={this.onIncreament}>Click Me!</button>
      </div>
    )
  }
}
export default ClickCounter
