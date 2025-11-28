"use client"

import React, { useEffect, useState } from 'react';
import { find, map } from 'lodash';

import { MenuItem, SelectChangeEvent, TextField } from '@mui/material';
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

	const onChangeClass = (event: SelectChangeEvent) => {
		const newSelectedSpecies = find(classes, ['id', event.target.value]) || null;
		setSelectedClass(newSelectedSpecies);
	};

	return (
		<TextField
			select
			value={selectedClass?.id || null}
			// @ts-expect-error MUI onChange accepts an SelectChangeEvent, however
			// the onChange function here still throws an error which is unfixable
			onChange={onChangeClass}
			label="Class"
		>
			{map(classes, ({ id, name }) => (
				<MenuItem value={id}>{name}</MenuItem>
			))}
		</TextField>
	);
}