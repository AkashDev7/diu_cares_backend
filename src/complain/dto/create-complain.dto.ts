import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Status } from "../schemas/complain.schema";

export class CreateComplainDto {

    @IsNotEmpty()
    @IsString()
    readonly title: string;

    @IsNotEmpty()
    @IsString()
    readonly description: string;

    @IsString()
    readonly location: string;

    readonly attachment: string;

    @IsNotEmpty()
    @IsEnum(Status, { message:'Please enter correct status'})
    readonly status: Status;
}