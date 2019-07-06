// Add a flag for the text attribute to prevent this field from being null

// Add a validation for the text attribute to make sure it's at least one character,
// but no more than 140 characters

// Add a flag for complete so that it's false by default if not given a value

module.exports = function(sequelize, DataTypes) {
  var Daily_Summary = sequelize.define("Daily_Summary", {
    
    Food: {type: DataTypes.VARCHAR (50), allowNull: false, validate: {len: [1,140]}},
    Calories: {type: DataTypes.INTEGER, allowNull: false, validate: {len: [1,140]}},
    Carbohydrates: {type: DataTypes.DECIMAL(5,2), allowNull: false, validate: {len: [1,140]}},
    Fat: {type: DataTypes.DECIMAL(5,2), allowNull: false, validate: {len: [1,140]}},
    Protein: {type: DataTypes.DECIMAL(5,2), allowNull: false, validate: {len: [1,140]}}
    
    


   
  });
  return Daily_Summary;
};

// CREATE TABLE Daily_Summary(
//   ID INT NOT NULL AUTO_INCREMENT,
//   Food VARCHAR (50) NOT NULL,
//   Calories INT NULL,
//   Carbohydrates DECIMAL(5,2),
//   Fat DECIMAL(5,2),
//   Protein DECIMAL(5,2),
//   PRIMARY KEY (ID)
//   );