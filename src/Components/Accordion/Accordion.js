import React, { Component } from "react";

import AccordionSection from "./AccordionSection";




class Accordion extends Component {

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);
    const openSections = {};
    this.accordions = props.children || [];
    this.accordions.forEach((child, i) => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
    }});
    const selected = this.accordions.find(child => child.props.isSelected);

    this.state = { openSections, selected };
    this.navigationKey = {
      tabKey: 13,
      end: 35,
      home: 36,
      up: 38,
      down: 40
    };

  }

  handleAccordionOpen = (label, i) => {
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

  handleSelect = (child) => {
    this.setState({ selected: child });
  }

  onClick = (child, i) => {
    this.handleSelect(child)
    this.handleAccordionOpen(child, i);
  };

//TODO
  onKeyUp = (e, children) => {
    e.preventDefault();
    let index = this.accordions.findIndex(child => child.props.label === children)
    let length = this.accordions.length;
    
    if(e.keyCode === 9){
      this.handleSelect( this.accordions[index].props.label);
    }
    //UpArrow
    if((e.keyCode === 38) && index > 0){
      return this.handleSelect( this.accordions[index - 1].props.label);
    }
    //PageDown
    if((e.keyCode === 34) && index < length -1){
      return this.handleSelect( this.accordions[index + 1].props.label);
    }
    //if it was last index then move focus onto the first index
    if((e.keyCode === 34) && index  === length - 1){
      return this.handleSelect( this.accordions[0].props.label);
    }
    //PageUp
    if((e.keyCode === 33) && index < length - 1){
      return this.handleSelect( this.accordions[index - 1].props.label);
    }
   
    //DownArrow
    if((e.keyCode === 40) && index < length - 1){
      return this.handleSelect( this.accordions[index + 1].props.label);
    }
    //if it was last index then move focus onto the first index
    if((e.keyCode === 40) && index === length - 1){
      return this.handleSelect( this.accordions[0].props.label);
    }
 
    //Home
    if(e.keyCode === 36 && index > 0 ){
      return this.handleSelect( this.accordions[0].props.label);
    }
    //End
    if(e.keyCode === 35 && index !== length - 1  ){
      return this.handleSelect( this.accordions[length-1].props.label);
    }
    console.log("keyCode: ", e.keyCode);
  }

  render() {
    const {
      onClick,
      state: { openSections },
    } = this;

  return (
      <div className="Accordion">
        {this.accordions.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            isSelect={child.props.label === this.state.selected}
            label={child.props.label}
            handleClick={onClick}
            handleKeyUp={(e) => this.onKeyUp(e, child.props.label)}
            key={i}
            index={i}
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