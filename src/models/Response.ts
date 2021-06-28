import {
    Table,
    Column,
    Model,
    PrimaryKey,
    CreatedAt,
    UpdatedAt,
    DefaultScope,
    Scopes,
    AutoIncrement
} from 'sequelize-typescript';

type ResponseCreationAttributes = {
    formId: number,
    creator: string
}

type ResponseAttributes = ResponseCreationAttributes & {
    id: number,
    createdAt: Date,
    updatedAt: Date
}

@Table
export default class Response extends Model<ResponseAttributes, ResponseCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    formId: number

    @Column
    creator: string

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}