import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onClickChangeText = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  render() {
    const {isSubscribed} = this.state
    const buttonText = isSubscribed ? 'Subscribed' : 'Subscribe'
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>

        <button
          type="button"
          className="button"
          onClick={this.onClickChangeText}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
