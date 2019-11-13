import { Repository } from "typeorm";
import { PostEntity } from "./post.entity";

export class PostRepository extends Repository<PostEntity>{}