import React, { useState, Fragment, FC, useContext, useMemo } from "react";

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
import CardDialogField from "./CardDialogField";
import { ScreenContext } from "@/app/context";
import Image from "next/image";

const formSchema = [{
	name: 'Name',
	key: 'name',
	type: 'text',
	default: null,
	isRequired: true,
}, {
	name: 'Url',
	key: 'url',
	type: 'url',
	default: null,
	isRequired: false,
}, {
	name: 'Class',
	key: 'classId',
	type: 'select',
	default: null,
	isRequired: true,
}, {
	name: 'Species',
	key: 'speciesId',
	type: 'select',
	default: null,
	isRequired: true,
}, {
	name: 'Subspecies',
	key: 'subspeciesId',
	type: 'select',
	default: null,
	isRequired: false,
}, {
	name: 'Campiagn',
	key: 'campaignId',
	type: 'select',
	default: null,
	isRequired: false,
}]

const CardDialog = ({ data, icon }: {
	data: undefined | { title: string }
	icon: FC
}) => {
	const { isCustomizing, playerCharacters, classes, species } = useContext(ScreenContext);

	const [open, setOpen] = useState<boolean>(false);

	const [name, setName] = useState<string>(data?.name || '');
	const [url, setUrl] = useState<string>(data?.name || '');
	const [classId, setClassId] = useState(data?.classId || 0);
	const [speciesId, setSpeciesId] = useState(data?.speciesId || 0);
	const [subspeciesId, setSubspeciesId] = useState(data?.subspeciesId || 0);

	const handleClickOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const subspecies = useMemo(() => {
    return (
			find(species, ['id', speciesId]) || {}
		).subspecies;
  }, [species, speciesId]); 

	console.log({ subspecies })

	return (
		<Fragment>
      <IconButton onClick={handleClickOpen}>
				{icon}
			</IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>{data?.id ? `Edit ${formData.title}` : 'Create player character'}</DialogTitle>
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
						fullWidth
						// sx={{ m: 1, width: '3ch' }}
						slotProps={{
							input: {
								startAdornment: <InputAdornment position="start">https://www.dndbeyond.com/characters/</InputAdornment>,
							},
						}}
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
							<MenuItem sx={{ display: 'flex', alignItems: 'center' }} key={key} value={id} >
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
						onChange={(e) => setSpeciesId(e.target.value)}
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

					{subspecies?.length !== 0 && (
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
					)}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
	)
};

export default CardDialog;