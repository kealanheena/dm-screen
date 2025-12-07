import React, { Fragment, useEffect, useState } from "react";
import { capitalize, map } from "lodash";

import { OpenInNew, Person } from "@mui/icons-material";
import { CircularProgress, Grid, IconButton, List, ListItem, ListItemText, Typography } from "@mui/material";
import { getPlayerCharacters } from "@/actions/playerCharacter.action";

const ListComponent = ({ type = 'playerCharacters' }) => {
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
					{map(items, (item) => (
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
	)
};

export default ListComponent;