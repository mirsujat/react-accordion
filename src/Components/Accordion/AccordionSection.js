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
  handleClick, handleKeyUp
}) =>{
  const focusRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);
  
  const wasSelected = usePrevious(isSelected);

  useEffect(() =>{
    if(!wasSelected && isSelected){
      setFocus();
      focusRef.current.focus();
    }
  }, [wasSelected, isSelected])

  //TODO
  const onKeyUp = (e, label) =>{
    console.log("OnKeyUp");
    handleKeyUp(e, label);
    setFocus();
    focusRef.current.focus();
  }


   const onClick = () =>{
     handleClick(label, index);
     
    }

   const setFocus = () => setIsSelected(true);
   const setBlur = () => setIsSelected(false);

  


    return(
      <>
        <h3>
          <button
            id={`Accordion_${index}`}
            className="Accordion-trigger" 
            aria-controls={`panel_${index}`}
            aria-expanded={isOpen}
            onClick={onClick}
            onKeyUp={onKeyUp}
            onFocus={setFocus}
            onBlur={setBlur}
            tabIndex={0}
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