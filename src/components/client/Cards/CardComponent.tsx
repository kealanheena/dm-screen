import React from "react";

import InititiveComponent from "./InititiveComponent";
import ConditionsComponent from "./ConditionsComponent";
import ListComponent from "./ListComponent";
import ImageComponent from "./ImageComponent";

const CardComponent = ({ type }) => {
	switch (type) {
		case 'INITATIVE':
			return <InititiveComponent />
		case 'LIST':
			return <ListComponent />
		case 'IMAGE':
			return <ImageComponent />
		default: 
			return <ConditionsComponent />
	}
	
};

export default CardComponent;