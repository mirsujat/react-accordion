import React, { Component } from 'react';
import AccordionItem from './AccordionItem';
class Accord extends Component {
    constructor(props) {
        super(props);
        this.accordions = props.children;
        this.state = {isExpanded: false  };
    }
    componentDidMount = () => {
        let isExpanded = this.accordions.find(accordion => accordion.props.isExpanded) 
        || this.accordions[0]
        this.setState({isExpanded})
    }
    onClick = (accordion) =>{
        this.setState({isExpanded: accordion})
    }

    render() {
        return (
           <div className="Accordion">
               {this.accordions.map((childe, i) =>(
                   <AccordionItem
                    title={childe.props.title}
                    isExpanded={() => childe === this.state.isExpanded}
                    onClick={() => this.onClick(childe)}
                    index={i}
                    key={i}
                   >
                       {childe.props.children}
                   </AccordionItem>
               ))}
           </div> 
        );
    }
}

export default Accord;