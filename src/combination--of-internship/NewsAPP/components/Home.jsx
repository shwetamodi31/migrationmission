// Home.js

import Card from './Card';
import React, { useState, useEffect } from 'react';
import NewsNavbars from './NewsNavbars';


function Home() {
  const [homeNewsData, setHomeNewsData] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_NEWS_API_ENDPOINT_LOCAL' with the actual endpoint for local news
    fetch('https://newsapi.org/v2/top-headlines?q=world&apiKey=02210ce4ebcd4ef6b5d6a03fefdf4da8')
      .then(response => {
        // Log the status code
        console.log('Status Code:', response.status);

        // Check if the response status is OK (200)
        if (response.ok) {
          return response.json();
        } else {
          // Handle error cases, e.g., setLocalNewsData([]) or throw an error
          console.error('Failed to fetch local news:', response.statusText);
          throw new Error(`Failed to fetch local news: ${response.statusText}`);
        }
      })
      .then(data => {
        // Log the JSON response
        console.log('JSON Response:', data);

        // Set the homeNewsData state
        setHomeNewsData(data.articles);
      })
      .catch(error => console.error('Error fetching local news data:', error));
  }, []);

  return (
    <>
    <NewsNavbars/>
    
      <div className="container">
        <div className="row">
          {homeNewsData.map(article => (
            <div key={article.url} className="col-md-3 mb-4">
              <Card
                title={article.title}
                description={article.description}
                url={article.url}
                imageUrl={article.urlToImage}
              />
            </div>
          ))}
        </div>
      </div>
      </>
    );
  }
  
  export default Home;