import React, { Fragment, useEffect } from "react";


const AccordionSection = React.forwardRef((props, ref) => {

  const { isOpen, label, index,  toggle, selected, children} = props;

   useEffect(() => {
    if (index === selected[0] && ref.current) {
      ref.current.focus();
    }
  }, [index, selected]); 

  const onClick = () => {
    toggle(label, index);
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
            {children}
          </section>
        )}
      </Fragment>
     )
   })

export default AccordionSection;
