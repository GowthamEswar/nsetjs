import { Injectable } from '@nestjs/common';
import { User } from './interface/user.iterface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from '../schemas/schema.user';
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<UserDocument>) { }

    async finadAll(): Promise<User[]> {
        return await this.userModel.find();
    }

    async create(Body): Promise<User> {
        Body.Password = await this.hashPassword(Body.Password)
        return await this.userModel.create(Body)
    }

    async login(body) {
        const user = await this.userModel.findOne({ EmailId: body.EmailId })
        if (!user) {
            return `Email is not Registered ${user.EmailId}`
        } else {
            const loggedIn = await this.comparePasswords(body.Password, user.Password)
            if (loggedIn === true) {
                return `Logged ins as ${user.EmailId}`
            } else {
                return `Password is Incoorect`
            }
        }
    }

    async hashPassword(password: string) {
        const hashPassword = await bcrypt.hash(password, 12);
        return hashPassword
    }

    async comparePasswords(newPassword: string, passwordHash: string) {
        return bcrypt.compare(newPassword, passwordHash)
    }
}
