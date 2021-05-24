import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	title: {
		color: 'white',
		flexGrow: 1,
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
		},
	},
}));

export default function SearchAppBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar color='transparent' position='static'>
				<Toolbar>
					<Typography className={classes.title} variant='h3' noWrap>
						Card Shuffler
					</Typography>

					<div className={classes.search}>
						<form>
							<Button type='submit' style={{ backgroundColor: 'white' }}>
								Shuffle
							</Button>
						</form>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
