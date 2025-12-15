import React, { useEffect, useState } from "react";

import { MenuItem, TextField } from "@mui/material";
import { getList } from "@/actions/list.action";


type TextFieldSchema = {
	name: string;
	key: string;
	type: string;
	default: null | string;
	isRequired: boolean;
}

type CardDialogFieldProps = {
	value: string;
	schema: TextFieldSchema;
	onChange: Function;
}

const CardDialogField = ({ value, schema, onChange }: CardDialogFieldProps) => {
	// const [items, setItems] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);

	// useEffect(() => {
	// 	const getData = async () => {
	// 		const data = await getList({ type: 'species' });
			
	// 		setItems(data || []);
	// 		setIsLoading(false);
	// 	};

	// 	try {
	// 		getData();
	// 	} catch {
	// 		setIsLoading(false);
	// 	}
	// }, []);


	if (schema.type === 'select') {

		return (
			<TextField
				label={schema.name}
				value={value || ''}
				onChange={onChange}
				required={schema.isRequired}
				select
				size="medium"
				fullWidth
			>
				<MenuItem>Select {schema.name}</MenuItem>
			</TextField>
		);

	}

	return (
		<TextField
			label={schema.name}
			value={value || ''}
			type={schema.type}
			onChange={onChange}
			required={schema.isRequired}
			size="medium"
			fullWidth
		/>
	);
};

export default CardDialogField;