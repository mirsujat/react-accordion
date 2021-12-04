import React, { Fragment, useRef, useEffect } from "react";


const AccordionSection = ({isOpen, label, index,  children}) =>{
 
  const focusRef = useRef(null);

  useEffect(() =>{
    focusRef.current.focus()
  }, [])
  const onClick = () => {
    const {label, index, toggle} = this.props;
    toggle(label, index);
  };
  const setFocusRef = ()=> {
    // Explicitly focus the DOM node using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    focusRef.current.focus();
  }



   
   
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
         onKeyDown={setFocusRef}
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
