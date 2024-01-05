import { Body, Controller, Delete, Get, Param, Post, Put, Query, Request, UseGuards } from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../modules/posts.interface';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { JwtGuard } from 'src/auth/guards/jwt.guard';

@Controller('feed')
export class FeedController {
    constructor(
        private feedService: FeedService
    ) { }

    @UseGuards( JwtGuard )
    @Post()
    createPost(@Body() post: FeedPost, @Request() req): Observable<FeedPost> {
        return this.feedService.createPost(req.user, post);
    }

    // @Get()
    // findAllPosts(): Observable<FeedPost[]> {
    //     return this.feedService.findAllPost();
    // }
    
    @Get()
    findSelected(@Query('take') take: number = 1, @Query('skip') skip: number = 1): Observable<FeedPost[]> {
        take = take > 20 ? 20 : take;
        return this.feedService.findPost(take, skip);
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
