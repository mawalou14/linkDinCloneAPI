import { Controller, Post } from '@nestjs/common';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
    constructor(
        private feedService: FeedService
    ) {}
    @Post()
    create() {
        
    }
}
