function timeAgo(date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000);

  let value = 0;

  if (diffInSeconds < 60) {
    return "Just now";
  } else if ((value = Math.floor(diffInSeconds / 60)) < 60) {
    return value + (value > 1 ? " minutes ago" : " minute ago");
  } else if ((value = Math.floor(diffInSeconds / 3600)) < 24) {
    return value + (value > 1 ? " hours ago" : " hour ago");
  } else if ((value = Math.floor(diffInSeconds / 86400)) < 30) {
    return value + (value > 1 ? " days ago" : " day ago");
  } else if ((value = Math.floor(diffInSeconds / 2592000)) < 12) {
    return value + (value > 1 ? " months ago" : " month ago");
  } else {
    value = Math.floor(diffInSeconds / 31536000);
    return value + (value > 1 ? " years ago" : " year ago");
  }
}

export default timeAgo;
