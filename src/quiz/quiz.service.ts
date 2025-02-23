import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { RedisClientType, createClient } from 'redis';

@Injectable()
export class QuizService {
  private redisClient: RedisClientType;

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {
    this.redisClient = createClient({ url: 'redis://localhost:6379' });
    this.redisClient.connect();
  }

  private questions = [
    {
      id: 1,
      question: 'What is Node.js?',
      options: [
        { id: 1, value: 'A JavaScript runtime' },
        { id: 2, value: 'A programming language' },
        { id: 3, value: 'A database' },
      ],
      answer: 1,
    },
    {
      id: 2,
      question: 'Which engine powers Node.js?',
      options: [
        { id: 1, value: 'SpiderMonkey' },
        { id: 2, value: 'V8' },
        { id: 3, value: 'Chakra' },
      ],
      answer: 2,
    },
    {
      id: 3,
      question: 'Which module is used to create a server in Node.js?',
      options: [
        { id: 1, value: 'fs' },
        { id: 2, value: 'http' },
        { id: 3, value: 'os' },
      ],
      answer: 2,
    },
    {
      id: 4,
      question: 'Which command initializes a new Node.js project?',
      options: [
        { id: 1, value: 'node init' },
        { id: 2, value: 'npm init' },
        { id: 3, value: 'start node' },
      ],
      answer: 2,
    },
    {
      id: 5,
      question:
        'Which keyword is used to import modules in Node.js (CommonJS)?',
      options: [
        { id: 1, value: 'import' },
        { id: 2, value: 'require' },
        { id: 3, value: 'include' },
      ],
      answer: 2,
    },
    {
      id: 6,
      question: 'Which module is used for file system operations in Node.js?',
      options: [
        { id: 1, value: 'os' },
        { id: 2, value: 'path' },
        { id: 3, value: 'fs' },
      ],
      answer: 3,
    },
    {
      id: 7,
      question: 'Which package manager is the default for Node.js?',
      options: [
        { id: 1, value: 'npm' },
        { id: 2, value: 'yarn' },
        { id: 3, value: 'pnpm' },
      ],
      answer: 1,
    },
    {
      id: 8,
      question:
        'Which global object is used to handle asynchronous operations in Node.js?',
      options: [
        { id: 1, value: 'process' },
        { id: 2, value: 'Promise' },
        { id: 3, value: 'setTimeout' },
      ],
      answer: 2,
    },
    {
      id: 9,
      question:
        'Which method is used to read environment variables in Node.js?',
      options: [
        { id: 1, value: 'env.get()' },
        { id: 2, value: 'process.env' },
        { id: 3, value: 'getEnv()' },
      ],
      answer: 2,
    },
    {
      id: 10,
      question: 'Which module is used to handle events in Node.js?',
      options: [
        { id: 1, value: 'events' },
        { id: 2, value: 'stream' },
        { id: 3, value: 'util' },
      ],
      answer: 1,
    },
    {
      id: 11,
      question:
        'Which function is used to execute code asynchronously in Node.js?',
      options: [
        { id: 1, value: 'setImmediate' },
        { id: 2, value: 'setTimeout' },
        { id: 3, value: 'Both 1 and 2' },
      ],
      answer: 3,
    },
    {
      id: 12,
      question: 'Which module is used for path manipulations in Node.js?',
      options: [
        { id: 1, value: 'fs' },
        { id: 2, value: 'url' },
        { id: 3, value: 'path' },
      ],
      answer: 3,
    },
    {
      id: 13,
      question: 'Which method is used to exit a Node.js process?',
      options: [
        { id: 1, value: 'process.terminate()' },
        { id: 2, value: 'process.exit()' },
        { id: 3, value: 'process.kill()' },
      ],
      answer: 2,
    },
    {
      id: 14,
      question: 'Which database is often used with Node.js for NoSQL storage?',
      options: [
        { id: 1, value: 'PostgreSQL' },
        { id: 2, value: 'MongoDB' },
        { id: 3, value: 'MySQL' },
      ],
      answer: 2,
    },
    {
      id: 15,
      question:
        'Which built-in module in Node.js is used for network requests?',
      options: [
        { id: 1, value: 'dns' },
        { id: 2, value: 'net' },
        { id: 3, value: 'http' },
      ],
      answer: 3,
    },
    {
      id: 16,
      question: 'What is the primary advantage of using streams in Node.js?',
      options: [
        {
          id: 1,
          value: 'They improve performance by processing data chunk by chunk',
        },
        { id: 2, value: 'They store data in memory' },
        { id: 3, value: 'They delay execution' },
      ],
      answer: 1,
    },
    {
      id: 17,
      question:
        'Which framework is widely used for building web applications with Node.js?',
      options: [
        { id: 1, value: 'Express.js' },
        { id: 2, value: 'Laravel' },
        { id: 3, value: 'Django' },
      ],
      answer: 1,
    },
    {
      id: 18,
      question: 'Which module helps manage child processes in Node.js?',
      options: [
        { id: 1, value: 'child_process' },
        { id: 2, value: 'worker_threads' },
        { id: 3, value: 'process' },
      ],
      answer: 1,
    },
    {
      id: 19,
      question:
        'Which Node.js feature allows handling multiple requests asynchronously?',
      options: [
        { id: 1, value: 'Blocking I/O' },
        { id: 2, value: 'Event Loop' },
        { id: 3, value: 'Multithreading' },
      ],
      answer: 2,
    },
    {
      id: 20,
      question:
        'Which module is used to encrypt and hash passwords in Node.js?',
      options: [
        { id: 1, value: 'bcrypt' },
        { id: 2, value: 'crypto' },
        { id: 3, value: 'Both 1 and 2' },
      ],
      answer: 3,
    },
  ];

