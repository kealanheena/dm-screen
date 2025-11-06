import React from 'react';
import { map } from 'lodash';
import {
	Button,
	Card,
	CardContent,
	Divider,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import { ArrowRight, LooksOne, ImageNotSupported } from '@mui/icons-material'


function ContinueAsGuest() {
	const guestLimitationsList = [
		{ id: 'limited_saved_screens', text: 'You can only have one save screen', icon: <LooksOne /> },
		{ id: 'cannot_save__images', text: 'You cannot save images',  icon: <ImageNotSupported />}
	];

	return (
		<Card sx={{ width: 'fit-content' }}>
			<CardContent sx={{ p: '2rem 2.5rem !important' }}>
				
				<Grid
					container
					flexDirection="column" 
					justifyContent="space-between"
					sx={{  height: '37vh' }} 
				>
					<Grid
						container
						flexDirection="column" 
						textAlign="center"
						justifyContent="space-between"
					>
						<Typography fontWeight={700}>Continue as a guest</Typography>
	
						<Typography fontWeight={300} fontSize="13px">
							Try it out as a guest!
						</Typography>
					</Grid>

					<Divider />

					<Grid
						container
						flexDirection="column" 
						justifyContent="space-between"
						sx={{  height: '65%' }} 
					>

						<Typography fontWeight={400} fontSize="14px">
							<strong>Important:</strong> guests have some limitations:
						</Typography>

						<List>
							{map(guestLimitationsList, ({ id, text, icon }) => (
								<ListItem 
									key={id}
									dense
									sx={{ p: '4px 0 ' }}
								>
									<ListItemIcon>{icon}</ListItemIcon>
									<ListItemText
										primary={text} 
										sx={{ fontWeight: 400 }}
									/>
								</ListItem>
							))}
						</List>

						<Button 
							variant="contained"
							sx={{
								backgroundColor: '#2F3037', 
								width: '100%'
							}}
						>
							Continue as a guest
							<ArrowRight /> 
						</Button>

					</Grid>

        </Grid>

			</CardContent>
		</Card>
	)
}

export default ContinueAsGuest;