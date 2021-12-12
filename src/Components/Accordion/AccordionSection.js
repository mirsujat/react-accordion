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
  handleClick, handleKeyUp, isSelect
}) =>{
  const focusRef = useRef(null);
  const [isSelected, setIsSelected] = useState(false);
  
  const wasSelected = usePrevious(isSelected);

  useEffect(() =>{
    if(!wasSelected && isSelect){
      focusRef.current.focus();
    }
  }, [wasSelected, isSelect])

  const setFocus = (e) => {if(isSelect) setIsSelected(true)} 
  const setBlur = () => {if(!isSelect) setIsSelected(false)} 

  //TODO
  const onKeyUp = (e, label, index) =>{
      e.preventDefault();
        handleKeyUp(e, label);
        if(isSelect){
          setFocus();
          focusRef.current.focus();
        }
  }

  const onClick = () =>{
    handleClick(label, index);
    }

    return(
      <>
        <h3>
          <button
            id={`Accordion_${index}`}
            className="Accordion-trigger" 
            aria-controls={`panel_${index}`}
            aria-expanded={isSelect && isOpen}
            onClick={onClick}
            onKeyUp={(e) => onKeyUp(e, label, index)}
            onFocus={(e) => setFocus(e)}
            onBlur={setBlur}
            tabIndex={0}
            ref={focusRef}
            data-testid="accordion_button"
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
          data-testid="accordion-section"
          >
              {children}
          </section>         
      )}
      </>
    )
  
} 

export default AccordionSection;