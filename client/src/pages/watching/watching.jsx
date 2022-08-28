import React, { useLayoutEffect, useState } from "react";
import "./watching.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { imgBaseUrl } from "./../../lib/constants";
import { Star } from "@mui/icons-material";

const Watching = () => {
	const { id, type } = useParams();
	const [showDetails, setShowDetails] = useState(null);

	useLayoutEffect(() => {
		axios.get(`/api/watching/${type}/${id}`).then((res) => {
			setShowDetails(res.data);
			console.log("movie top gun", res.data);
		});
	}, [id, type]);

	if (!showDetails) return null;

	return (
		<div className="watching-container">
			<Box my={10} width="100%" height="100vh">
				<Typography>Watching</Typography>
				<Stack direction="row">
					<Stack width="50%">
						<img
							height="340px"
							src={`${imgBaseUrl}${showDetails.poster_path}`}
							style={{ margin: "auto" }}
						/>
					</Stack>
					<Stack spacing={1} width="40%" direction="column">
						<Typography variant="h5">
							{showDetails.original_title || showDetails.name}
						</Typography>
						<Typography fontSize={14} sx={{ color: "#888" }}>
							<Star />
							{showDetails.vote_average}
						</Typography>
						<Typography>{showDetails.overview}</Typography>
						<Grid container rowSpacing={2} columns={4}>
							<Grid item xs={1}>
								<Typography>Country:</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography>
									{showDetails.production_countries[0].name}
								</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography>Genre:</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography>
									{showDetails.genres
										.map((i) => i.name)
										.toString()
										.replaceAll(",", ", ")}
								</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography>Release:</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography>
									{showDetails.release_date || showDetails.first_air_date}
								</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography>Production:</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography>
									{showDetails.production_companies
										.map((i) => i.name)
										.toString()
										.replaceAll(",", ", ")}
								</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography>Release:</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography>
									{showDetails.release_date || showDetails.first_air_date}
								</Typography>
							</Grid>
						</Grid>
					</Stack>
				</Stack>
			</Box>
		</div>
	);
};

export default Watching;
