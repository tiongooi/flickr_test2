import {
  FETCHING_CONTENT,
  FETCH_SUCCESS
} from './constants'
import $ from 'jquery'

const fetchContent = (tag) => {
  return (dispatch) => {
    dispatch(fetchingApi())
    $.get(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}`, (response) => {
        $(response).find('entry').each(function(){
          let author = $(this).find('author').find('name').text()
          let link = $(this).find('link[rel="enclosure"]').attr('href')
          let parsedResponse = {
            title: author,
            link: link
          }
          dispatch(fetchSuccess(parsedResponse))
        })
    });
  }
}

const fetchingApi = () => {
  return {
    type: FETCHING_CONTENT,
  }
}

const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data
  }
}

export default fetchContent;
