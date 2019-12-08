import React from 'react';
import Visual from '../../atoms/Visual/index';

export default class TextImage extends React.Component {
  render() {
    return (
      <div className={["textImage", this.props.position].join(" ")}>
        <Visual img={this.props.img} alt={this.props.alt}/>
        <p>Nulla leo tincidunt placerat nisi, elementum condimentum phasellus duis. Eu netus varius aliquam at nisi gravida pulvinar et integer. Lacinia sollicitudin velit sollicitudin adipiscing vitae auctor ac.</p>
      </div>
    )
  }
}