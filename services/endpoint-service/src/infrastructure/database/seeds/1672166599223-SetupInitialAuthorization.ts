import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetupInitialAuthorization1672166599223
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO permissao (id_per, regras_per)
       VALUES (1, '[ { action: "manage", subject: "all" } ]');`,
    );

    await queryRunner.query(`INSERT INTO cargo (id_car)
                             VALUES (1);`);

    await queryRunner.query(`INSERT INTO cargo_has_permissao (id_car_per, id_car_fk, id_per_fk)
                             VALUES (1, 1, 1);`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE
                             FROM cargo_has_permissao
                             WHERE id_car_per = 1;`);

    await queryRunner.query(`DELETE
                             FROM cargo
                             WHERE id_car = 1;`);

    await queryRunner.query(`DELETE
                             FROM permissao
                             WHERE id_per = 1;`);
  }
}
