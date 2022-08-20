import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./nav.css";
import searchbtn from "../../img/Search-ico.svg";
// import Search from "../search/search";
import {
	Box,
	Typography,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	Button,
	InputBase,
} from "@mui/material";
import { ThemeProvider, styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { NavThemes } from "../themes/index";

const navItems = ["trending", "movies", "series", "watching"];

const Nav = (props) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const {} = NavThemes;
	let history = useHistory();

	const { window } = props;

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				ManiacStreams
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<ThemeProvider theme={NavThemes}>
			<>
				<AppBar component="nav" color="primary">
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							BurgerIcon
						</IconButton>
						<Typography variant="h6" component="div">
							ManiacStreams
						</Typography>
						<Box
							sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1, ml: 5 }}
						>
							{navItems.map((item) => (
								<Button
									key={item}
									color="textColorPrimary"
									sx={{ color: "#fff" }}
									onClick={() => history.push(item === "trending" ? "/" : item)}
								>
									{item}
								</Button>
							))}
						</Box>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase
								placeholder="Search…"
								inputProps={{ "aria-label": "search" }}
							/>
						</Search>
						<Button color="textColorPrimary">register/login</Button>
					</Toolbar>
				</AppBar>
				<Box component="nav">
					<Drawer
						container={container}
						variant="temporary"
						open={mobileOpen}
						onClose={handleDrawerToggle}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": { boxSizing: "border-box", width: "80%" },
						}}
					>
						{drawer}
					</Drawer>
				</Box>
			</>
		</ThemeProvider>
	);
};

export default Nav;

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: "100%",
	[theme.breakpoints.up("sm")]: {
		marginLeft: theme.spacing(1),
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));
