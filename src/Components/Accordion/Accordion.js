import React, { Component} from "react";

import AccordionSection from "./AccordionSection";




class Accordion extends Component {

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);
    const openSections = {};

    this.accordions = props.children;
     this.accordions.forEach((child, i) => {
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

  componentDidMount(){
    // this.classList = this.accordions.slice.call(document.querySelectorAll(".Accordion-trigger"));
    // console.log("classList: ", this.classList);
  }

  componentDidUpdate(){
    
  }

  select = () =>{

  }

  setFocus = () =>{
    this.setState({selected: true})
  }
  setBlur = () => {
    this.setState({selectd: false})
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

  onClick = (child, i) => {
    this.handleAccordionOpen(child, i);

  };


  render() {
    const { 
      onClick,
      state: { openSections},
    } = this;

  
    // console.log("classList: ", this.classList);
   
  
    return (
      <div className="Accordion">
        { this.accordions.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            handleClick={onClick}
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