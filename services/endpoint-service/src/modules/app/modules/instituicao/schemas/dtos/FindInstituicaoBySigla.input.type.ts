import { Field, InputType } from '@nestjs/graphql';
import { IFindInstituicaoBySiglaInput } from '@horario-estudantil/schemas';

@InputType()
export class FindInstituicaoBySiglaInputType
  implements IFindInstituicaoBySiglaInput
{
  @Field(() => String)
  sigla!: string;
}
