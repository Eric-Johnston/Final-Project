module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // favorite_genre: {
    //   type: DataType.TEXT,
    //   allowNull: true
    // },
    location: {
      type: DataType.TEXT,
      allowNull: true
    }
  });

  return User;
};