module.exports = function (sequelize, DataTypes) {
  var Profile = sequelize.define("User", {
    user_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    media_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    media_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // movie_tv: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false
    // },
    // favorite: {
    //   type: DataType.BOOLEAN,
    //   allowNull: true
    // },
    // user_rating: {
    //   type: DataType.INTEGER,
    //   allowNull: true
    // },
  });

  return Profile;
};