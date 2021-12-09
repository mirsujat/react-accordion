import React, { Component} from "react";

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
      }
    });
  
    this.state = { openSections, selected: null };
    this.navigationKey = {
      tabKey: 13,
      end: 35,
      home: 36,
      up: 38,
      down: 40
    };
  }

  componentDidMount(){}

  componentDidUpdate(){}

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
  handleSelect = (child) =>{
    const {openSections} = this.state;
    this.setState({openSections: {...openSections}, selected: child});
  }

  onClick = (child, i) => {
    this.handleAccordionOpen(child, i);
   
  };
  
  //TODO
  onKeyUp = (e, child) =>{
    let index = this.accordions.indexOf(child);
    let length = this.accordions.length;
    console.log("index: ", length);
  }

  render() {
    const { 
      onClick,
      state: { openSections},
    } = this;

  
    return (
      <div className="Accordion">
        { this.accordions.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            handleClick={onClick}
            handleKeyUp={(e) => this.onKeyUp(e, child)}
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