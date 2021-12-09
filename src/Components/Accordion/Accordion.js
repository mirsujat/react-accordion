import React, { Component} from "react";

import AccordionSection from "./AccordionSection";




class Accordion extends Component {

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);
    const openSections = {};
    const selected = { label: null };
     this.labelRef = React.createRef();
    // this.setLabelRef = el =>{this.labelRef = el}
    // this.focusLabelRef = () =>{
    //   if(this.labelRef) this.labelRef.focus();
    // }
    
    this.accordions = props.children || [];
     this.accordions.forEach((child, i) => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
      if (child.props.isSelected) {
        selected.label = [child.props.label];
        
      }
    });
   
    this.state = { openSections, selected };
    this.navigationKey = {
      tabKey: 13,
      end: 35,
      home: 36,
      up: 38,
      down: 40
    };

  }


  // componentDidUpdate(){
  //   this.focusLabelRef();
  // }

   handleAccordionOpen = (label, i) =>{
    const { props: { allowMultipleOpen }, 
        state: { openSections, selected } } = this;
        const isOpen = !!openSections[label];
        const isSelected = !!selected[label];
    

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
            selected: {
              label : label
            }
          });
       }
      
  }
  handleSelect = (label) =>{
    const {selected} = this.state;
    if(label === selected.label){
      this.setState({ selected: {label}});
    }
   
  }

  onClick = (child, i) => {
    this.handleAccordionOpen(child, i);
  };
  
  //TODO
  onKeyUp = (e, child) =>{
    let index = this.accordions.indexOf(child);
    let length = this.accordions.length;
    if(e.keyCode === 9){
      this.handleSelect(child);
    }
    if(e.keyCode === 40){
      this.handleSelect(this.accordions[index + 1]);
    }
    // console.log("index: ", e.currentTarget);
  }

  render() {
    const { 
      onClick,
      state: { openSections, selected},
    } = this;

  console.log("This labelRef: ", this.labelRef);
    return (
      <div className="Accordion">
        { this.accordions.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            isSelect={!!selected[child.props.label]}
            label={child.props.label}
            handleClick={onClick}
            handleKeyUp={(e) => this.onKeyUp(e, child.props.label)}
            labelRef={(el) => {
              if(child.props.label === this.state.selected.label){
                this.labelRef = el
              }
            }}
            setFocus={this.focusLabelRef}
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