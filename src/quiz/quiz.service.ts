import { Injectable } from '@nestjs/common';
import { RedisClientType, createClient } from 'redis';

@Injectable()
export class QuizService {
  private redisClient: RedisClientType;

  constructor() {
    this.redisClient = createClient({ url: 'redis://localhost:6379' });
    this.redisClient.connect();
  }

  // In-memory list of quiz questions
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

  /**
   * Retrieves quiz questions.
   * - Checks if questions are cached in Redis.
   * - If not cached, stores them in Redis for future use.
   *
   * - To Save/Retrieve key-value pair data
   */
  async getQuizQuestions() {
    const cachedQuestions = await this.redisClient.get('quiz_questions');
    if (cachedQuestions) {
      console.log('Return from cached questions');
      return cachedQuestions;
    }

    await this.redisClient.set(
      'quiz_questions',
      JSON.stringify(this.questions),
      { EX: 30000 },
    );
    return this.questions;
  }

  /**
   * Creates a new user.
   * - Stores user details in a Redis hash.
   * - Adds the user to the leaderboard.
   * - Sends an OTP to the user.
   *
   * REDIS HASH
   * - A Redis hash is a data type that maps a single Redis key to multiple field-value pairs, like a small JSON or a dictionary.
   *
   * 🔥 Why use Redis Hash?
   * - Efficient memory usage for storing structured data
   * - Great for user profiles, settings, session data, etc.
   * - Fast access to individual fields
   */
  async createUser(
    userId: string,
    displayName: string,
    country: string,
    phoneNumber: string,
  ) {
    // Store user details in Redis Hash using hSet
    await this.redisClient.hSet(`user:${userId}`, {
      name: displayName,
      points: 0,
      country,
      phone: phoneNumber,
    });

    /*
     * What is a Sorted Set in Redis?
      - A Sorted Set is a special data type in Redis that combines:
      - A Set: all elements are unique
      - A Score: each element has a numeric score
      - Automatic Sorting: elements are kept sorted by score, low to high

     * ✅ Use Cases
        - Leaderboards / High scores
        - Priority queues
        - Task scheduling with timestamps as scores
        - Time-series ranking (e.g., top 10 trending items) 
     */

    // Add user to leaderboard sorted set using zAdd
    await this.redisClient.zAdd('quiz_leaderboard', [
      { score: 0, value: userId },
    ]);

    // Get user rank (0-based index)
    const rank = await this.redisClient.zRevRank('quiz_leaderboard', userId);

    // Send OTP to the user's phone number
    const otp = await this.sendOTP(userId);

    return {
      user_id: userId,
      display_name: displayName,
      points: 0,
      rank: rank !== null ? rank + 1 : null, // Convert 0-based to 1-based rank
      country,
      phone: phoneNumber,
      otpSent: otp.success,
    };
  }

  /**
   * Submits an answer for a user.
   * - Validates the user's existence and the question.
   * - Updates the leaderboard and user points if the answer is correct.
   * - Logs the user's activity.
   *
   * Redis Commands:
   * - `EXISTS key`: Checks if a key exists.
   * - `ZINCRBY key increment member`: Increments the score of a member in a sorted set.
   * - `HINCRBY key field increment`: Increments a field in a hash.
   */
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
      // ZINCRBY key increment member	(Increment a member's score)
      newScore = await this.redisClient.zIncrBy(
        'quiz_leaderboard',
        10,
        userId.toString(),
      );

