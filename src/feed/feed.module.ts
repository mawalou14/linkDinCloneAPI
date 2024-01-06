import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './controllers/feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './modules/posts.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
      AuthModule,
        TypeOrmModule.forFeature([FeedPostEntity])
    ],
  providers: [FeedService],
  controllers: [FeedController]
})
export class FeedModule {}
