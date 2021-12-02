import { useRef, useEffect } from 'react';
function AccordionItem({ index, title, children, isExpanded, onClick, focusRef, selected }) {
  const labelRef = useRef();
  useEffect(() =>{
    if(index === selected[0] && labelRef.current){
      labelRef.current.focus()
    }
  }, [index, selected])
  return (
    <>
      <h3>
        <button
          id={`header_${index}`}
          className="Accordion-trigger" 
          aria-controls={`panel_${index}`}
          aria-expanded={isExpanded}
          onClick={onClick}
          tabIndex={0}
          ref={labelRef}
          onFocus={() => labelRef.current = index}
          onBlur={() => labelRef.current = null}
        >
            <span className="Accordion-title">
            {title}
            <span className="Accordion-icon"></span>
            </span>
        </button>
      </h3>
      {isExpanded && (
        <section
        id={`panel_${index}`}
        className="Accordion-panel"
        aria-labelledby={`header_${index}`}
        aria-hidden={!isExpanded}
        >
            {children}
        </section>         
      )}
 
    </>
  )
}

export default AccordionItem;