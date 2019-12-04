import React from 'react';
import Visual from '../../atoms/Visual/index';

export default class TextImage extends React.Component {
  render() {
    return (
      <div className="textImage right">
        <Visual img="https://www.w3schools.com/w3css/img_lights.jpg" alt="visuel accompagnent le text (a modifié suivant l'image)"/>
        <p>Nulla leo tincidunt placerat nisi, elementum condimentum phasellus duis. Eu netus varius aliquam at nisi gravida pulvinar et integer. Lacinia sollicitudin velit sollicitudin adipiscing vitae auctor ac.</p>
      </div>
    )
  }
}