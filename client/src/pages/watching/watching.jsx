import React, { useLayoutEffect, useState } from "react";
import "./watching.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Grid, Stack, Typography } from "@mui/material";

const Watching = () => {
	const { id } = useParams();
	const [showDetails, setShowDetails] = useState(null);

	useLayoutEffect(() => {
		axios.get(`/api/watching/movie/${id}`).then((res) => {
			setShowDetails(res.data);
			console.log("movie top gun", res.data);
		});
	}, [id]);

	if (!showDetails) return null;

	return (
		<div className="watching-container">
			<Box mt={10} width="100%" height="100vh">
				<Typography>Watching</Typography>
				<Stack direction="row">
					<Box width="50%"></Box>
					<Stack width="50%" direction="column">
						<Typography variant="h5">
							{showDetails.original_title || showDetails.name}
						</Typography>
						<Typography fontSize={14} sx={{ color: "#888" }}>
							{showDetails.vote_average}
						</Typography>
						<Typography>{showDetails.overview}</Typography>
						<Grid container spacing={4} columns={2}>
							<Grid item>
								<Typography>Country:</Typography>
							</Grid>
							<Grid item>
								<Typography>
									{showDetails.production_countries[0].name}
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
