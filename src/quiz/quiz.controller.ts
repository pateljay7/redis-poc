import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('questions')
  async getQuizQuestions() {
    return this.quizService.getQuizQuestions();
  }

  @Post('submit')
  submitAnswer(
    @Body() body: { userId: string; questionId: number; answerId: number },
  ) {
    return this.quizService.submitAnswer(
      body.userId,
      body.questionId,
      body.answerId,
    );
  }

  @Get('leaderboard')
  getLeaderboard() {
    return this.quizService.getLeaderboard();
  }

  @Post('create/user')
  async createUser(@Body() body) {
    return this.quizService.createUser(
      body.user_id,
      body.display_name,
      body.country,
    );
  }

  @Post('reset')
  async resetQuiz() {
    return this.quizService.resetQuiz();
  }
}
