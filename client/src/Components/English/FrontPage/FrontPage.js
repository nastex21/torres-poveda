import React from "react";
import SplashPage from './FirstSection/SplashPage';
import Jobs from './SecondSection/Jobs';
import Testimonials from './ThirdSection/Testimonials';

function FrontPage() {
  return (
    <>
      <SplashPage />
      <Jobs />
      <Testimonials />
    </>
  );
}

export default FrontPage;
