const listAllFavorites = async (req, res) => {
  const {
    db: { Place },
  } = req;

  const favorites = await Place.listAllFavorites(user_id);
  res.send(favorites);
};

module.exports = listAllFavorites;
