'use client'

import React, { Fragment, useContext, useEffect, useState } from "react";
import { capitalize, filter, includes, times, map, lowerCase } from "lodash";

import { Close, Diversity3, Edit, OpenInNew, Person, PersonAdd, Search } from "@mui/icons-material";
import { CardContent, Grid, IconButton, InputAdornment, List, ListItem, ListItemText, Skeleton, TextField, Tooltip, Typography } from "@mui/material";
import { getPlayerCharacters } from "@/actions/playerCharacter.action";
import { ScreenContext } from "@/app/context";
import CardDialog from "./CardDialog";
import Image from "next/image";

const ListComponent = ({ card }: { card: { id: number; title: string; listContent: string | null; type: string }}) => {
	const { isCustomizing, playerCharacters } = useContext(ScreenContext);

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
					{map(filteredItems, (item) => (
						<ListItem key={`player_character_${item.id}`}>
							<ListItemText
								primary={
									<Grid display="flex" alignItems="center">
										<Tooltip title={item.class.name}>
											<Image
												alt={`${item.class.key} class icon`}
												src={`/icons/classes/${item.class.key}.jpeg`}
												style={{ borderRadius: '2px' }}
												height="25"
												width="25"
											/>
										</Tooltip>
										<Typography sx={{ pl: 1 }} >{item.name}</Typography>
									</Grid>
								}
								secondary={
									item?.class && (
										<Fragment>
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
			</Grid>
		</CardContent>
	)
};

export default ListComponent;