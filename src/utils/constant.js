const env = await import.meta.env;
const key = env.VITE_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  key;

console.log(YOUTUBE_VIDEOS_API);
export const CHANNEL_INFO =
  "https://www.googleapis.com/youtube/v3/channels?part=snippet&fields=items%2Fsnippet%2Fthumbnails%2Fdefault&id={$channelId}&regionCode=IN&key=" +
  key;
