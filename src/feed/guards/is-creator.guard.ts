import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from 'src/auth/services/auth.service';
import { FeedService } from '../services/feed.service';
import { User } from 'src/auth/modules/user.interface';

@Injectable()
export class IsCreatorGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private feedService: FeedService
    ) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp().getRequest();
    const { user, params }: { user: User, params: { id: number } }
  }
}
