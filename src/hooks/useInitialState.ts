import { useState, useEffect } from 'react';
import { state } from '../data/state';
const API = 'http://localhost:3000/initialState';
export const useInitialState = () => {
  const [videos, setVideos] = useState<state>({
    user: {},
    playing: {},
    mylist: [],
    trends: [],
    originals: [],
  });

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data);
      });
  }, []);
  return videos;
};
