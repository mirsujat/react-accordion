import React, { Fragment } from "react";


const AccordionSection = ({isOpen, label, index, toggle, children, focusRef}) =>{
 
  const onClick = () => {
    toggle(label, index);
  };

  console.log("focusRef: ", focusRef);
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
         tabIndex={1}
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
