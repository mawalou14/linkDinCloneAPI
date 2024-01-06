import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/services/auth.service';
import { FeedService } from '../services/feed.service';

@Injectable()
export class IsCreatorGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private feedService: FeedService
    ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return true;
  }
}
