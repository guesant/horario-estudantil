import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class InitUsuario1672163948413 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'usuario',
        columns: [
          {
            name: 'id_usu',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'kc_id_usu',
            type: 'varchar(36)',
            isNullable: true,
            isUnique: true,
          },
          {
            name: 'id_car_fk',
            type: 'int',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['id_car_fk'],
            referencedColumnNames: ['id_car'],
            referencedTableName: 'cargo',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('usuario', true);
  }
}
