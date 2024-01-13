import { IsEnum, IsOptional, IsString } from "class-validator";
import { Status } from "../schemas/complain.schema";

export class UpdateComplainDto {

    @IsOptional()
    @IsString()
    readonly title: string;
    
    @IsOptional()
    @IsString()
    readonly description: string;

    @IsOptional()
    @IsString()
    readonly location: string;

    @IsOptional()
    readonly attachment: string;

    @IsOptional()
    @IsEnum(Status, { message:'Please enter correct status'})
    readonly status: Status;
}