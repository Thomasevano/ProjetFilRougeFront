import React from 'react';
import EndPart from '../molecules/EndPart/index';
import TextImage from '../molecules/TextImage/index';
import Navbar from '../molecules/Navbar/Navbar';
import IntroBlock from '../molecules/IntroBlock/IntroBlock';
import TimeLineSet from '../molecules/TimeLineSet/index';
import BubbleChartBlock from '../molecules/BubbleChartBlock/BubbleChartBlock'

function Page1() {
  
  return (
    <div>
      <Navbar/>
      <section className="intro">
        <IntroBlock img="./data/intro-background-eiffelTower.jpg" alt="eiffel tower view" title="become aware of our impact"/>
      </section>
      <section className="visualText">
        <TextImage position="left" img="data/imgThumbnail1.jpg" text="The Stade de France, for example, produces <strong>3 tons of plastic waste per year.</strong> In 2024, it will be the official stadium for the Olympic Games." title="BIG EVENTS MEAN BIGGER IMPACT <strong>.</strong>" buttonText="Read the article" buttonImg="data/arrowSecondaryButton.svg"/>
      </section>
      <section className="dataVizTimeLine">
        <TimeLineSet />
      </section>
      <section className="visualText">
        <TextImage position="right" img="data/tourEiffel.jpg" text="During the 2024 Olympics, <strong>12 millions visitors are expected</strong> in the City of Lights. This is alsmost as many as its 12.2 millions inhabitants. Which will multiply all of the effects we have." title="crowded places and effeverscence" buttonText="Read the article" buttonImg="data/arrowSecondaryButton.svg"/>
      </section>
      <section className="dataVizBubbleChart">
        <BubbleChartBlock/>
      </section>
      <EndPart title="Now It’s Time to Participate" subTitle="Next Step" textButton="Go to Step 2"/>
    </div>
    
  )

}

export default Page1