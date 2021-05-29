const createUser = (sequelize, DataTypes) => {
    const Users = sequelize.define('User', {
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
        // id: {
        //     Type: DataTypes.INTEGER,
        //     primaryKey: true,
        // },
    }, 
    {
        timestamps: false,
    });

    Users.associate = (models) => {
        Users.hasMany(models.BlogPost, { as: 'blogposts', foreignKey: 'userId' });
    };

    return Users;
};

module.exports = createUser;