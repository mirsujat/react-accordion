import React, { Fragment, useEffect } from "react";


const AccordionSection = ({ isOpen, label, index,  toggle, focusRef, children}) => {

 

  //  useEffect(() => {
  //   focusRef.current.focus()
  // }, [focusRef]); 

  const onClick = () => {
    toggle(label, index);
  };
console.log("focusRef: ", focusRef.current)
     return(
       <Fragment>
         <h3>
           <button 
            id={`Accordion_${index}`} 
            className="Accordion-trigger" 
            onClick={onClick} 
            aria-expanded={isOpen}
            aria-controls={`Accordion_Panel_${index}`}
            ref={focusRef}
            tabIndex={0}
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
            {children}
          </section>
        )}
      </Fragment>
     )
   }

export default AccordionSection;
