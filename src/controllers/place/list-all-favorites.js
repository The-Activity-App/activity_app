const listAllFavorites = async (req, res) => {
  const {
    db: { Place },
    params: { id },
  } = req;

  const favorites = await Place.listAllFavorites(id);
  return res.send(favorites);
};

module.exports = listAllFavorites;
