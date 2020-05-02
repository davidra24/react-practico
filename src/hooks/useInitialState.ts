import { useState, useEffect } from 'react';
import { state } from '../model/state';

export const useInitialState = (API) => {
  const [videos, setVideos] = useState<state>({
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
