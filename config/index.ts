import yaml from "yaml";
import fs from "fs";
import path from "path";

export type LdapConfig = {
    url: string,
    baseDN: string,
    username: string,
    password: string
}

export const ldapConfig: LdapConfig = yaml.parse(fs.readFileSync(path.resolve(__dirname, 'ldap.yaml'), 'utf-8'));
