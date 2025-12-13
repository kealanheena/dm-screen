import React, { Fragment, useEffect, useState } from "react";
import { capitalize, filter, includes, map } from "lodash";

import { Groups, OpenInNew, Person } from "@mui/icons-material";
import { Card, CardContent, CircularProgress, Grid, IconButton, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import { getPlayerCharacters } from "@/actions/playerCharacter.action";
import PlayerCharacterFormDialog from "../PlayerCharacterFormDialog";

const ListComponent = ({ card }: { card: { id: number, title: string }}) => {
	const [search, setSearch] = useState('');
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const data = await getPlayerCharacters();
			
			setItems(data || []);
		};

		try {
			getData();
		} finally {
			setIsLoading(false);
		}
	}, []);

	console.log(items)

	const filteredItems = filter(items, ({ name }) => includes(name, search));

	return (
				<CardContent sx={{ height: '100%'}}>
					<Grid container justifyContent="space-between">
						<Grid display="flex" alignItems="center">
							<Groups color='primary'/>
							<Typography sx={{ pl: 1 }} variant="h6">{card.title}</Typography>
						</Grid>

						<PlayerCharacterFormDialog />
					</Grid>
					<TextField
							placeholder="Search ..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							fullWidth
						/>
					<Grid
						sx={{
							bgcolor: 'background.paper',
							position: 'relative',
							overflow: 'scroll',
							height: '100%',
							maxHeight: '100%',
						}}
					>
						{isLoading ? (
							<Grid display="flex" flexDirection="column" alignItems="center">
								<br/>
								<CircularProgress />
							</Grid>
						) : (
							<List
								sx={{
									'& ul': { padding: 0 },
								}}
							>
								{map(filteredItems, (item) => (
									<ListItem key={`player_character_${item.id}`}>
										<ListItemText
											primary={
												<Grid display="flex">
													<Person />
													<Typography sx={{ pl: 1 }} >{item.name}</Typography>
												</Grid>
											}
											secondary={
												item?.class && (
													<Fragment>
														<Typography component="span" variant="body2">{`class: ${item.class.name}`}</Typography>
														<Typography variant="body2">{`species:
															${item.subspecies?.name ? ` ${capitalize(item.subspecies?.name)} `  : ''}
															${capitalize(item.species?.name)}
														`}</Typography>
														
													</Fragment>
												)
											}
											sx={{ pl: 0.5 }} 
										/>
										{item?.url && (
											<IconButton onClick={() => window.open(item.url, '_blank')}>
												<OpenInNew />
											</IconButton>
										)}
									</ListItem>
								))}
								<br /> 
							</List>
						)}
					</Grid>
			</CardContent>
	)
};

export default ListComponent;