export const transformManga = ({
  mal_id: id,
  rank,
  url,
  image_url: imageUrl,
  title,
  publishing_start: publicationStartDate,
  score
}) => ({
  id,
  rank,
  url,
  imageUrl,
  title,
  publicationStartDate,
  score
});

export const transformMangaDetail = ({
  mal_id: id,
  rank,
  link_canonical: url,
  image_url: imageUrl,
  title,
  published: { from: publicationStartDate },
  image: images,
  synopsis,
  score
}) => ({
  id,
  publicationStartDate,
  title,
  imageUrl,
  url,
  rank,
  score,
  images,
  synopsis
});
