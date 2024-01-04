import { User } from "src/auth/modules/user.interface";

 export interface FeedPost {
    id?: number;
    body?: string;
    createdAt?: Date;
    author?: User
 }