import React from "react";

import InititiveComponent from "./InititiveComponent";
import ConditionsComponent from "./ConditionsComponent";
import ListComponent from "./ListComponent";
import ImageComponent from "./ImageComponent";

const CardComponent = (type) => {
	switch (type) {
		case 'IMAGE':
			return <ConditionsComponent />
		case 'IMAGE':
			return <ListComponent />
		case 'IMAGE':
			return <ImageComponent />
		default: 
			return <InititiveComponent />
	}
	
};

export default CardComponent;