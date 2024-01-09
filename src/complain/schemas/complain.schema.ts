import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Status{

    SOLVED = 'Solved',
    PROCESSING = 'Processing',
    REJECTED = 'Rejected',
    POSTPONED = 'Postponed',
}

@Schema({
    timestamps: true
})
export class Complain{

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    location: string;

    @Prop()
    attachment: string;

    @Prop()
    status: Status;
}

export const ComplainSchema = SchemaFactory.createForClass(Complain)