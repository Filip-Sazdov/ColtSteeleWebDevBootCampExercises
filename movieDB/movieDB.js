let moviesDB = [
  {
    title: "Matrix",
    rating: 5,
    hasWatched: true,
  },
  {
    title: "Matrix - Reloaded",
    rating: 4.5,
    hasWatched: true,
  },
  {
    title: "Matrix - Revolutions",
    rating: 4.7,
    hasWatched: true,
  },
  {
    title: "Matrix 4",
    rating: 0,
    hasWatched: false,
  },
];

moviesDB.forEach((entry) => {
  if (entry.hasWatched === true) {
    console.log(`You have watched ${entry.title} - ${entry.rating} stars.`);
  } else {
    console.log(`You have not seen ${entry.title} - ${entry.rating} stars.`);
  }
});
