import { FeedPost } from "src/feed/modules/posts.interface";
import { Role } from "./role.enum";

export interface User {
    id?: number;
    firstname?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: Role;
    posts?: FeedPost[];
}