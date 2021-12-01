import React, { Component } from 'react';
import AccordionItem from './AccordionItem';
class Accord extends Component {
    constructor(props) {
        super(props);
      
        this.accordions = props.children;
        this.state = {isExpanded : false};
    }
    componentDidMount = () => {
        let isExpanded = !!this.accordions.find(accordion => accordion.props.isExpanded) 
        || this.accordions[0];
        this.setState({isExpanded})
    }
    onClick = (title) =>{
        this.setState({isExpanded: title})
    }

    render() {
        return (
           <div className="Accordion">
               {this.accordions.map((child, i) =>(
                   <AccordionItem
                    title={child.props.title}
                    isExpanded={child === this.state.isExpanded}
                    onClick={() => this.onClick(child)}
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