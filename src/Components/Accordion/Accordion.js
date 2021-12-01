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
    this.state = { openSections, selected: false };
    this.navigationKey = {
      tabKey: 13,
      end: 35,
      home: 36,
      up: 38,
      down: 40
    };
    this.elementRef = React.createRef();
  }

 

  componentDidMount = () =>{
    let selected = this.accordions.find(accord => accord.props.isOpen) 
    || this.accordions[0];
    this.setState({selected})
  }
   componentDidUpdate = () =>{
    this.elementRef.current.focus();
  }

  // helper function
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

  selected = (accordion) =>{
    this.setState({selected: accordion})
  }

  goNext = (accordion) =>{
    let accordions = this.accordions;
    let index = accordions.indexOf(accordion);
    let length = accordions.length;
    if(index < length - 1 ) this.selected(accordions[index + 1]);
    
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
      handleOnClick,
      onKeyUp,
      state: { openSections },
    } = this;
   
    return (
      <div className="Accordion">
        { this.accordions.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={handleOnClick}
            onKeyUp={onKeyUp}
            key={i}
            index={i}
            activeLink={this.elementRef}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    );
  }
}

export default Accordion;