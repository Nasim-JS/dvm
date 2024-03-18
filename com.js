// Define a function to fetch data from an API asynchronously
function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  // Usage example: Fetch data from an API and handle the response
  const apiUrl = 'https://api.example.com/data';
  fetchData(apiUrl)
    .then(data => {
      console.log('Data fetched successfully:', data);
      // Perform further processing here
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
    });