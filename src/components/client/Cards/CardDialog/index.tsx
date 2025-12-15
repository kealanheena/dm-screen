import React, { useState, Fragment } from "react";

import {
	Button, 
	Dialog, 
	DialogActions, 
	DialogContent,
	DialogTitle, 
	IconButton, 
	TextField,
} from "@mui/material";
import { map } from "lodash";
import CardDialogField from "./CardDialogField";

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

const CardDialog = ({ formData, icon }: { formData: undefined | Object }) => {
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
					
					{map(formSchema, (schema) => (
						<CardDialogField
							schema={schema}
							value={formDataCopy[schema.key]}
							onChange={(e) => setFormDataCopy({
								...formDataCopy,
								[schema.key]: e.target.value
							})}
						/> 
					))}

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