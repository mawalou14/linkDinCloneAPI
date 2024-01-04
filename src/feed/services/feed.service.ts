import { Injectable } from '@nestjs/common';
import { FeedPostEntity } from '../modules/posts.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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

    findPost(take: number = 10, skip: number = 0): Observable<FeedPost[]> {
        this.feedPostRepository.findAndCount({take, skip})
    }

    updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
        return from(this.feedPostRepository.update(id, feedPost));
    }

    deletePost(id: number): Observable<DeleteResult> {
        return from(this.feedPostRepository.delete(id));
    }
}
