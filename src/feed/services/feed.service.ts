import { Injectable } from '@nestjs/common';
import { FeedPostEntity } from '../modules/posts.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPost } from '../modules/posts.interface';
import { Observable, from } from 'rxjs';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ) {}

    createPost(feedPost: FeedPost): Observable<FeedPost> {
        return from(this.feedPostRepository.save(feedPost));
    }

    findAllPost(): Observable<FeedPost[]> {
        return from(this.feedPostRepository.find());
    }

    
}
