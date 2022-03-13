export class Product{
    id: number;
    name: string;
    subject: string;
    photo: any;
    day: Date;
    time: Date;
    createdAt: Date;
}

export interface ListResponse {
    id: number;
    name: string;
    photo: string;
    day: string;
    time: string;
    createdAt: Date;
    updatedAt: Date;
}