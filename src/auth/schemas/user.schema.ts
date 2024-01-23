import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Role } from "../enum/role.enum";

@Schema({
    timestamps: true
})

export class User extends Document{
    @Prop()
    name: string

    @Prop({ unique: [true, 'Your email already exists!']})
    email: string

    @Prop()
    password: string

    @Prop({default: Role.User})
    role?: Role.User;
}

export const UserSchema = SchemaFactory.createForClass(User);
