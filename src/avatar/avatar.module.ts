import { Module } from '@nestjs/common';
import { ImageModule } from 'src/image/image.module';
import { AvatarController } from './avatar.controller';
import { AvatarService } from './avatar.service';

@Module({
  imports: [ImageModule],
  controllers: [AvatarController],
  providers: [AvatarService],
})
export class AvatarModule {}
