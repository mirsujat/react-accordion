import React, { Component} from "react";

import AccordionSection from "./AccordionSection";




class Accordion extends Component {

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);
    const openSections = {};
     this.ids = [];
    this.accordions = props.children;
     this.accordions.forEach((child, i) => {
         this.ids[i] = [i]; 
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });
   this.findIndex = this.accordions[0];
    this.labelRef = null;
    this.setLabelRef = el =>{
        if(this.labelRef ){
          this.labelRef = el 
        }
    }
    this.state = { openSections };
    this.navigationKey = {
      tabKey: 13,
      end: 35,
      home: 36,
      up: 38,
      down: 40
    };
  }

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
            }
          });
       }
  }

   toggle = (label, i) => {
    this.handleAccordionOpen(label, i);
    //TODO
    // this.findIndex[i] = this.labelRef.current.focus();
  };


  render() {
    const { 
      toggle,
      state: { openSections},
    } = this;

  console.log("labelRef: ", this.labelRef);
  console.log("index: ", this.findIndex)
  
    return (
      <div className="Accordion">
        { this.accordions.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            toggle={toggle}
            focusRef={this.setLabelRef}
            key={i}
            index={this.ids[i]}
            id={this.ids[i]}
          >
            {child.props.children}
          </AccordionSection>
        ))
        }
      </div>
    );
  }
}

export default Accordion;