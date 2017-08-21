import React, {Component} from 'react'
import {connect} from 'react-redux'
import ImageCard from './ImageCard'
import fetchContent from './contentActions'
import './styleSheet.css'

class RootComponent extends Component {

  constructor(props) {
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
 } 

  handleSubmit(event) {
    event.preventDefault()
    const tag = event.target.tag.value
    this.props.fetchContent(tag)
  }

  render() {
    let hasImage = false
    if (this.props.content.length !== 0) {
      hasImage = true
    }
    return (
      <div>
        <div className='flexContainerColumn'>
          <div className='title'><h1>Welcome to Tiong's flickr test</h1></div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <textarea className='textArea'placeholder='search tag' name='tag'/><br />
              <input className='button' type="submit" value="Submit" />
            </form>
          </div>
        </div>
        <div className='flexContainerRow'>
          {
            hasImage ? (
              this.props.content.map((content,index) => {
                return <ImageCard content={content} key={index} />
              })
            ):(
              this.props.isFetching ? (
                <div className='noImage'>Loading...</div>
              ):(
                <div className='noImage'>
                  <h3>no image</h3>
                </div>
              )
            )
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    content: state.content.content,
    isFetching: state.content.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContent: (tag) => dispatch(fetchContent(tag))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RootComponent);
