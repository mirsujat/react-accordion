import React, { Fragment } from "react";


const AccordionSection = React.forwardRef((props, ref) => {

  const { isOpen, label, index, onKeyUp, toggle} = props;

  const onClick = () => {
    toggle(props.label);
  };
     return(
       <Fragment>
         <h3>
           <button 
            id={`Accordion_${index}`} 
            className="Accordion-trigger" 
            onClick={onClick} 
            aria-expanded={isOpen}
            aria-controls={`Accordion_Panel_${index}`}
            onKeyUp={onKeyUp}
            ref={ref}
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
     )
   })

export default AccordionSection;
