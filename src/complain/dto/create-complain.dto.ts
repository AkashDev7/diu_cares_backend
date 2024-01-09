import { Status } from "../schemas/complain.schema";

export class CreateComplainDto {
    readonly title: string;
    readonly description: string;
    readonly location: string;
    readonly attachment: string;
    readonly status: Status;
}