import yaml from "yaml";
import fs from "fs";
import path from "path";
import {Dialect} from "sequelize";

export type LdapConfig = {
    url: string,
    baseDN: string,
    username: string,
    password: string,
    userLoginDomain: string
}

export type DatabaseConfig = {
    dialect: Dialect,
    storage: string
}

export const ldapConfig: LdapConfig = yaml.parse(fs.readFileSync(path.resolve(__dirname, 'ldap.yaml'), 'utf-8'));
export const databaseConfig: DatabaseConfig = yaml.parse(fs.readFileSync(path.resolve(__dirname, 'database.yaml'), 'utf-8'));
