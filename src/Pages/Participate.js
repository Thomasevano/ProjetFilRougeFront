import React from 'react';
import EndPart from '../molecules/EndPart/index';
import Navbar from '../molecules/Navbar/Navbar';
import IntroBlock from '../molecules/IntroBlock/IntroBlock';
import TreeMapSet from '../molecules/TreeMap/index';

function Participate() {
  return (
    <div>
      <Navbar/>
      <section className="intro">
        <IntroBlock img="./data/imageParticipate.jpg" alt="information image" title="Participate" stepNumber="step 2" infoTitle="" infoSubtitle="HOW TO USE THE MONDRIAN GRID" infoDescription="Click on the different locations below to see how you can limit your impact"/>
      </section>
      <section className="dataVizTreeMap">
        <TreeMapSet />
      </section>
      <EndPart title="Now It’s Time to Participate" subTitle="Last Step" textButton="Go to Step 3" pageTo="/evaluate"/>
    </div>
  )
}

export default Participate