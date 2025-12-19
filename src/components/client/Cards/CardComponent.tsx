import React from "react";

import InititiveComponent from "./InitiativeComponent";
import ConditionsComponent from "./ConditionsComponent";
import ListComponent from "./ListComponent";
import ImageComponent from "./ImageComponent";

const CardComponent = ({ type, card }: {
	type: string;
	card: { id: number; title: string; listConent: string | null; type: string }
}) => {
	switch (type) {
		case 'INITATIVE':
			return <InititiveComponent />
		case 'LIST':
			return <ListComponent card={card} />
		case 'IMAGE':
			return <ImageComponent card={card} />
		default: 
			return <ConditionsComponent card={card} />
	}
	
};

export default CardComponent;