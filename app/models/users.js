var bcrypt = require("bcrypt-nodejs");

module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    favorite_genre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    
    location: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  //Users.hasMany(Profile);
  
  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  Users.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
  });

  return Users;
};