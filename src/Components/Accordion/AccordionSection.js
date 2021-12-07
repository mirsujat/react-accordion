import React, { Fragment, useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const AccordionSection = ({
  isOpen, label, index, toggle, children, focusRef,
  isSelected, onKeyDown
}) =>{
  
 
  // const focusRef = useRef(null);
  // const [isSelect, setSelect] = useState(false);
  
  const onClick = () => {
    toggle(label, index);
  };

  // const wasSelect = usePrevious(isSelect)

  // useEffect(() =>{
  //   if (!wasSelect && isSelect) {
  //     focusRef.current.focus();
  //   }if(wasSelect && !isSelect && focusRef.current === null){
  //     index[0] = focusRef.current.focus();
  //   }  
  // }, [wasSelect, isSelect, index])

  console.log("focusRef:", focusRef);
  
    return(
      <Fragment>
      <h3>
        <button 
         id={`Accordion_${index}`} 
         className="Accordion-trigger" 
         onClick={onClick}
         onKeyDown={onKeyDown}
         onFocus={() => isSelected}
         onBlur={() =>!isSelected}
         aria-expanded={isOpen}
         aria-controls={`Accordion_Panel_${index}`}
         ref={ focusRef  }
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
