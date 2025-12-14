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

const formSchema = [{
	name: 'Name',
	key: 'name',
	default: null,
	isRequired: true,
},  {
	name: 'Url',
	key: 'url',
	default: null,
	isRequired: false,
}, {
	name: 'Class',
	key: 'classId',
	default: null,
	isRequired: true,
}, {
	name: 'Species',
	key: 'speciesId',
	default: null,
	isRequired: true,
}, {
	name: 'Subspecies',
	key: 'subspeciesId',
	default: null,
	isRequired: false,
}, {
	name: 'Campiagn',
	key: 'campaignId',
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
					
					{map(formSchema, ({ name, key, isRequired }) => (
						<TextField
							label={name}
							value={formDataCopy[key] || ''}
							onChange={(e) => setFormDataCopy({
								...formDataCopy,
								[key]: e.target.value
							})}
							type=""
							required={isRequired}
							size="medium"
							fullWidth
						/>
					))}

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
	)
};

export default CardDialog;