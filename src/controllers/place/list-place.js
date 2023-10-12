const listPlace = async (req, res) => {
  const {
    db: { Place },
  } = req;

  const place = await Place.listPlace(place_id);
  res.send(place);
};

module.exports = listPlace;
