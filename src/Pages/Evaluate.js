import React from 'react';
import Navbar from '../molecules/Navbar/Navbar';
import IntroBlock from '../molecules/IntroBlock/IntroBlock';
// import ChartBarSet from '../molecules/ChartBar/index'

function Evaluate() {
  return (
    <div>
      <Navbar/>
      <section className="intro">
        <IntroBlock img="./data/intro-background-eiffelTower.jpg" alt="eiffel tower view" title="Participate" stepNumber="step 2" infoTitle="" infoSubtitle="HOW TO USE THE MONDRIAN GRID" infoDescription="Click on the different locations below to see how you can limit your impact"/>
      </section>
      <section className="dataVizChartBar">
        {/* <ChartBarSet /> */}
      </section>
    </div>
  )
}

export default Evaluate