  async getQuizQuestions() {
    const cachedQuestions = await this.cacheManager.get('quiz_questions');
    if (cachedQuestions) {
      console.log('Return from cached questions');
      return cachedQuestions;
    }

    await this.cacheManager.set('quiz_questions', this.questions, 30000);
    return this.questions;
  }

  async submitAnswer(userId: string, questionId: number, answerId: number) {
    // Check if user exists in Redis Hash
    const userExists = await this.redisClient.exists(`user:${userId}`);
    if (!userExists) {
      return { success: false, message: 'User not found' };
    }

    const question = this.questions.find((q) => q.id === questionId);
    if (!question) {
      return { success: false, message: 'Invalid question' };
    }

    const isCorrect = question.answer === answerId;
    let newScore = 0;

    if (isCorrect) {
      // Increase leaderboard score
      newScore = await this.redisClient.zIncrBy(
        'quiz_leaderboard',
        10,
        userId.toString(),
      );

      // Update user's stored points in hSet
      await this.redisClient.hIncrBy(`user:${userId}`, 'points', 10);
    } else {
      // Get current score if the answer is wrong
      newScore =
        (await this.redisClient.zScore(
          'quiz_leaderboard',
          userId.toString(),
        )) || 0;
    }

    return {
      success: true,
      correct: isCorrect,
      message: isCorrect ? 'Correct answer!' : 'Wrong answer!',
      currentScore: newScore,
    };
  }

  async getLeaderboard() {
    // Fetch leaderboard data from Redis sorted set
    const leaderboard = await this.redisClient.zRangeWithScores(
      'quiz_leaderboard',
      0,
      -1,
      { REV: true },
    );

    // Fetch user details for each leaderboard entry
    const leaderboardWithDetails = await Promise.all(
      leaderboard.map(async (entry, index) => {
        const userId = entry.value;
        const userDetails = await this.redisClient.hGetAll(`user:${userId}`);

        return {
          rank: index + 1,
          userId,
          name: userDetails.name || 'Unknown',
          country: userDetails.country || 'Unknown',
          score: entry.score,
        };
      }),
    );

    return leaderboardWithDetails;
  }

  async createUser(userId: string, displayName: string, country: string) {
    // Store user details in Redis Hash using hSet
    await this.redisClient.hSet(`user:${userId}`, {
      name: displayName,
      points: 0,
      country,
    });

    // Add user to leaderboard sorted set using zAdd
    await this.redisClient.zAdd('quiz_leaderboard', [
      { score: 0, value: userId },
    ]);

    // Get user rank (0-based index)
    const rank = await this.redisClient.zRevRank('quiz_leaderboard', userId);

    return {
      user_id: userId,
      display_name: displayName,
      points: 0,
      rank: rank !== null ? rank + 1 : null, // Convert 0-based to 1-based rank
      country,
    };
  }

  async resetQuiz() {
    // Delete the leaderboard
    await this.redisClient.del('quiz_leaderboard');

    // Get all user keys with prefix 'user:'
    const userKeys: string[] = await this.redisClient.keys('user:*');

    // await this.redisClient.
    if (userKeys.length > 0) {
      await this.redisClient.del(userKeys);
    }

    return { success: true, message: 'Quiz has been reset successfully' };
  }
}
