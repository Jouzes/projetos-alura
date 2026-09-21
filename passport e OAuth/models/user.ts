import { getDb } from "../util/database";
import bcrypt from "bcrypt";

export class User {
    username: string;
    email: string;
    password: string;

    constructor(username: string, email: string, password: string) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    async save() {
        const db = getDb();
        return db.collection("users").insertOne(this);
    }

    static async findOne(email: string, password: string) {
        const db = getDb();
        const user = await db.collection("users").findOne({email: email});
        if (!user) {
            return null
        }

        const passwordMatches = await bcrypt.compare(password, user.password)
        if (!passwordMatches) {
            return null;
        }

        return user;
    }
}


