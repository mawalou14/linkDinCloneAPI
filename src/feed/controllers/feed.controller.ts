import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../modules/posts.interface';
import { Observable } from 'rxjs';

@Controller('feed')
export class FeedController {
    constructor(
        private feedService: FeedService
    ) {  }
    @Post()
    createPost(@Body() post: FeedPost): Observable<FeedPost> {
        return this.feedService.createPost(post);
    }

    @Get()
    findAllPosts(): Observable<FeedPost[]> {
        return this.feedService.findAllPost();
    }
}
