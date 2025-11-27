"use client"

import React, { Fragment, useEffect, useState } from 'react';
import { find, map } from 'lodash';

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { getClasses } from '@/actions/class.action';


interface ClassType {
	id: number;
	name: string;
}

export default function ClassSelect() {
	const [classes, setClasses] = useState<ClassType[]>([]);
	const [selectedClass, setSelectedClass] = useState<ClassType | null>(null);

	useEffect(() => {
		const getClassesData = async () => {
			const classesData = await getClasses() || [];
			 
			setClasses(classesData);
			setSelectedClass(classesData[0] || null);
		}

		getClassesData();
	}, []);

	const onChangeSpecies = (event: SelectChangeEvent) => {
		const newSelectedSpecies = find(classes, ['id', event.target.value]) || null;
		setSelectedClass(newSelectedSpecies);
	};

	return (
		<Fragment>
			<FormControl margin="dense" fullWidth>
				<InputLabel id="species-select">Species</InputLabel>
				<Select
					autoFocus
					labelId="species-select"
					id="species-select"
					value={selectedClass?.id || null}
					// @ts-expect-error MUI onChange accepts an SelectChangeEvent, however
					// the onChange function here still throws an error which is unfixable
					onChange={onChangeSpecies}
					label="Species"
				>
					{map(classes, ({ id, name }) => (
						<MenuItem value={id}>{name}</MenuItem>
					))}
				</Select>
			</FormControl>
		</Fragment>
	);
}