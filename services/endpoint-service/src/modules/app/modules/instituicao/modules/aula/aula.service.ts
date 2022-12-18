import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AulaDbEntity } from '../../../../entities/aula.db.entity';
import { IAulaProfessorRepository } from '../../../../repositories/aula-professor.repository';
import { IAulaTurmaRepository } from '../../../../repositories/aula-turma.repository';
import { IAulaRepository } from '../../../../repositories/aula.repository';
import {
  REPOSITORY_AULA,
  REPOSITORY_AULA_PROFESSOR,
  REPOSITORY_AULA_TURMA,
  REPOSITORY_EVENTO,
  REPOSITORY_TURMA,
} from '../../../../../database/constants/REPOSITORIES';
import { IGenericFindOneQuery } from '../../../../IGenericFindOneQuery';
import { IEventoRepository } from '../../../../repositories/evento.repository';
import { ITurmaRepository } from '../../../../repositories/turma.repository';

export type IFindAulaQuery = IGenericFindOneQuery<AulaDbEntity>;

@Injectable()
export class AulaService {
  constructor(
    @Inject(REPOSITORY_AULA)
    private aulaRepository: IAulaRepository,
    @Inject(REPOSITORY_AULA_TURMA)
    private aulaTurmaRepository: IAulaTurmaRepository,
    @Inject(REPOSITORY_AULA_PROFESSOR)
    private aulaProfessorRepository: IAulaProfessorRepository,
    @Inject(REPOSITORY_EVENTO)
    private eventoRepository: IEventoRepository,
    @Inject(REPOSITORY_TURMA)
    private turmaRepository: ITurmaRepository,
  ) {}

  async findAula(query: IFindAulaQuery) {
    const { id, options } = query;

    const targetAula = await this.aulaRepository.findOne({
      where: { id },
      select: ['id'],
    });

    if (!targetAula) {
      throw new NotFoundException();
    }

    const aula = await this.aulaRepository.findOneOrFail({
      where: { id: targetAula.id },
      ...options,
    });

    return aula;
  }

  async findAulaEvento(aulaId: number) {
    const aula = await this.findAula({
      id: aulaId,
      options: { select: ['id'] },
    });

    const evento = await this.eventoRepository
      .createQueryBuilder('evento')
      .leftJoin('evento.aula', 'aula')
      .select(['evento.id', 'aula.id'])
      .where('aula.id = :aulaId', { aulaId: aula.id })
      .getOneOrFail();

    return evento;
  }

  async findAulaMateria(aulaId: number) {
    const aula = await this.findAula({
      id: aulaId,
      options: { select: ['id'] },
    });

    const { materia } = await this.aulaRepository
      .createQueryBuilder('aula')
      .leftJoin('aula.evento', 'evento')
      .select(['aula.id', 'evento.id'])
      .where('aula.id = :aulaId', { aulaId: aula.id })
      .getOneOrFail();

    return materia;
  }

  async findAulaTurmas(aulaId: number) {
    const aula = await this.findAula({ id: aulaId });

    const turmas = await this.turmaRepository
      .createQueryBuilder('turma')
      .leftJoin(
        'turma.aulasTurma',
        'aulaTurma',
        'turma.id_tur = aulaTurma.id_tur_fk',
      )
      .leftJoin('aulaTurma.aula', 'aula', 'aula.id_aul = :aulaId', {
        aulaId: aula.id,
      })
      .select(['turma.id', 'aulaTurma.id', 'aula.id'])
      .getMany();

    return turmas;
  }

  async findAulaProfessores(aulaId: number) {
    const aula = await this.findAula({ id: aulaId });

    const professores = await this.turmaRepository
      .createQueryBuilder('professor')
      .leftJoin(
        'professor.aulasProfessor',
        'aulaProfessor',
        'professor.id_prof = aulaProfessor.id_prof_fk',
      )
      .leftJoin('aulaProfessor.aula', 'aula', 'aula.id_aul = :aulaId', {
        aulaId: aula.id,
      })
      .select(['professor.id', 'aulaProfessor.id', 'aula.id'])
      .getMany();

    return professores;
  }
}
