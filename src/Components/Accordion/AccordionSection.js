import React, { useRef, useEffect } from 'react';

const  AccordionSection = ({ index, label, children, isOpen, handleClick}) => {
  const labelRef = useRef();
//   useEffect(() =>{
//     if(index === selected[0] && labelRef.current){
//       labelRef.current.focus()
//     }
//   }, [index, selected])

console.log("labelRef: ", labelRef);
 const onClick = () =>{
    handleClick(label);
}

  return (
    <>
      <h3>
        <button
          id={`Accordion_${index}`}
          className="Accordion-trigger" 
          aria-controls={`panel_${index}`}
          aria-expanded={isOpen}
          onClick={onClick}
          tabIndex={0}
          ref={labelRef}
         
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