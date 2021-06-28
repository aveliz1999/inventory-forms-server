import {Sequelize} from 'sequelize-typescript';
import {databaseConfig} from '../config';
import Form from "./models/Form";
import Question from "./models/Question";

const sequelize =  new Sequelize({
    ...databaseConfig
});

export default () => {
    sequelize.addModels([Form, Question]);
    return sequelize;
};