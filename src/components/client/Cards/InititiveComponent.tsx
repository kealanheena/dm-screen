import React, { useEffect, useState } from "react";
import { map, reverse, sortBy } from "lodash";

import { Bloodtype, OpenInNew } from "@mui/icons-material";
import { Card, CardContent, Divider, Grid, IconButton, List, ListItem, ListItemText, Tooltip, Typography } from "@mui/material";
import { getPlayerCharacters } from "@/actions/playerCharacter.action";

const InititiveComponent = () => {
	const [search, setSearch] = useState('');
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	useEffect(() => {
		const getData = async () => {
			const data = await getPlayerCharacters();

			const newItems = map(data || [], (oldData) => {
				const max = 20;

				const initiative = Math.floor(Math.random() * max);

				return {
					...oldData,
					initiative,
					maxHealth: 30,
					currentHealth: Math.floor(Math.random() * 23)
				}
			})
			
			setItems(newItems);
		};

		try {
			getData();
		} finally {
			setIsLoading(false);
		}
	}, []);

	return (
		<Grid
			sx={{
				bgcolor: 'background.paper',
				position: 'relative',
				overflow: 'scroll',
				height: '100%',
				maxHeight: '100%',
			}}
		>
				<List
					sx={{
						'& ul': { padding: 0 },
					}}
				>
					{map(reverse(sortBy(items, ['initiative'])), (item) => (
						<ListItem key={`condition_${item.name}`} sx={{ display: 'flex', justifyContent: 'space-between' }}>
							<Grid display="flex">
								<Grid display="flex" flexDirection="column" alignItems="center">
									<Typography>Init</Typography>
									<Typography>{item.initiative}</Typography>
								</Grid>

								<Divider sx={{ p: 1 }} orientation="vertical" variant="middle" flexItem />

								<Typography sx={{ pl: 1 }} >{item.name}</Typography>
								{(item.currentHealth/item.maxHealth) <= 0.5 && (
									<Tooltip title="Bloodied">
										<Bloodtype sx={{ pl: 1 }}  color="error"/>
									</Tooltip>
								)}
							</Grid>

							<Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center">
								<Typography>HP</Typography>
								<Typography>{item.currentHealth}/{item.maxHealth}</Typography>
							</Grid>
						</ListItem>
					))}
					<br /> 
				</List>
		</Grid>
	)
};

export default InititiveComponent;