import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromApi";
function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: `linear-gradient(90deg, rgba(76, 175, 80, 1) 0%, rgba(49, 220, 255, 1) 100%)`,
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
