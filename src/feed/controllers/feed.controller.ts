import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../modules/posts.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('feed')
export class FeedController {
    constructor(
        private feedService: FeedService
    ) { }
    @Post()
    createPost(@Body() post: FeedPost): Observable<FeedPost> {
        return this.feedService.createPost(post);
    }

    // @Get()
    // findAllPosts(): Observable<FeedPost[]> {
    //     return this.feedService.findAllPost();
    // }
    
    @Get()
    findAllPosts(): Observable<FeedPost[]> {
        return this.feedService.findAllPost();
    }

    @Put(':id')
    updatePost(@Param('id') id: number, @Body() feedPost: FeedPost): Observable<UpdateResult> {
        return this.feedService.updatePost(id, feedPost)
    }

    @Delete(':id')
    deletePost(@Param('id') id: number): Observable<DeleteResult> {
        return this.feedService.deletePost(id);
    }
}
