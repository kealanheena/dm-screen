import React, { useState, Fragment } from "react";
import { capitalize, times, map, lowerCase } from "lodash";

import { Close, Diversity3, Edit, OpenInNew, Person, PersonAdd, Search } from "@mui/icons-material";
import { Button, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, InputAdornment, List, ListItem, ListItemText, Skeleton, TextField, Typography } from "@mui/material";

const CardDialog = ({ card, icon }) => {
	const [open, setOpen] = useState<boolean>(false);

	const handleClickOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);



	return (
		<Fragment>
      <IconButton onClick={handleClickOpen}>
				{icon}
			</IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{card ? `Edit ${card.title}` : 'Create player character'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
					<TextField
						autoFocus
						required
						margin="dense"
						id="name"
						name="email"
						label="Email Address"
						type="email"
						fullWidth
						variant="standard"
					/>
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