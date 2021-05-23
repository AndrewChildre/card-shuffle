import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';

import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const useStyles = makeStyles((theme) => ({
  
	grow: {
		flexGrow: 1,
    
		
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block',
            marginRight: 50,
			color: 'white'
		},
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.25),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.55),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'white'
	},
	inputRoot: {
		color: 'white',
	},
	inputInput: {
		
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
}));

export default function PrimarySearchAppBar() {
	const classes = useStyles();
	// const [anchorEl, setAnchorEl] = React.useState(null);
	// const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	// const isMenuOpen = Boolean(anchorEl);
	// const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	// const handleProfileMenuOpen = (event) => {
	// 	setAnchorEl(event.currentTarget);
	// };

	// const handleMobileMenuClose = () => {
	// 	setMobileMoreAnchorEl(null);
	// };

	// const handleMenuClose = () => {
	// 	setAnchorEl(null);
	// 	handleMobileMenuClose();
	// };

	// const handleMobileMenuOpen = (event) => {
	// 	setMobileMoreAnchorEl(event.currentTarget);
	// };


	return (
		<div className={classes.grow}>
			<AppBar  position='static' color='transparent'>
				<Toolbar>
					<Typography className={classes.title} variant='h3' noWrap>
						Card Shuffle
					</Typography>
					<div  className={classes.search}>
						<div className={classes.searchIcon}>
							<SportsEsportsIcon />
						</div>
						<InputBase 
							placeholder='Number of Cards'
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>
			
				</Toolbar>
			</AppBar>
		
		</div>
	);
}
