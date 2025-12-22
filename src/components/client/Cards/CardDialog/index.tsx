import React, { useState, Fragment, FC, useContext } from "react";

import {
	Button, 
	Dialog, 
	DialogActions, 
	DialogContent,
	DialogTitle, 
	IconButton,
	MenuItem,
	TextField, 
} from "@mui/material";
import { map } from "lodash";
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

const CardDialog = ({ formData, icon }: {
	formData: undefined | { title: string }
	icon: FC
}) => {
	const { isCustomizing, playerCharacters, classes, species } = useContext(ScreenContext);

	const [open, setOpen] = useState<boolean>(false);
	const [formDataCopy, setFormDataCopy] = useState(formData || {});

	const handleClickOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	return (
		<Fragment>
      <IconButton onClick={handleClickOpen}>
				{icon}
			</IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>{formData ? `Edit ${formData.title}` : 'Create player character'}</DialogTitle>
        <DialogContent>

					<TextField
						label="Class"
						value={formDataCopy.classId || 0}
						onChange={(e) => setFormDataCopy({
							...formDataCopy,
							classId: e.target.value
						})}
						required
						select
						size="medium"
						fullWidth
						slotProps={{
							select: {
								sx: {
									"& .MuiSelect-select": {
										display: 'flex',
										alignItems: 'center'
									},
								},
							},
						}}
					>
						<MenuItem value={0}>Select class</MenuItem>

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
						label="Species"
						value={formDataCopy.speciesId || 0}
						onChange={(e) => setFormDataCopy({
							...formDataCopy,
							speciesId: e.target.value
						})}
						required
						select
						size="medium"
						fullWidth
						slotProps={{
							select: {
								sx: {
									"& .MuiSelect-select": {
										display: 'flex',
										alignItems: 'center'
									},
								},
							},
						}}
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
{/* 					
					{map(formSchema, (schema) => (
						<CardDialogField
							schema={schema}
							value={formDataCopy[schema.key]}
							onChange={(e) => setFormDataCopy({
								...formDataCopy,
								[schema.key]: e.target.value
							})}
						/> 
					))} */}

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