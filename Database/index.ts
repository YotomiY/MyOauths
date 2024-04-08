import * as sequelize from 'sequelize';

export const sequelizeInstance = new sequelize.Sequelize({
    host: "149.202.105.228",
    username: "itrioer123",
    password: "mg87poh66cr0DEC8Tg",
    database: "itrioer123",
    port: 3306,
    dialect: 'mariadb',
    define: {
        timestamps: true
    },
    logging: false,
    timezone: "Europe/Paris",
    pool: {
        max: 50,
        min: 0,
        acquire: 30000,
        idle: 300000
    }
});

export { default as Auths } from './Auths';
export { default as Settings } from './Settings';
export { default as IPs } from './IPs';
export { default as Bots } from './Bots';
export { default as Admins } from './Admins';
export { default as LogsCommands } from './Logs.Commands';
export { default as LogsJoin } from './Logs.Join';
export { default as Blacklist } from './Blacklist';
export { default as Subscriptions } from './Subscriptions';