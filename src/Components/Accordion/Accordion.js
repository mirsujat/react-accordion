import React, { Component } from "react";

import AccordionSection from "./AccordionSection";




class Accordion extends Component {

  static defaultProps = {
    allowMultipleOpen: false,
  };

  constructor(props) {
    super(props);
    const openSections = {};
    const selected = null;
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
      // if (child.props.isSelected) {
      //   openSections[child.props.label] = true;
      // }

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

  componentDidMount() {
    let selected = this.accordions.find(child => child.props.isSelected);
    this.setState({ selected })
  }

  handleSelect = (child) => {
    this.setState({ selected: child });
  }

  onClick = (child, i) => {
    this.handleSelect(child)
    this.handleAccordionOpen(child, i);
  };


  onKeyUp = (e, child, label) => {
    let index = this.accordions.indexOf(child);
    let length = this.accordions.length;
    if (e.keyCode === 9) {
      this.handleSelect(label);
    }
    if (e.keyCode === 40) {
      this.handleSelect(this.accordions[index + 1].props.label);
    }
    // console.log("index: ", e.currentTarget);
  }

  render() {
    const {
      onClick,
      state: { openSections, selected },
    } = this;

    console.log("This labelRef: ", this.labelRef);
    console.log("Accordions: ", this.accordions[0].props.label);
    return (
      <div className="Accordion">
        {this.accordions.map((child, i) => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            isSelected={child === this.state.selected}
            label={child.props.label}
            handleClick={onClick}
            handleKeyUp={(e) => this.onKeyUp(e, child, child.props.label)}
            labelRef={(el) => {
              if (child === this.state.selected) {
                this.labelRef = el
              }
            }}

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