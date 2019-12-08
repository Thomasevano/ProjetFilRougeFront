import React from 'react';
import EndPart from '../molecules/EndPart/index';
import TextImage from '../molecules/TextImage/index';

function Page1() {
  return (
    <div>
      <section className="visualText">
        <TextImage position="right" img="https://static.cnews.fr/sites/default/files/styles/image_640_360/public/capture_decran_2019-10-22_a_11.32.54_5daecce35d7b4_0.png?itok=Zc1cUYqC"/>
      </section>
      <section className="visualText">
        <TextImage position="left" img="https://blog.nameshield.com/fr/wp-content/uploads/sites/3/2018/02/JO-PyeongChang-2018-cyberattaque-Blog-Nameshield.jpg"/>
      </section>
      <EndPart text="A platea sit mi senectus nec egestas eget. Tincidunt massa velit vitae volutpat viverra nunc. Leo ipsum egestas quis lacus accumsan ?"/>
    </div>
    
  )
}

export default Page1