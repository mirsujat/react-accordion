import React, { useRef, useEffect, useState } from 'react';


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const AccordionSection = ({
  index, label, children, isOpen, 
  handleClick, handleKeyDown                      
}) =>{
  const focusRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);
  // const secId = `Accordion_${index}`;
  // const focusId = focusRef.current === null ? null : focusRef.current.id;
    const wasSelected = usePrevious(isSelected);

  useEffect(() =>{
    if(!wasSelected && isSelected){
      setFocus();
      focusRef.current.focus();
    }
     if(wasSelected && !isSelected){
      setBlur();
      focusRef.current.blur();
    }
  }, [wasSelected, isSelected])


   const onClick = () =>{
     handleClick(label);
    }
    const setFocus = () => setIsSelected(true);
    const setBlur = () => setIsSelected(false);

  
console.log("focusRef: ", focusRef);

    return(
      <>
        <h3>
          <button
            id={`Accordion_${index}`}
            className="Accordion-trigger" 
            aria-controls={`panel_${index}`}
            aria-expanded={isOpen}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            onFocus={setFocus}
            onBlur={setBlur}
            ref={focusRef}
          >
              <span className="Accordion-title">
              {label}
              <span className="Accordion-icon"></span>
              </span>
          </button>
        </h3>
        {isOpen && (
          <section
          id={`panel_${index}`}
          className="Accordion-panel"
          aria-labelledby={`Accordion_${index}`}
          aria-hidden={!isOpen}
          >
              {children}
          </section>         
      )}
 
      </>
    )
  
} 

export default AccordionSection;