export const cldVideo = (cloudName: string, id: string) =>
  `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${id}`;

export const cldPoster = (cloudName: string, id: string) =>
  `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_jpg,so_0/${id}.jpg`;

