import { Star } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useLayoutEffect, useState } from "react";
import { imgBaseUrl } from "../../lib/constants";

function HeroManiac() {
	const [show, setShow] = useState({});
	useLayoutEffect(() => {
		fetch(`/api/trending`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data[0]);
				setShow(data[0]);
			})
			.catch((err) => {
				console.log("trending err", err);
			});
	}, []);

	return (
		<Box
			height="100vh"
			bgcolor="GrayText"
			position="relative"
			overflow="hidden"
			m={0}
			p={0}
		>
			<img
				alt="hero"
				width="100%"
				style={{ position: "absolute", left: "0", zIndex: 1 }}
				src={imgBaseUrl + show.backdrop_path}
			/>
			<Box
				sx={{
					zIndex: 2,
					position: "absolute",
					width: "100%",
					height: "100%",
					background:
						"linear-gradient(180deg, rgba(33,37,41,1) 0%, rgba(0,0,0,0) 40%, rgba(33,37,41,1) 100%)",
				}}
			/>
			<Stack
				position="absolute"
				zIndex={3}
				top="50%"
				pl={3}
				sx={{ transform: "translateY(-50%)" }}
				spacing={2}
			>
				<Typography fontWeight={700} fontSize={35}>
					{show.original_title}
				</Typography>
				<Typography>
					<Star />
					{show.vote_average && show.vote_average.toFixed(1)}
				</Typography>
				<Typography width="50%">{show.overview}</Typography>
				<Button
					variant="outlined"
					sx={{
						width: "150px",
						color: "rgba(33,37,41,1)",
						borderColor: "rgba(33,37,41,1)",
						borderRadius: 35,
					}}
					size="medium"
				>
					Watch
				</Button>
			</Stack>
		</Box>
	);
}

export default HeroManiac;
