import React from 'react';
import EndPart from '../molecules/EndPart/index';
import TextImage from '../molecules/TextImage/index';
import Navbar from '../molecules/Navbar/Navbar';
import IntroBlock from '../molecules/IntroBlock/IntroBlock';

function Page2() {
  return (
    <div>
      <Navbar/>
      <section className="intro">
        <IntroBlock img="./data/intro-background-eiffelTower.jpg" alt="eiffel tower view" title="become aware of our impact"/>
      </section>
      <EndPart title="Now It’s Time to Participate"/>
    </div>
  )
}

export default Page2