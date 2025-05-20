export class AppError extends Error {
  public readonly statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.name = 'AppError';
  }

  static UnexpectedError(error: any): AppError {
    return new AppError('An unexpected error occurred', 500);
  }

  static ValidationError(message: string): AppError {
    return new AppError(message, 400);
  }

  static NotFound(message: string): AppError {
    return new AppError(message, 404);
  }

  static Conflict(message: string): AppError {
    return new AppError(message, 409);
  }

  static Unauthorized(message: string): AppError {
    return new AppError(message, 401);
  }

  static Forbidden(message: string): AppError {
    return new AppError(message, 403);
  }
} 