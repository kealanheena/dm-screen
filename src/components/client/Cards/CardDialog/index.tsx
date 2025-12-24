import React, { useState, Fragment, FC, useContext, useMemo, useEffect } from "react";

import {
	Button, 
	Dialog, 
	DialogActions, 
	DialogContent,
	DialogTitle, 
	IconButton,
	InputAdornment,
	MenuItem,
	TextField, 
} from "@mui/material";
import { find, map } from "lodash";
import { ScreenContext } from "@/app/context";
import Image from "next/image";


const CardDialog = ({ setOpenItem, data }: {
	setOpenItem: Function;
	data: undefined | { title: string }
}) => {
	const { playerCharacters, classes, species } = useContext(ScreenContext);

	const [name, setName] = useState<string>(data?.name || '');
	const [url, setUrl] = useState<string>(data?.url || '');
	const [classId, setClassId] = useState(data?.classId || 0);
	const [speciesId, setSpeciesId] = useState(data?.speciesId || 0);
	const [subspeciesId, setSubspeciesId] = useState(data?.subspeciesId || 0);

	const subspecies = useMemo(() => {
    return (
			find(species, ['id', speciesId]) || {}
		).subspecies;
  }, [species, speciesId]); 


	useEffect(() => {
		setName(data?.name || '');
		setUrl(data?.url || '');
		setClassId(data?.classId || 0);
		setSpeciesId(data?.speciesId || 0);
		setSubspeciesId(data?.subspeciesId || 0);
	}, [data])
	

	return (
		<Dialog open={!!data} onClose={() => setOpenItem(null)} fullWidth>
			<DialogTitle>{data?.id ? `Edit ${data.name}` : 'Create player character'}</DialogTitle>
			<DialogContent>

				<TextField
					label="Character name"
					value={name || ''}
					onChange={(e) => setName(e.target.value)}
					required
					fullWidth
				/>

				<TextField
					label="Character url (D&D Beyond)"
					value={url || ''}
					onChange={(e) => setUrl(e.target.value)}
					placeholder="https://www.dndbeyond.com/characters/123456789"
					fullWidth
				/>

				<TextField
					label="Class"
					value={classId || 0}
					onChange={(e) => setClassId(e.target.value)}
					required
					select
					fullWidth
				>
					<MenuItem value={0}>Select character class</MenuItem>

					{map(classes, ({ id, name, key }) => (
						<MenuItem sx={{ display: 'flex', alignItems: 'center' }} key={key} value={id}>
							<Image
								alt={`${key} class icon`}
								src={`/icons/classes/${key}.jpeg`}
								style={{ borderRadius: '4px', marginRight: '8px' }}
								height="25"
								width="25"
							/>
							{name}
						</MenuItem>
					))}
				</TextField>

				<TextField
					label="Character species"
					value={speciesId || 0}
					onChange={(e) => {
						setSubspeciesId(0)
						setSpeciesId(e.target.value)
					}}
					required
					select
					fullWidth
				>
					<MenuItem value={0}>Select species</MenuItem>

					{map(species, ({ id, name, key }) => (
						<MenuItem sx={{ display: 'flex', alignItems: 'center' }} key={key} value={id} >
							<Image
								alt={`${key} class icon`}
								src={`/icons/species/${key}.png`}
								style={{ borderRadius: '4px', marginRight: '8px' }}
								height="25"
								width="25"
							/>
							{name}
						</MenuItem>
					))}
				</TextField>

				{subspecies?.length ? (
					<TextField
						label="Character subspecies"
						value={subspeciesId || 0}
						onChange={(e) => setSubspeciesId(e.target.value)}
						required
						select
						fullWidth
					>
						<MenuItem value={0}>Select subspecies</MenuItem>

						{map(subspecies, ({ id, name, key }) => (
							<MenuItem sx={{ display: 'flex', alignItems: 'center' }} key={key} value={id} >
								{/* <Image
									alt={`${key} class icon`}
									src={`/icons/species/${key}.png`}
									style={{ borderRadius: '4px', marginRight: '8px' }}
									height="25"
									width="25"
								/> */}
								{name}
							</MenuItem>
						))}
					</TextField>
				) : <div />}

			</DialogContent>
			<DialogActions>
				<Button onClick={() => setOpenItem(null)}>Cancel</Button>
				<Button variant="contained">
					Create
				</Button>
			</DialogActions>
		</Dialog>
	)
};

export default CardDialog;