import React from "react";
import { format } from "date-fns";
import Bar from "../../components/progressbar/progressbar";
import { Box, Grid, Typography } from "@mui/material";
import "./trending.css";
import { HeroManiac } from "../../components";
import { useHistory } from "react-router-dom";

const Trending = (props) => {
	const { push } = useHistory();

	if (!props.loaded) {
		return (
			<div className="nothing">
				<div>Nothing to show...</div>
			</div>
		);
	} else {
		return (
			<Box className="trending">
				<HeroManiac />
				<Grid
					container
					columns={{ base: 1, xs: 2, sm: 4, md: 6, lg: 6 }}
					spacing={2}
					minHeight="50vh"
				>
					{props.shows.map((show) => (
						<Grid key={show.id} item xs={1} minHeight="250px" display="block">
							<Box
								onClick={() => push(`watching/${show.media_type}/${show.id}`)}
								width="167px"
								m="auto"
							>
								<img
									src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
									onError={(ev) =>
										(ev.target.src =
											"https://www.diotron.co.za/wp-content/uploads/2020/01/placeholder.png")
									}
									style={{ borderRadius: "8px" }}
									alt={show.title ? show.title : show.name}
									height="250px"
									width="100%"
								/>
								<Typography noWrap>
									{show.title ? show.title : show.name}
								</Typography>
								<Typography>
									{show.release_date
										? format(new Date(show.release_date), "yyyy")
										: null}
									{show.first_air_date
										? format(new Date(show.first_air_date), "yyyy")
										: null}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		);
	}
};

export default Trending;

{
	/* <Box className="trending-shows-container">
					{props.shows.map((shows) => (
						<Box key={shows.id} className="trending-shows">
							<Box className="trending-shows-images">
								<img
									src={`https://image.tmdb.org/t/p/original${shows.poster_path}`}
									onError={(ev) =>
										(ev.target.src =
											"https://www.diotron.co.za/wp-content/uploads/2020/01/placeholder.png")
									}
									alt={shows.title ? shows.title : shows.name}
									className="trending-shows-images-poster"
								/>
								<Box className="rating-bar">
									<Bar rate={(shows.vote_average * 10).toFixed(0)} />
								</Box>
							</Box>
							<p className="trending-shows-images-title">
								{shows.title ? shows.title : shows.name}
								<br />
								{shows.release_date
									? format(new Date(shows.release_date), "yyyy")
									: null}
								{shows.first_air_date
									? format(new Date(shows.first_air_date), "yyyy")
									: null}
							</p>
						</Box>
					))}
				</Box> */
}
