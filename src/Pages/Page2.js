import React from 'react';
import EndPart from '../molecules/EndPart/index';
import Navbar from '../molecules/Navbar/Navbar';
import IntroBlock from '../molecules/IntroBlock/IntroBlock';

function Page2() {
  return (
    <div>
      <Navbar/>
      <section className="intro">
        <IntroBlock img="./data/intro-background-eiffelTower.jpg" alt="eiffel tower view" title="Participate"/>
      </section>
      <EndPart title="Now It’s Time to Participate" subTitle="Last Step" textButton="Go to Step 3"/>
    </div>
  )
}

export default Page2