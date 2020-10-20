import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    document.body.addEventListener('scroll', handleScroll);
    return () => document.body.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log('called back');
    });
  }, [isFetching]);

  function handleScroll() {

    console.log(document.body.scrollHeight);
    console.log(window.pageYOffset);
    console.log(document.documentElement.scrollTop);
    console.log(document.documentElement.offsetHeight);
    console.log(document.body.clientHeight);
    console.log(document.documentElement.clientHeight);
    var scrollTop = window.pageYOffset;
    console.log(scrollTop);
    if ( document.body.scrollHeight > document.documentElement.offsetHeight || isFetching) return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;