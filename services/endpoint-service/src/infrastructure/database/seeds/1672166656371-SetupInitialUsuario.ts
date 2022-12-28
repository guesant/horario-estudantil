import { MigrationInterface, QueryRunner } from 'typeorm';

export class SetupInitialUsuario1672166656371 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO usuario (id_usu, kc_id_usu, id_car_fk)
       VALUES (1, 'ea6fb7aa-cc5b-4e27-984f-21347e415b61', 1);`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE
                             FROM usuario
                             WHERE id_usu = 1;`);
  }
}
