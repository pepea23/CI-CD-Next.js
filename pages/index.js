import React, { useEffect } from "react";

const initializeLiff = myLiffId => {
  liff
    .init({
      liffId: myLiffId
    })
    .then(() => {
      // start to use LIFF's api
      initializeApp();
    })
    .catch(err => {
      console.log(err);
    });
};

const Home = () => {
  useEffect(() => {
    initializeLiff();
  }, []);
  const accessToken = liff.getAccessToken();
  return <div>welcome to liff {accessToken}</div>;
};

export default Home;
