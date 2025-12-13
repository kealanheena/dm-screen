import React from "react";

import InititiveComponent from "./InitiativeComponent";
import ConditionsComponent from "./ConditionsComponent";
import ListComponent from "./ListComponent";
import ImageComponent from "./ImageComponent";

const CardComponent = ({ type, card }) => {
	switch (type) {
		case 'INITATIVE':
			return <InititiveComponent card={card} />
		case 'LIST':
			return <ListComponent card={card} />
		case 'IMAGE':
			return <ImageComponent card={card} />
		default: 
			return <ConditionsComponent card={card} />
	}
	
};

export default CardComponent;