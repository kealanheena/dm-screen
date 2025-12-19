import React, { Fragment, useContext, useEffect, useState } from "react";
import { capitalize, filter, includes, times, map, lowerCase } from "lodash";

import { Close, Diversity3, Edit, OpenInNew, Person, PersonAdd, Search } from "@mui/icons-material";
import { CardContent, Grid, IconButton, InputAdornment, List, ListItem, ListItemText, Skeleton, TextField, Typography } from "@mui/material";
import { getPlayerCharacters } from "@/actions/playerCharacter.action";
import { ScreenContext } from "@/app/context";
import CardDialog from "./CardDialog";

const ListComponent = ({ card }: { card: { id: number; title: string; listConent: string | null; type: string }}) => {
	const { isCustomizing } = useContext(ScreenContext);

	const [search, setSearch] = useState('');
	const [showSearch, setShowSearch] = useState(false);

	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const data = await getPlayerCharacters();
			
			setItems(data || []);
			setIsLoading(false);
		};

		try {
			getData();
		} catch {
			setIsLoading(false);
		}
	}, []);

	const onClickShowSearch = () => {
		setShowSearch(!showSearch)
		setSearch('');
	}


	const filteredItems = filter(items, ({ name }) => includes(name, search));

	return (
		<CardContent sx={{ height: '100%'}}>
			<Grid container justifyContent="space-between">
				<Grid display="flex" alignItems="center">
					<Diversity3 color='primary'/>
					<Typography sx={{ pl: 1 }} variant="h6">{card.title}</Typography>
				</Grid>

				<Grid display="flex" alignItems="center">
					{!showSearch && (
						<IconButton disabled={isCustomizing} onClick={onClickShowSearch} color={showSearch ? 'primary' : undefined}>
							<Search />
						</IconButton>
					)}

					{isCustomizing ? (
						<CardDialog formData={{}} icon={<Edit />} /> 
					) : (
						<CardDialog icon={<PersonAdd />} />
					)}
				</Grid>
		
			</Grid>


				{showSearch && !isCustomizing && (
					<TextField
						placeholder={`Search ${lowerCase(card.listContent)}s ...`}
						autoFocus
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						fullWidth
						slotProps={{
							input: {
								style: { paddingLeft: 8 },
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={onClickShowSearch}>
											<Close fontSize="small" />
										</IconButton>
									</InputAdornment>
								),
								startAdornment: (
									<InputAdornment position="start">
										<Search />
									</InputAdornment>
								)
							}
						}}
					/>
				)}

			<Grid
				sx={{
					bgcolor: 'background.paper',
					position: 'relative',
					overflow: 'scroll',
					height: '100%',
					maxHeight: '100%',
				}}
			>
				{isLoading && items.length === 0 ? (
					<Fragment>
						{times(10, () => (
							<Skeleton
								variant="rounded"
								width="100%"
								height={80}
								sx={{ margin: '8px 0'}}
							/>
						))}
					</Fragment>
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