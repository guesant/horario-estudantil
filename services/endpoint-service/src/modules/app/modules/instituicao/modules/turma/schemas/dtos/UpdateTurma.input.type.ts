import { InputType } from '@nestjs/graphql';
import { IUpdateTurmaInput } from '@horario-estudantil/schemas';

@InputType()
export class UpdateTurmaInputType implements IUpdateTurmaInput {}
