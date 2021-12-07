import React, { Fragment, useRef, useState } from "react";


<<<<<<< Updated upstream

// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

const AccordionSection = ({
  isOpen, label, index, toggle, children
}) =>{
=======
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
} 

const AccordionSection = ({isOpen, label, index, onKeyDown, toggle, children, focusRef}) =>{
>>>>>>> Stashed changes
  
 
 
  const focusRef = useRef(null);
  const [isSelect, setSelect] = useState(false);
  
  const setFocus = () =>{
    setSelect({isSelect : true});
  }
const setBlur = () =>{
  setSelect({isSelect : false });
}
  const onClick = () => {
    toggle(label, index);
    if(`Accordion_${index}` === focusRef.current.id){

      setFocus()
      focusRef.current.focus();
    }
   console.log("RefID: ", focusRef.current.id ); 
  };

  // const wasSelect = usePrevious(isSelect)

  // useEffect(() =>{
  //   if (!wasSelect && isSelect) {
  //     focusRef.current.focus();
  //   }if(wasSelect && !isSelect && focusRef.current === null){
  //     index[0] = focusRef.current.focus();
  //   }  
  // }, [wasSelect, isSelect, index])

  console.log("isSelect:", isSelect);
  console.log("focusRef:", focusRef);
 
  
    return(
      <Fragment>
      <h3>
        <button 
         id={`Accordion_${index}`} 
         className="Accordion-trigger" 
         onClick={onClick}
<<<<<<< Updated upstream
         aria-expanded={isOpen}
         aria-controls={`Accordion_Panel_${index}`}
         ref={focusRef}
        onFocus={setFocus}
        onBlur={setBlur}
=======
        onKeyDown={onKeyDown}
         onFocus={ () => isOpen}
         onBlur={ () => !isOpen}
         aria-expanded={isOpen}
         aria-controls={`Accordion_Panel_${index}`}
         ref={focusRef}
>>>>>>> Stashed changes
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
