
import axios from 'axios';

const searchImages = async (search_term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID x5Ksi-atd-ffO-72MvYfP_cn1bThhXqh1ymvgmIwcLk',
    },
    params: {
      query:search_term,
    },
  });
//   console.log(response)
  return response.data.results;
};

export default searchImages;
