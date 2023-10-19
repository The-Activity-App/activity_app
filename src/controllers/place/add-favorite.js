const addFavorite = async (req, res) => {
  const {
    session, // this req.session property is put here by the handleCookieSessions middleware
    db: { Place }, // this req.db.User property is put here by the addModelsToRequest middleware
    body: {
      biz_id,
      name,
      address,
      city,
      state,
      type,
      working_hours,
      number,
      price_level,
      photo_url,
      website,
      rating,
      user_id,
    },
     // this req.body property is put here by the client
  } = req;

  const newFav = await Place.addFavorite(
    biz_id,
    name,
    address,
    city,
    state,
    type,
    working_hours,
    number,
    price_level,
    photo_url,
    website,
    rating,
    user_id,
  );
  session.userId = user.id;

  res.send(newFav);
};

module.exports = addFavorite;
