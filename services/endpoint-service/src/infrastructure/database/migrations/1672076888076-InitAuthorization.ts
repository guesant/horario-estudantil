import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CreatePermissaoInputZod } from '@horario-estudantil/schemas';

export class InitAuthorization1672076888076 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'permissao',
        columns: [
          {
            name: 'id_per',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'receita_per',
            type: 'varchar',
            default: "'[]'",
            length: String(
              CreatePermissaoInputZod.shape.receita.maxLength || 2000,
            ),
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'cargo',
        columns: [
          {
            name: 'id_car',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'cargo_has_permissao',
        columns: [
          {
            name: 'id_car_per',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'id_car_fk',
            type: 'int',
          },
          {
            name: 'id_per_fk',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['id_car_fk'],
            referencedTableName: 'cargo',
            referencedColumnNames: ['id_car'],
          },
          {
            columnNames: ['id_per_fk'],
            referencedTableName: 'permissao',
            referencedColumnNames: ['id_per'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cargo_has_permissao', true);
    await queryRunner.dropTable('cargo', true);
    await queryRunner.dropTable('permissao', true);
  }
}
