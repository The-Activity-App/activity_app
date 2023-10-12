const listFavorite = async (req, res) => {
  const {
    db: { Place },
  } = req;

  const favorite = await Place.listFav();
  res.send(favorite);
};

module.exports = listFavorite;
