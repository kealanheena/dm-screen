"use client"

import React, { Fragment, useEffect, useState } from 'react';
import { find, map } from 'lodash';

import { MenuItem, SelectChangeEvent, TextField } from '@mui/material';
import { getSpecies } from '@/actions/species.action';

import { SpeciesType, SubspeciesType } from '@/types';


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

		if (newSelectedSpecies && newSelectedSpecies.subspecies.length !== 0) {
			setSelectedSubspecies(newSelectedSpecies.subspecies[0])
		}
	};

	return (
		<Fragment>
			<TextField
				select
				value={selectedSpecies?.id || null}
				// @ts-expect-error MUI onChange accepts an SelectChangeEvent, however
				// the onChange function here still throws an error which is unfixable
				onChange={onChangeSpecies}
				label="Species"
			>
				{map(species, ({ id, name }) => <MenuItem value={id}>{name}</MenuItem>)}
			</TextField>

			{selectedSpecies && selectedSpecies.subspecies.length !== 0 && (
				<TextField
					select
					value={selectedSubspecies?.id || null}
					onChange={(event) => setSelectedSubspecies(
						find(selectedSpecies.subspecies, ['id', event.target.value]) || null
					)}
					label="Subspecies"
				>
					{map(selectedSpecies.subspecies, ({ id, name }) => (
						<MenuItem value={id}>{name}</MenuItem>
					))}
				</TextField>
			)}
		</Fragment>
	);
}