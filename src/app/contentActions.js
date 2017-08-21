import {
  FETCHING_CONTENT,
  FETCH_SUCCESS
} from './constants';
import $ from 'jquery';

const fetchContent = (tag) => {
  return (dispatch) => {
    dispatch(fetchingApi())
    $.getJSON(
      `http://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&jsoncallback=?`,
         function(data) {
         $.each(data.items, function(i, item) {
         let parsedResponse = {
               title: item.title,
               link: item.media.m
             }
     dispatch(fetchSuccess(parsedResponse))
       });
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
