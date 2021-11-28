import React, { Component } from "react";


class AccordionSection extends Component {

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const { onClick, props: { isOpen, label } } = this;
  
    return (
      <div className="Accordion">
        <button onClick={onClick} className="Accordion-trigger">
          {label}
        </button>
        {isOpen && (
          <div className="panel">
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
