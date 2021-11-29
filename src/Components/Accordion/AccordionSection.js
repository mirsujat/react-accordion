import React, { Component, Fragment } from "react";


class AccordionSection extends Component {
    constructor(props) {
        super(props);
         this.activeLink = React.createRef();
      }
  // focusButton = () =>{
  //   this.activeLink.current.focus();
  // }

  onClick = () => {
    this.props.onClick(this.props.label);
    
  };

  render() {
    const { onClick,  props: { isOpen, label, index, onKeyUp } } = this;
  
    return (
      <Fragment>
        <button 
        id={`Accordion_${index}`} 
        className="Accordion-trigger" 
        onClick={onClick} 
        aria-expanded={isOpen}
        aria-controls={`Accordion_Panel_${index}`}
        onKeyUp={onKeyUp}
        tabIndex="0"
        
        
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
           aria-hidden={!isOpen}
           
           >
            {this.props.children}
          </div>
        )}
      </Fragment>
    );
  }
}

export default AccordionSection;
