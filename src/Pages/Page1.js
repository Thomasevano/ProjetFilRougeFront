import React from 'react';
import EndPart from '../molecules/EndPart/index';
import TextImage from '../molecules/TextImage/index';

function Page1() {
  return (
    <div>
      <section className="visualText">
        <TextImage position="right"/>
      </section>
      <section className="visualText">
        <TextImage position="left"/>
      </section>
      <EndPart text="A platea sit mi senectus nec egestas eget. Tincidunt massa velit vitae volutpat viverra nunc. Leo ipsum egestas quis lacus accumsan ?"/>
    </div>
    
  )
}

export default Page1