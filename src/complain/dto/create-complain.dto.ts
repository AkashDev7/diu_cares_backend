import { IsEmpty, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Status, Subject } from "../schemas/complain.schema";
import { User } from "../../auth/schemas/user.schema";

export class CreateComplainDto {

    @IsNotEmpty()
    @IsEnum(Subject, { message:'Please enter correct complain subject'})
    readonly subject: Subject;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsNotEmpty()
    @IsString()
    readonly author: string;

    @IsNotEmpty()
    @IsString()
    readonly studentId: string;

    @IsString()
    readonly department: string;

    @IsNotEmpty()
    @IsString()
    readonly phone: string;

    @IsString()
    readonly adviser: string;

    @IsNotEmpty()
    @IsString()
    readonly responsible: string;

    @IsString()
    readonly responsibleId: string;

    @IsString()
    readonly responsibleDepartment: string;

    @IsNotEmpty()
    @IsString()
    readonly responsiblePhone: string;

    readonly link: string;

    readonly comment: string;

    @IsNotEmpty()
    @IsEnum(Status, { message:'Please enter correct status'})
    readonly status: Status;

    @IsEmpty({ message: "You cannot input user id" })
    readonly user: User;
}