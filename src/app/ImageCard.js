import React, {Component} from 'react'
import './styleSheet.css'

class ImageCard extends Component {
  render() {
    return (
      <div className='imageCard'>
        <div className='imageHolder'>
          <img src={this.props.content.link} alt="content image" height="200" width="200" />
        </div>
        <div className='imageCardTitle'>
          <p>
            {this.props.content.title}
          </p>
        </div>
      </div>
    )
  }
}

export default ImageCard
