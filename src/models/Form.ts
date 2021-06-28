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

type FormCreationAttributes = {
    creator: string
}

type FormAttributes = FormCreationAttributes & {
    id: number,
    createdAt: Date,
    updatedAt: Date
}

@Table
export default class Form extends Model<FormAttributes, FormCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    creator: string

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}