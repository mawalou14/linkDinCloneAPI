import { Injectable } from '@nestjs/common';
import { FeedPostEntity } from '../modules/posts.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPost } from '../modules/posts.interface';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ) {}

    createPost(feedPost: FeedPost) {
        return this.feedPostRepository.save(feedPost);
    }
}
