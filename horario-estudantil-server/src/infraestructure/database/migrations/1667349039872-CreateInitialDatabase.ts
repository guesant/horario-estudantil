import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateInitialDatabase1667349039872 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: 'unidade-estudantil',

        columns: [
          {
            name: 'id_ue',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'nome_ue',
            type: 'varchar',
          },

          {
            name: 'apelido_ue',
            type: 'varchar',
          },

          {
            name: 'sigla_ue',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('unidade-estudantil');
  }
}
