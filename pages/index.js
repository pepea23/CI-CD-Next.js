import React, { useEffect } from "react";

const initializeLiff = myLiffId => {
  liff
    .init({
      liffId: myLiffId
    })
    .then(() => {
      // start to use LIFF's api
      initializeApp();
      liff.login();
    })
    .catch(err => {
      console.log(err);
    });
};

const Home = () => {
  useEffect(() => {
    initializeLiff();
  }, []);
  return <div>welcome to liff</div>;
};

export default Home;
