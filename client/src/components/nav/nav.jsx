import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircleRounded } from "@mui/icons-material";
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

const navItems = ["trending", "movies", "series"];

const Nav = (props) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [changeColor, setChangeColor] = useState(false);

	let history = useHistory();

	const { window } = props;

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const changeNavColor = () => {
		if (window.scrollY >= 90) {
			setChangeColor(true);
		} else {
			setChangeColor(false);
		}
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;

	if (typeof window !== "undefined") {
		console.log("halloo");
		window.addEventListener("scroll", changeNavColor);
	}

	const drawer = (
		<Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
			<Typography variant="h6" sx={{ my: 2 }}>
				ManiacStreams
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem
						key={item}
						disablePadding
						onClick={() => history.push(item === "trending" ? "/" : `/${item}`)}
					>
						<ListItemButton sx={{ textAlign: "center" }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
				{/* <ListItem
					disablePadding
					onClick={() => history.push("watching/361743")}
				>
					<ListItemButton sx={{ textAlign: "center" }}>
						<ListItemText primary={"WATCHING"} />
					</ListItemButton>
				</ListItem> */}
			</List>
		</Box>
	);

	return (
		<ThemeProvider theme={NavThemes}>
			<>
				<AppBar component="nav" color={changeColor ? "primary" : "transparent"}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							sx={{ mr: 2, display: { sm: "none" } }}
						>
							<MenuIcon />
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
									onClick={() =>
										history.push(item === "trending" ? "/" : `/${item}`)
									}
								>
									{item}
								</Button>
							))}
							{/* <Button
								color="textColorPrimary"
								sx={{ color: "#fff" }}
								onClick={() => history.push("watching/361743")}
							>
								WATCHING
							</Button> */}
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
						<AccountCircleRounded
							sx={{ display: { sm: "block", md: "none" } }}
							color="textColorPrimary"
						/>
						<Button
							sx={{ display: { xs: "none", md: "block" } }}
							color="textColorPrimary"
						>
							register/login
						</Button>
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