      // Update user's stored points in hSet
      // HINCRBY increments (or decrements) the value of a field in a Redis hash by a given integer.
      await this.redisClient.hIncrBy(`user:${userId}`, 'points', 10);
    } else {
      // Get current score if the answer is wrong
      newScore =
        (await this.redisClient.zScore(
          'quiz_leaderboard',
          userId.toString(),
        )) || 0;
    }

    // Log recent activity
    await this.logQuizActivity(userId, questionId, isCorrect);

    return {
      success: true,
      correct: isCorrect,
      message: isCorrect ? 'Correct answer!' : 'Wrong answer!',
      currentScore: newScore,
    };
  }

  /**
   * Retrieves the leaderboard.
   * - Fetches leaderboard data from a Redis sorted set.
   * - Retrieves user details for each leaderboard entry.
   *
   * Redis Commands:
   * - `ZRANGE key start stop WITHSCORES`: Retrieves a range of elements from a sorted set with scores.
   * - `HGETALL key`: Retrieves all fields and values of a hash.
   */
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

        // HGETALL is a Redis command that retrieves all fields and values from a hash key.
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

  /**
   * Retrieves the recent quiz activity of a user.
   * - Fetches the last 10 activity logs from a Redis list.
   * - Each log entry is stored as a JSON string in Redis and is parsed back into an object.
   *
   * Redis Commands:
   * - `LRANGE key start stop`: Retrieves a range of elements from a list.
   *
   * @param userId - The ID of the user whose activity is being retrieved.
   * @returns An array of parsed activity log objects.
   */
  async getUserRecentActivity(userId: string) {
    const key = `quiz_activity:${userId}`;
    const logs = await this.redisClient.lRange(key, 0, 9); // Get last 10 logs

    return logs.map((log) => JSON.parse(log));
  }

  /**
   * Sends a One-Time Password (OTP) to the user.
   * - Generates a 6-digit OTP.
   * - Stores the OTP in Redis with a TTL of 5 minutes.
   * - Simulates sending the OTP (e.g., via SMS).
   *
   * Redis Commands:
   * - `SET key value EX seconds`: Stores a key-value pair with an expiration time.
   */
  async sendOTP(userId: string): Promise<{ success: boolean; otp: string }> {
    // Generate a 6-digit OTP
    const otp = (
      Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
    ).toString();

    // Store OTP in Redis with a TTL of 5 minutes
    const key = `otp:${userId}`;
    await this.redisClient.set(key, otp, { EX: 300 });

    // Simulate sending OTP (e.g., via SMS)
    console.log(`OTP for user ${userId}: ${otp}`);

    return { success: true, otp };
  }

  async verifyOTP(
    userId: string,
    otp: string,
  ): Promise<{ success: boolean; message: string }> {
    const key = `otp:${userId}`;
    const storedOtp = await this.redisClient.get(key);

    if (!storedOtp) {
      return { success: false, message: 'OTP expired or not found' };
    }

    if (storedOtp === otp) {
      // Delete OTP after successful verification
      await this.redisClient.del(key);
      return { success: true, message: 'OTP verified successfully' };
    }

    return { success: false, message: 'Invalid OTP' };
  }

  /**
  
  What is a List in Redis?
    - A List in Redis is an ordered collection of elements, which allows you to add elements to both the head (left) or the tail (right) of the list.
    - Lists can store multiple values (like an array or a queue).
    - They are ordered, meaning the order in which elements are added is maintained.
  
  Commands:
    - LPUSH, RPUSH, LPOP, RPOP, LRANGE, LLEN, LINDEX, LTRIM
  
  🔥 Use Cases of Lists:
    - Queues: Lists are often used to implement queues, as you can use LPUSH to enqueue and RPOP to dequeue.
    - Message Queues: Store messages in the list, process them, and remove them.
    - Activity Logs: Use lists to store logs or recent activities, trimming the list to keep it within a limit.

   */
  async logQuizActivity(
    userId: string,
    questionId: number,
    isCorrect: boolean,
  ) {
    const logEntry = JSON.stringify({
      questionId,
      status: isCorrect ? 'Correct' : 'Wrong',
      timestamp: Date.now(),
    });

    const key = `quiz_activity:${userId}`;

    await this.redisClient.lPush(key, logEntry);

    // Trim a list to a specific range
    await this.redisClient.lTrim(key, 0, 9); // Keep only last 10 entries
  }

  /**
   * Resets the quiz.
   * - Deletes the leaderboard.
   * - Deletes all user-related keys.
   *
   * Redis Commands:
   * - `DEL key`: Deletes a key.
   * - `KEYS pattern`: Retrieves all keys matching a pattern.
   */
  async resetQuiz() {
    // Delete the leaderboard
    await this.redisClient.del('quiz_leaderboard');
    await this.redisClient.del('quiz_questions');

    // Get all user activities with prefix 'quiz_activity:'
    const activityKeys: string[] =
      await this.redisClient.keys('quiz_activity:*');

    // await this.redisClient.
    if (activityKeys.length > 0) {
      await this.redisClient.del(activityKeys);
    }

    // Get all user keys with prefix 'user:'
    const userKeys: string[] = await this.redisClient.keys('user:*');

    // await this.redisClient.
    if (userKeys.length > 0) {
      await this.redisClient.del(userKeys);
    }

    // Get all user otps with prefix 'user:'
    const otpKeys: string[] = await this.redisClient.keys('otp:*');

    // await this.redisClient.
    if (otpKeys.length > 0) {
      await this.redisClient.del(otpKeys);
    }

    return { success: true, message: 'Quiz has been reset successfully' };
  }
}
