import React, { Component } from 'react';
import AccordionItem from './AccordionItem';
class Accord extends Component {
    constructor(props) {
        super(props);
      
        this.accordions = props.children;
        this.state = {isExpanded: [], selected: [null]};
        // this.focusRef = React.createRef();
    }

    onClick = (id) =>{
    const isExpanded = this.state.isExpanded;
      this.setState({
          isExpanded: {
              ...isExpanded,
              [id] : !isExpanded[id]
          }
      })
    }

    render() {
        const {selected, isExpanded} = this.state;
        return (
           <div className="Accordion">
               {this.accordions.map((child, i) =>(
                   <AccordionItem
                    title={child.props.title}
                    selected={selected}
                    isExpanded={isExpanded}
                    onClick={() => this.onClick(i)}
                    // ref={this.focusRef}
                    index={i}
                    key={i}
                   >
                       {child.props.children}
                   </AccordionItem>
               ))}
           </div> 
        );
    }
}

export default Accord;