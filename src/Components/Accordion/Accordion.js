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
<<<<<<< Updated upstream
   
    this.state = { openSections };
=======
   this.findIndex = this.accordions[0];
    this.labelRef = React.createRef();
    this.setLabelRef = el =>{
        if(this.labelRef ){
          this.labelRef = el 
        }
    }
    this.state = { openSections, selected: null };
>>>>>>> Stashed changes
    this.navigationKey = {
      tabKey: 13,
      end: 35,
      home: 36,
      up: 38,
      down: 40
    };
  }

<<<<<<< Updated upstream
 
=======
  // componentDidUpdate(){
  //   this.labelRef.current.focus();
  // }


  selected = (child, i) =>{
    const newId = [i];
    const index = this.accordions.indexOf(child);
    if(newId[i] === index){
       child = this.labelRef.current.focus();
    }
    
  }
>>>>>>> Stashed changes

   handleAccordionOpen = (label, i) =>{
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
            },
            selected: i 
          });
       }
  }

   toggle = (child, i) => {
    this.handleAccordionOpen(child, i);
    //TODO
<<<<<<< Updated upstream
=======
  
>>>>>>> Stashed changes
  };

  onKeyDown = (e, i, child) =>{
    e.preventDefault();
    const newInd = i;
    const index = this.accordions.indexOf(child);
    if(newInd === index) this.selected(child, i);
  }

  render() {
    const { 
      toggle,
      state: { openSections},
    } = this;

  

  
    return (
      <div className="Accordion">
        { this.accordions.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            toggle={toggle}
<<<<<<< Updated upstream
=======
            onKeyDown={(e) => this.onKeyDown(e, i, child)}
            focusRef={this.labelRef}
>>>>>>> Stashed changes
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