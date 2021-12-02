import React, { Component, useEffect } from "react";
import AccordionSection from "./AccordionSection";

class Accordion extends Component {

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);
    const openSections = {};
    this.accordions = props.children;
    this.accordions.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });
    this.state = { openSections, selected: [null] };
    this.navigationKey = {
      tabKey: 13,
      end: 35,
      home: 36,
      up: 38,
      down: 40
    };
    this.focusRef = React.createRef();
  }

  //TODO
  // useEffect(() => {
  //   const {selected} = this.state;
  //   const index = this.accordions.indexOf();
  //   if (index === selected[0] && focusRef.current) {
  //     this.focusRef.current.focus();
  //   }
  // }, [index, selected]);

  // helper function
  handleAccordionOpen = (label, i) =>{
    const { props: { allowMultipleOpen }, 
        state: { openSections } } = this;
        const isOpen = !!openSections[label];
    

        if (allowMultipleOpen) {
          this.setState({
            openSections: {
              ...openSections,
              [label]: !isOpen
            }
          });
        } else {
          this.setState({
            openSections: {
              [label]: !isOpen
            },
            selected: [i]
          });
        }
  }

   toggle = (label, i) => {
    this.handleAccordionOpen(label, i)
  };

  selected = (accordion) =>{
    this.setState({selected: accordion})
  }

  
 

  onKeyUp = (e, accordion) =>{
    e.preventDefault();
    let key = e.keyCode;
    if(key === 40){
      this.goNext(accordion);
    } 
  }


  render() {
    const { 
      toggle,
      onKeyUp,
      state: { openSections, selected },
    } = this;
   
    return (
      <div className="Accordion">
        { this.accordions.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            selected={selected}
            label={child.props.label}
            toggle={toggle}
            onKeyUp={onKeyUp}
            ref={this.focusRef}
            key={i}
            index={i}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;