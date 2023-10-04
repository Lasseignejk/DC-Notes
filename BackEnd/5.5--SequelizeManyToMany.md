For this example, we've got users and groups -- users can belong to many groups and groups can belong to many users. 

Because this is a many-to-many relationship, they need to be connected with a `join table`.

1. Set up Sequelize like normal: 

        npm i sequelize express pg
        npm i --save-dev sequelize-cli
        npx sequelize init

2. Fix the config.json file: 

        "username": "postgres",
        "password": "passwordForPostgres",
        "database": "manyToMany-development",
        "host": "localhost",
        "dialect": "postgres"

3. Create the database

        npx sequelize db:create

4. Create the models: 

        npx sequelize model:generate --name User --attributes firstName:string,lastName:string

        npx sequelize model:generate --name Group --attributes name:string

        npx sequelize model:generate --name UserGroup --attributes userId:integer,groupId:integer

5. You shouldn't have to edit anything on the User/Group model or migration files. On the model for UserGroup, define the relationship:

        static associate(models) {
        User.belongsToMany(Group, {through: UserGroup});
        Group.belongsToMany(User, {through: UserGroup})
        }

6. Then on your migration file for UserGroup, add the foreign key information: 

        userId: {
            type: Sequelize.INTEGER,
            references: {
            model: 'Users',
            key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        groupId: {
            type: Sequelize.INTEGER,
            references: {
            model: 'Groups',
            key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },

7. Once that is set, you're ready to migrate: 

        npx sequelize-cli db:migrate


