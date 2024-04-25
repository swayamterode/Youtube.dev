import { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { CHANNEL_INFO } from "../utils/constant";
import VideoCard from "./videoCard";
import { useSelector } from "react-redux";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [thumbnails, setThumbnails] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json);
    if (json.error) {
      setError(true);
      return;
    }
    setVideos(json.items);
    getThumbnails(json.items);
  };

  const getThumbnails = async (videos) => {
    let thumbnails = {};
    for (let video of videos) {
      const channelId = video.snippet.channelId;
      const data = await fetch(CHANNEL_INFO.replace("{$channelId}", channelId));
      const json = await data.json();
      thumbnails[video.id] = json.items[0].snippet.thumbnails.default.url;
    }
    setThumbnails(thumbnails);
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div>
      {error ? (
        <div
          className={`flex items-center justify-center h-screen max-w-screen w-screen`}
        >
          <h1 className="text-4xl font-bold text-center text-gray-300 w-full">
            Youtube API Limit Exceeded
          </h1>
        </div>
      ) : (
        <div
          className={`${
            isMenuOpen ? "ml-60" : "ml-28"
          } grid xl:grid-cols-3 2xl:grid-cols-5 mb-8 gap-4 mt-16 w-screen`}
        >
          {videos.map((video) => {
            return (
              <VideoCard
                key={video.id}
                video={video}
                thumbnailUrl={thumbnails[video.id]}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default VideoContainer;
