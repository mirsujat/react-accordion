import React, { Component } from "react";


import AccordionSection from "./AccordionSection";

class Accordion extends Component {

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);

    const openSections = {};
    
    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
  }
  
  handleAccordionOpen = (label) =>{
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

  handleOnClick = (label) => {
    this.handleAccordionOpen(label)
  };
// Bind keyboard behaviors on the main accordion container
handleOnKeyUp = () =>{

}

  render() {
    const { 
      handleOnClick,
      props: { children },
      state: { openSections },
    } = this;

    return (
      <div>
        {children.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={handleOnClick}
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