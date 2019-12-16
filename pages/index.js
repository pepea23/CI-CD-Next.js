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
      document.getElementById("liffAppContent").classList.add("hidden");
      document
        .getElementById("liffInitErrorMessage")
        .classList.remove("hidden");
    });
};

useEffect(() => {
  initializeLiff();
}, []);

const Home = () => <div>welcome to liff</div>;

export default Home;
