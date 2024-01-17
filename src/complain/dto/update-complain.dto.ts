import { IsEmpty, IsEnum, IsOptional, IsString } from "class-validator";
import { Status, Subject } from "../schemas/complain.schema";
import { User } from "../../auth/schemas/user.schema";

export class UpdateComplainDto {

    @IsOptional()
    @IsEnum(Subject, { message:'Please enter correct complain subject'})
    readonly subject: Subject;

    @IsOptional()
    @IsString()
    readonly description: string;

    @IsOptional()
    @IsString()
    readonly author: string;

    @IsOptional()
    @IsString()
    readonly studentId: string;

    @IsOptional()
    @IsString()
    readonly department: string;

    @IsOptional()
    @IsString()
    readonly phone: string;

    @IsOptional()
    @IsString()
    readonly adviser: string;

    @IsOptional()
    @IsString()
    readonly responsible: string;

    @IsOptional()
    @IsString()
    readonly responsibleId: string;

    @IsOptional()
    @IsString()
    readonly responsibleDepartment: string;

    @IsOptional()
    @IsString()
    readonly responsiblePhone: string;

    @IsOptional()
    readonly link: string;

    @IsOptional()
    readonly comment: string;

    @IsOptional()
    @IsEnum(Status, { message:'Please enter correct status'})
    readonly status: Status;

    @IsEmpty({ message: "You cannot input user id" })
    readonly user: User;
}