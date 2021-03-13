import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    FirstName: string;

    @Prop()
    LastName: string;

    @Prop()
    EmailId: string;

    @Prop()
    PhoneNumber: number;

    @Prop()
    Password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);