import { Body, Controller, Post } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../modules/posts.interface';

@Controller('feed')
export class FeedController {
    constructor(
        private feedService: FeedService
    ) {}
    @Post()
    create(@Body() post: FeedPost) {
        return this.feedService.createPost(post);
    }
}
