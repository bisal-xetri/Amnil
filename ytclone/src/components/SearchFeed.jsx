import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "../components";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { useEffect, useState } from "react";
function SearchFeed() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => {
        setVideos(data.items || []);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
      });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Result For:{" "}
        <span style={{ color: "#f31530" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}

export default SearchFeed;
