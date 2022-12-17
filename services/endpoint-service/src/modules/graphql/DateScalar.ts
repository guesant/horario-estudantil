import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Date', (type) => Date)
export class DateScalar
  implements CustomScalar<number | string | Date, Date | null>
{
  description = 'Date custom scalar type';

  parseValue(value: unknown): Date | null {
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      value instanceof Date
    ) {
      return new Date(value);
    }

    return null;
  }

  serialize(value: unknown): string {
    return <string>this.parseValue(value)?.toISOString();
  }

  parseLiteral(ast: ValueNode): Date | null {
    if (ast.kind === Kind.INT || ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }

    return null;
  }
}
