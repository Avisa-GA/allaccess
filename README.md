# all_access
- practicing SQL

- install these :
```js
 "dependencies": {
    "@ngneat/falso": "^6.1.0",
    "axios": "^0.27.2",
    "ejs": "^3.1.8",
    "express": "^4.18.1",
    "express-ejs-layouts": "^2.5.1",
    "pg": "^8.8.0",
    "pg-hstore": "^2.3.4",
    "sequelize": "^6.21.4"
  }
```
### Then do the process of sequelize:
```js
sequelize init
```
### then change the config file to this
```js
{
  "development": {
    "database": "userapp_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "userapp_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres",
    "dialectOptions": {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
      }
  }
}
```
### then create the database
```js
sequelize db:create userapp_development
```
### create a model
```js
sequelize model:create --name user --attributes firstName:string,lastName:string,age:integer,email:string
```
### do the migration
```js
sequelize db:migrate
```
### for seed data first generate a seed file
```js
sequelize seed:generate --name demo-creditcards
```
### then after adding fake data try to run that file
```js
sequelize db:seed --seed my_seeder_file.js
```
### Then run this command
```js
sequelize db:seed:all
```

### For editing the data model
```js
sequelize migration:create --name rename_brand_to_company 
```
### Then do the migratiom
```js
sequelize db:migrate migrations/20220831175048-rename_brand_to_company.js

```
