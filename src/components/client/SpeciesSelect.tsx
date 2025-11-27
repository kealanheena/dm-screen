"use client"

import React, { Fragment, useEffect, useState } from 'react';
import { find, map } from 'lodash';

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { getSpecies } from '@/actions/species.action';


interface SubspeciesType {
	id: number;
	name: string;
}

interface SpeciesType {
	id: number;
	name: string;
	subSpecies: SubspeciesType[];
}

export default function SpeciesSelect() {
	const [species, setSpecies] = useState<SpeciesType[]>([]);
	const [selectedSpecies, setSelectedSpecies] = useState<SpeciesType | null>(null);
	const [selectedSubspecies, setSelectedSubspecies] = useState<SubspeciesType | null>(null);

	useEffect(() => {
		const getSpeciesData = async () => {
			const speciesData = await getSpecies() || [];
			 
			setSpecies(speciesData);
			setSelectedSpecies(speciesData[0] || null)
		}

		getSpeciesData();
	}, []);

	const onChangeSpecies = (event: SelectChangeEvent) => {
		const newSelectedSpecies = find(species, ['id', event.target.value]) || null;
		setSelectedSpecies(newSelectedSpecies);

		if (newSelectedSpecies && newSelectedSpecies.subSpecies.length !== 0) {
			setSelectedSubspecies(newSelectedSpecies.subSpecies[0])
		}
	};

	return (
		<Fragment>
			<FormControl margin="dense" fullWidth>
				<InputLabel id="species-select">Species</InputLabel>
				<Select
					autoFocus
					labelId="species-select"
					id="species-select"
					value={selectedSpecies?.id || null}
					// @ts-expect-error MUI onChange accepts an SelectChangeEvent, however
					// the onChange function here still throws an error which is unfixable
					onChange={onChangeSpecies}
					label="Species"
				>
					{map(species, ({ id, name }) => (
						<MenuItem value={id}>{name}</MenuItem>
					))}
				</Select>
			</FormControl>

			{selectedSpecies && selectedSpecies.subSpecies.length !== 0 && (
				<FormControl margin="dense" fullWidth>
					<InputLabel id="subspecies-select">Subspecies</InputLabel>
					<Select
						labelId="subspecies-select"
						id="subspecies-select"
						value={selectedSubspecies?.id || null}
						onChange={(event) => setSelectedSubspecies(
							find(selectedSpecies.subSpecies, ['id', event.target.value]) || null
						)}
						label="Subspecies"
					>
						{map(selectedSpecies.subSpecies, ({ id, name }) => (
							<MenuItem value={id}>{name}</MenuItem>
						))}
					</Select>
				</FormControl>
			)}
		</Fragment>
	);
}