import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ZodType } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private zodType: ZodType) {}

  transform(value: any, metadata: ArgumentMetadata): any {
    const result = this.zodType.safeParse(value);

    if (result.success) {
      return result.data;
    }

    throw result.error;
  }
}
