import React from 'react';

const useFetch = (url: string) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const fetchUrl = async () => {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  React.useEffect(() => {
    fetchUrl();
  }, []);

  return [data, loading];
};

export default useFetch;

// Resources: https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
// https://www.robinwieruch.de/react-hooks-fetch-data/