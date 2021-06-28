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

type QuestionCreationAttributes = {
    formId: number,
    prompt: string,
    type: string,
    defaultValue: string,
    canScan: boolean
}

type QuestionAttributes = QuestionCreationAttributes & {
    id: number,
    createdAt: Date,
    updatedAt: Date
}

@Table
export default class Question extends Model<QuestionAttributes, QuestionCreationAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;

    @Column
    formId: number

    @Column
    prompt: string

    @Column
    type: string

    @Column
    defaultValue: string

    @Column
    canScan: boolean

    @CreatedAt
    @Column
    createdAt: Date;

    @UpdatedAt
    @Column
    updatedAt: Date;
}