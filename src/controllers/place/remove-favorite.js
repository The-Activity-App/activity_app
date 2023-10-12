const removeFavorite = async (req, res) => {
  const {
    db: { Place },
  } = req;

  const place = await Place.removeFavorite();
  res.send("place has been removed from favorites.");
  res.send(place);
};

module.exports = removeFavorite;
