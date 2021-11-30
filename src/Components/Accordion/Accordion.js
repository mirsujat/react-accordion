import React, { Component } from "react";


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
    this.state = { openSections };
    this.navigationKey = {
      tabKey: 13,
      end: 35,
      home: 36,
      up: 38,
      down: 40
    };
  }

  // helper function
  handleAccordionOpen = (label) =>{
    const { props: { allowMultipleOpen }, 
        state: { openSections } } = this;
    let index = this.accordions.indexOf(label);

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

  goNextAccordion = (accordion)=>{
    let index = this.accordions.indexOf(accordion)
    if(index < this.accordions.length -1){
      let label = this.accordions[index + 1];
      this.handleAccordionOpen(label)
      // console.log("label", this.accordions[index + 1].props.label)
    }
  }
  goPreviousAccordion = (accordion) =>{
    let index = this.accordions.indexOf(accordion)
    if(index > 0){
      this.handleAccordionOpen(this.accordions[index - 1])
    }
  }

  goFirstAccordion = (accordion) =>{
    let index = this.accordions.indexOf(accordion)
    if(index !== 0){
      this.handleAccordionOpen(this.accordions[0])
    }
  }
  goLastAccordion = (accordion) =>{
    let index = this.accordions.indexOf(accordion)
    if(index !== this.accordions.length){

      // this.handleAccordionOpen(this.accordions[this.accordions.length].props.label)
      
    }
  }

  handleOnClick = (label) => {
    this.handleAccordionOpen(label)
  };

// Bind keyboard behaviors on the main accordion container
handleOnKeyUp = (event, accordion) =>{
  event.preventDefault();
  let key = event.keyCode;
  // 33 = Page Up, 34 = Page Down
  let ctrlModifier = (event.ctrlKey && key.match(/33|34/));
  // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
  // 38 = Up, 40 = Down, home= 36, end = 35
  switch(key){
    case this.navigationKey.down:
      this.goNextAccordion(accordion)
      break;
    case this.navigationKey.up:
      this.goPreviousAccordion(accordion)
      break;
    case this.navigationKey.home:
      this.goFirstAccordion(accordion)
      break;
    case this.navigationKey.end:
      this.goLastAccordion(accordion)
      break;
    default:
  }
}
  render() {
    const { 
      handleOnClick,
      state: { openSections },
    } = this;

    console.log("Accordions", this.accordions[1].props.label);
   
    return (
      <div className="Accordion">
        { this.accordions.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={handleOnClick}
            onKeyUp={(e) => this.handleOnKeyUp(e, child)}
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