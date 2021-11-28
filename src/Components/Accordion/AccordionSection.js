import React, { Component } from "react";


class AccordionSection extends Component {

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const { onClick, props: { isOpen, label, index } } = this;
  
    return (
      <div className="Accordion">
        <button 
        id={`Accordion_${index}`} 
        className="Accordion-trigger" 
        onClick={onClick} 
        aria-expanded={isOpen}
        aria-controls={`Accordion_Panel_${index}`}
        >
          <span className="Accordion-title">
          {label}
          <span className="Accordion-icon"></span>
          </span>
        </button>

        {isOpen && (
          <div id={`Accordion_Panel_${index}`}
           className="Accordion-panel"
           role="region"
           aria-labelledby={`Accordion_${index}`}
           
           >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
