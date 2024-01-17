import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { User } from "../../auth/schemas/user.schema";

export enum Status{

    SOLVED = 'Solved',
    PROCESSING = 'Processing',
    REJECTED = 'Rejected',
    POSTPONED = 'Postponed',
}

export enum Subject{

    CONFLICT = 'Conflict',
    RAGGING = 'Ragging',
    BULLYING = 'Bullying',
    ADDICTION = 'Addiction',
    CYBERBULLYING = "Cyberbullying",
    SEXUAL_HARASSMENT ="Sexual_harassment",
    OTHERS = "Others"
}

@Schema({
    timestamps: true
})
export class Complain{

    //complain subject, required*
    @Prop()
    subject: Subject;

    //short description, required*
    @Prop()
    description: string;

    //complain author Name, required*
    @Prop()
    author: string;

    //university id/ student id, required*
    @Prop()
    studentId: string;

    //department, not required X
    @Prop()
    department: string;

    //phone number, required*
    @Prop()
    phone: string;

    //adviser name, not required X
    @Prop()
    adviser: string;

    //responsible person's name, required*
    @Prop()
    responsible: string;

    //responsible person's id, not required X
    @Prop()
    responsibleId: string

    //responsible person's department, not required X
    @Prop()
    responsibleDepartment: string

    //responsible person's number, required*
    @Prop()
    responsiblePhone: string

    //complain evidence (uploaded drive link) , not required X
    @Prop()
    link: string

    //this is for teachers
    @Prop()
    comment: string

    //complain open or closed status (only teachers can edit, only to show)
    @Prop()
    status: Status;

    //DB User ID
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

}

export const ComplainSchema = SchemaFactory.createForClass(Complain)