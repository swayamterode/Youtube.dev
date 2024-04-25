import formatViewCount from "../utils/formatViewCount";
import timeAgo from "../utils/formatPublishAt";
const VideoCard = ({ video, thumbnailUrl }) => {
  return (
    <div className="w-full max-w-[22rem] mb-10">
      <img
        src={video.snippet.thumbnails.medium.url}
        alt="thumbnail"
        className="rounded-xl w-full"
      />
      <div className="flex gap-2">
        <div className="flex flex-col gap-2 mr-6">
          <p className="text-sm font-semibold text-gray-300 line-clamp-2 mt-2">
            {video.snippet.title}
          </p>
          <div className="flex justify-start items-center gap-2">
            <img
              src={thumbnailUrl}
              alt="channel"
              className="w-10 h-10 rounded-full"
            />
            <div className="flex flex-col">
              <p className="text-sm text-gray-400">
                {video.snippet.channelTitle}
              </p>
              <p className="text-sm text-gray-400">
                {formatViewCount(video.statistics.viewCount)} views ·{" "}
                {timeAgo(video.snippet.publishedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
