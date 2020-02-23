import React from 'react';
import Navbar from '../molecules/Navbar/Navbar';
import IntroBlock from '../molecules/IntroBlock/IntroBlock';
import ChartBarSet from '../molecules/ChartBar/index';
import EndPart from '../molecules/EndPart/index'
 
function Evaluate() {
  return (
    <div class="evaluate">
      <Navbar/>
      <section className="intro">
        <IntroBlock img="./data/intro-background-eiffelTower.jpg" alt="eiffel tower view" title="Evaluate" stepNumber="step 3" imgTop="./data/clock.svg" infoTitle="" infoSubtitle="6 DAYS LEFT" infoDescription="before the end of the Olympics <br> <br>Support your country by recycling your waste around Paris 2024 Olympics venues before the end of the Games"/>
      </section>
      <section className="dataVizChartBar">
        <ChartBarSet />
      </section>
      <EndPart title="Share your experience with your friends" subTitle="The End" textButton="" pageTo="/evaluate" firstLogo="./data/facebook.svg" secondLogo="./data/twitter.svg" thirdLogo="./data/instagram.svg"/>
    </div>
  )
}

export default Evaluate