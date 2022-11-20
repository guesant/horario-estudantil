import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameInitialDatabase1668953573403 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('UnidadeEstudantil', 'Instituicao');

    await queryRunner.renameTable(
      'UnidadeEstudantil_Membership',
      'Instituicao_Membership',
    );

    await queryRunner.renameColumn('Instituicao', 'id_ue', 'id_ins');
    await queryRunner.renameColumn('Instituicao', 'nome_ue', 'nome_ins');
    await queryRunner.renameColumn('Instituicao', 'sigla_ue', 'sigla_ins');
    await queryRunner.renameColumn('Instituicao', 'apelido_ue', 'apelido_ins');
    await queryRunner.renameColumn(
      'Instituicao',
      'data_last_update',
      'data_last_update_ins',
    );
    await queryRunner.renameColumn(
      'Instituicao',
      'data_last_search_sync_ue',
      'data_last_search_sync_ins',
    );

    await queryRunner.renameColumn(
      'Instituicao_Membership',
      'id_ue_mem',
      'id_ins_mem',
    );

    await queryRunner.renameColumn(
      'Instituicao_Membership',
      'id_ue_fk',
      'id_ins_fk',
    );

    await queryRunner.renameColumn('CategoriaTurma', 'id_ue_fk', 'id_ins_fk');
    await queryRunner.renameColumn('PeriodoLetivo', 'id_ue_fk', 'id_ins_fk');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('PeriodoLetivo', 'id_ins_fk', 'id_ue_fk');
    await queryRunner.renameColumn('CategoriaTurma', 'id_ins_fk', 'id_ue_fk');

    await queryRunner.renameColumn(
      'Instituicao_Membership',
      'id_ins_fk',
      'id_ue_fk',
    );

    await queryRunner.renameColumn(
      'Instituicao_Membership',
      'id_ins_mem',
      'id_ue_mem',
    );

    await queryRunner.renameColumn(
      'Instituicao',
      'data_last_search_sync_ins',
      'data_last_search_sync_ue',
    );

    await queryRunner.renameColumn(
      'Instituicao',
      'data_last_update_ins',
      'data_last_update',
    );

    await queryRunner.renameColumn('Instituicao', 'apelido_ins', 'apelido_ue');
    await queryRunner.renameColumn('Instituicao', 'nome_ins', 'nome_ue');
    await queryRunner.renameColumn('Instituicao', 'id_ins', 'id_ue');

    await queryRunner.renameTable(
      'Instituicao_Membership',
      'UnidadeEstudantil_Membership',
    );

    await queryRunner.renameTable('Instituicao', 'UnidadeEstudantil');
  }
}
