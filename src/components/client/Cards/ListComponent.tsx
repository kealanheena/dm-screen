'use client'

import React, { Fragment, useContext, useEffect, useState } from "react";
import { capitalize, filter, includes, times, map, lowerCase, find } from "lodash";

import { Close, Diversity3, Edit, OpenInNew, Person, PersonAdd, Search } from "@mui/icons-material";
import { CardContent, Grid, IconButton, InputAdornment, List, ListItem, ListItemText, Skeleton, TextField, Tooltip, Typography } from "@mui/material";
import { ScreenContext } from "@/app/context";
import CardDialog from "./CardDialog";
import Image from "next/image";

const ListComponent = ({ card }: { card: { id: number; title: string; listContent: string | null; type: string }}) => {
	const { isCustomizing, playerCharacters, classes, species } = useContext(ScreenContext);

	const [search, setSearch] = useState('');
	const [showSearch, setShowSearch] = useState(false);	

	const onClickShowSearch = () => {
		setShowSearch(!showSearch)
		setSearch('');
	}

	console.log({ playerCharacters })


	const filteredItems = filter(playerCharacters, ({ name }) => includes(name, search));

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
				<List
					sx={{
						'& ul': { padding: 0 },
					}}
				>
					{map(filteredItems, ({ id, name, url, classId, speciesId, subspeciesId }) => {
						const characterClass = find(classes, ['id', classId]);
						const characterSpecies = find(species, ['id', speciesId]);
						const characterSubspecies = find(characterSpecies.subSpecies, ['id', subspeciesId]);

						console.log({
							characterClass,
							characterSpecies,
							characterSubspecies
						})

						return (
							<ListItem key={`player_character_${id}`}>
								<Tooltip title={characterClass.name}>
									<Image
										alt={`${characterClass.key} class icon`}
										src={`/icons/classes/${characterClass.key}.jpeg`}
										style={{ borderRadius: '2px' }}
										height="35"
										width="35"
									/>
								</Tooltip>
								<ListItemText
									primary={<Typography >{name}</Typography>}
									secondary={
										characterSpecies && (
											<Fragment>
												<Typography variant="body2">{`species:
													${characterSubspecies?.name ? ` ${capitalize(characterSubspecies.name)} `  : ''}
													${capitalize(characterSpecies?.name)}
												`}</Typography>
											</Fragment>
										)
									}
									sx={{ pl: 1, m: 0 }} 
								/>
								{url && (
									<IconButton onClick={() => window.open(url, '_blank')}>
										<OpenInNew />
									</IconButton>
								)}
							</ListItem>
						)
					})}
					<br /> 
				</List>
			</Grid>
		</CardContent>
	)
};

export default ListComponent;