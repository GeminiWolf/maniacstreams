import React, { useLayoutEffect, useState } from "react";
import "./watching.css";
import playbtn from "../../img/play.svg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Box, Typography } from "@mui/material";

const Watching = () => {
	const { id } = useParams();
	const [showDetails, setShowDetails] = useState();

	useLayoutEffect(() => {
		axios.get(`/api/watching/movie/${id}`).then((res) => {
			setShowDetails(res.data);
			console.log("movie top gun", res.data);
		});
	}, [id]);

	return (
		<div className="watching-container">
			<Box mt={10} width="100%" height="100vh">
				<Typography>Watching</Typography>
			</Box>
		</div>
	);
};

export default Watching;
