import React, { Component, Fragment } from "react";


class AccordionSection extends Component {
   
  onClick = () => {
    this.props.onClick(this.props.label);
  };
 onKeyUp = () =>{
   this.props.onKeyUp(this.props.children)
 }

  render() {
    const { onClick,  props: { isOpen, label, index, onKeyUp, activeLink} } = this;
  
    return (
      <Fragment>
        <h3>
        <button 
            id={`Accordion_${index}`} 
            className="Accordion-trigger" 
            onClick={onClick} 
            aria-expanded={isOpen}
            aria-controls={`Accordion_Panel_${index}`}
            onKeyUp={onKeyUp}
            ref={activeLink}
            tabIndex="0"
        >
          <span className="Accordion-title">
          {label}
          <span className="Accordion-icon"></span>
          </span>
        </button>
        </h3>
        {isOpen && (
          <section id={`Accordion_Panel_${index}`}
              className="Accordion-panel"
              aria-labelledby={`Accordion_${index}`}
              aria-hidden={!isOpen}
           >
            {this.props.children}
          </section>
        )}
      </Fragment>
    );
  }
}

export default AccordionSection;
