import React, { Component } from "react";


import AccordionSection from "./AccordionSection";

class Accordion extends Component {

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);
    const openSections = {};
    const accordions = props.children;
    accordions.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });
    this.state = { openSections };
    this.NavigationKeys = {
    tabKey: 13,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46
    };
   this.activeLink = React.createRef();
  }
  
  //TODO
  //  componentDidUpdate = () =>{
  //   this.activeLink.focus();
  // }

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

  nextSection = (label) =>{
    let index = this.accordions.indexOf(label);
    if(index < this.accordions.length -1) this.handleAccordionOpen(this.accordions[index + 1])
  }
// Bind keyboard behaviors on the main accordion container
  handleOnKeyUp = (e, lable) =>{
    e.preventDefault();
    let key = e.keyCode;
    switch(key){
      case this.NavigationKeys.tabKey:
        this.handleAccordionOpen(lable);
        break;
      case this.NavigationKeys.right:
        this.nextSection(lable);
        break;

        default:
    }
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
            onKeyUp={e => this.handleOnKeyUp(e, child)}
            ref={el => {if(child.props.label === openSections[child.props.label]) this.activeLink = el}}
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