const addPlace = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Place }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: {
      biz_id,
      name,
      address,
      type,
      working_hours,
      number,
      price_level,
      rating,
      user_id,
      emoji_rating,
      is_favorited,
    }, // this req.body property is put here by the client
  } = req;

  const newPlace = await Place.addPlace(
    biz_id,
    name,
    address,
    type,
    working_hours,
    number,
    price_level,
    rating,
    user_id,
    emoji_rating,
    is_favorited
  );
  session.userId = user.id;

  res.send(newPlace);
};

module.exports = addPlace;
