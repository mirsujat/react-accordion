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
    const selected = this.accordions.find(child => child.props.isSelected) || this.accordions[0].props.label;


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
      state: { openSections, selected } } = this;
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
       if(e.keyCode === 40 && index < length - 1){
       return this.handleSelect( this.accordions[index + 1].props.label);
      }
     console.log("keyCode: ", e.keyCode);
    
   
  }

  render() {
    const {
      onClick,
      state: { openSections, selected },
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