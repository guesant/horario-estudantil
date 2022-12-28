import { Query } from '@nestjs/graphql';
import { ResourceAuth } from '../infrastructure/auth/decorators/ResourceAuth.decorator';
import { AuthMode } from '../infrastructure/auth/consts/AuthMode';

export class AppResolver {
  @ResourceAuth(AuthMode.ANONYMOUS)
  @Query(() => String)
  hello() {
    return 'world!';
  }
}
