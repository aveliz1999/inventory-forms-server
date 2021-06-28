import {Sequelize} from 'sequelize-typescript';
import {databaseConfig} from '../config';
import Form from "./models/Form";

const sequelize =  new Sequelize({
    ...databaseConfig
});

export default () => {
    sequelize.addModels([Form]);
    return sequelize;
};