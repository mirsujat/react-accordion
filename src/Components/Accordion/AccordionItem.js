import { useState } from 'react';
function AccordionItem({ index, title, children, isExpanded, onClick }) {
//   const [isExpanded, setIsExpanded] = useState(false);
  return (
    <>
      <h3>
        <button
          id={`${index}-header`}
          className="Accordion-trigger" 
          aria-controls={`${index}-panel`}
          aria-expanded={isExpanded()}
          onClick={onClick}

        >
            <span className="Accordion-title">
            {title}
            <span className="Accordion-icon"></span>
            </span>
        </button>
      </h3>
      {isExpanded() && (
        <section
        id={`${index}-panel`}
        className="Accordion-panel"
        aria-labelledby={`${index}-header`}
        aria-hidden={!isExpanded()}
        >
            {children}
        </section>         
      )}
 
    </>
  )
}

export default AccordionItem;