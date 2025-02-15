import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';

@Module({
  imports: [CacheModule.register()], // Import CacheModule here
  providers: [QuizService],
  controllers: [QuizController],
})
export class QuizModule {}
