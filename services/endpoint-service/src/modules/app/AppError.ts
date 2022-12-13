export class AppError {
  constructor(
    public code: string,
    public message: string,
    public resource?: string,
    public target?: string,
  ) {}
}
