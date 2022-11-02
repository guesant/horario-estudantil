import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateInitialDatabase1667349039872 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'Usuario',
        columns: [
          {
            name: 'id_usu',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'nome_usu',
            type: 'varchar(300)',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'UnidadeEstudantil',
        columns: [
          {
            name: 'id_ue',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'nome_ue',
            type: 'varchar(255)',
          },

          {
            name: 'apelido_ue',
            type: 'varchar(255)',
          },

          {
            name: 'sigla_ue',
            type: 'varchar(255)',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'UnidadeEstudantil_Usuario',
        columns: [
          {
            name: 'id_ue_usu',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'id_usu_fk',
            type: 'int',
          },
          {
            name: 'id_ue_fk',
            type: 'int',
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_usu_fk'],
            referencedColumnNames: ['id_usu'],
            referencedTableName: 'Usuario',
          }),
          new TableForeignKey({
            columnNames: ['id_ue_fk'],
            referencedColumnNames: ['id_ue'],
            referencedTableName: 'UnidadeEstudantil',
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Professor',
        columns: [
          {
            name: 'id_prof',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'nome_prof',
            type: 'varchar(255)',
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Materia',
        columns: [
          {
            name: 'id_mat',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'nome_mat',
            type: 'varchar(255)',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Turma',
        columns: [
          {
            name: 'id_tur',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'nome_tur',
            type: 'varchar(255)',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'PeriodoLetivo',
        columns: [
          {
            name: 'id_per',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'id_ue_fk',
            type: 'int',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_ue_fk'],
            referencedTableName: 'UnidadeEstudantil',
            referencedColumnNames: ['id_ue'],
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Etapa',
        columns: [
          {
            name: 'id_eta',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'id_per_fk',
            type: 'int',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_per_fk'],
            referencedTableName: 'PeriodoLetivo',
            referencedColumnNames: ['id_per'],
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Semana',
        columns: [
          {
            name: 'id_sem',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'id_eta_fk',
            type: 'int',
          },

          {
            name: 'inicio_sem',
            type: 'date',
            isNullable: true,
          },

          {
            name: 'fim_sem',
            type: 'date',
            isNullable: true,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_eta_fk'],
            referencedTableName: 'Etapa',
            referencedColumnNames: ['id_eta'],
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Aula',
        columns: [
          {
            name: 'id_aul',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'id_mat_fk',
            type: 'int',
            isNullable: true,
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_mat_fk'],
            referencedColumnNames: ['id_mat'],
            referencedTableName: 'Materia',
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Aula_Turma',
        columns: [
          {
            name: 'id_aul_tur',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'id_aul_fk',
            type: 'int',
          },
          {
            name: 'id_tur_fk',
            type: 'int',
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_aul_fk'],
            referencedColumnNames: ['id_aul'],
            referencedTableName: 'Aula',
          }),
          new TableForeignKey({
            columnNames: ['id_tur_fk'],
            referencedColumnNames: ['id_tur'],
            referencedTableName: 'Turma',
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Aula_Professor',
        columns: [
          {
            name: 'id_aul_prof',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'id_aul_fk',
            type: 'int',
          },
          {
            name: 'id_prof_fk',
            type: 'int',
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_aul_fk'],
            referencedColumnNames: ['id_aul'],
            referencedTableName: 'Aula',
          }),
          new TableForeignKey({
            columnNames: ['id_prof_fk'],
            referencedColumnNames: ['id_prof'],
            referencedTableName: 'Professor',
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Evento',
        columns: [
          {
            name: 'id_eve',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'dia_da_sem_eve',
            type: 'int',
          },
          {
            name: 'inicio_eve',
            type: 'time',
          },
          {
            name: 'fim_eve',
            type: 'time',
          },
          {
            name: 'tipo_eve',
            type: 'varchar(255)',
            isNullable: true,
          },

          {
            name: 'id_sem_fk',
            type: 'int',
          },
          {
            name: 'id_aul_fk',
            type: 'int',
            isNullable: true,
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_sem_fk'],
            referencedColumnNames: ['id_sem'],
            referencedTableName: 'Semana',
          }),
          new TableForeignKey({
            columnNames: ['id_aul_fk'],
            referencedColumnNames: ['id_aul'],
            referencedTableName: 'Aula',
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Apelido',
        columns: [
          {
            name: 'id_ape',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'apelido_ape',
            type: 'varchar(255)',
          },

          {
            name: 'id_tur_fk',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'id_prof_fk',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'id_mat_fk',
            type: 'int',
            isNullable: true,
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_tur_fk'],
            referencedColumnNames: ['id_tur'],
            referencedTableName: 'Turma',
          }),
          new TableForeignKey({
            columnNames: ['id_prof_fk'],
            referencedColumnNames: ['id_prof'],
            referencedTableName: 'Professor',
          }),
          new TableForeignKey({
            columnNames: ['id_mat_fk'],
            referencedColumnNames: ['id_mat'],
            referencedTableName: 'Materia',
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Grupo',
        columns: [
          {
            name: 'id_gru',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'titulo_gru',
            type: 'varchar(255)',
          },

          {
            name: 'id_ue_fk',
            type: 'int',
            isNullable: true,
          },

          {
            name: 'id_gru_pai_fk',
            type: 'int',
            isNullable: true,
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_ue_fk'],
            referencedColumnNames: ['id_ue'],
            referencedTableName: 'UnidadeEstudantil',
          }),
          new TableForeignKey({
            columnNames: ['id_gru_pai_fk'],
            referencedColumnNames: ['id_gru'],
            referencedTableName: 'Grupo',
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Grupo_Turma',
        columns: [
          {
            name: 'id_gru_tur',
            type: 'int',
            isPrimary: true,
          },

          {
            name: 'id_tur_fk',
            type: 'int',
          },
          {
            name: 'id_gru_fk',
            type: 'int',
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_tur_fk'],
            referencedColumnNames: ['id_tur'],
            referencedTableName: 'Turma',
          }),
          new TableForeignKey({
            columnNames: ['id_gru_fk'],
            referencedColumnNames: ['id_gru'],
            referencedTableName: 'Grupo',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Grupo_Turma', true);
    await queryRunner.dropTable('Grupo', true);
    await queryRunner.dropTable('Apelido', true);
    await queryRunner.dropTable('Aula_Professor', true);
    await queryRunner.dropTable('Aula_Turma', true);
    await queryRunner.dropTable('Aula', true);
    await queryRunner.dropTable('Semana', true);
    await queryRunner.dropTable('Etapa', true);
    await queryRunner.dropTable('PeriodoLetivo', true);
    await queryRunner.dropTable('Turma', true);
    await queryRunner.dropTable('Materia', true);
    await queryRunner.dropTable('Professor', true);
    await queryRunner.dropTable('UnidadeEstudantil_Usuario', true);
    await queryRunner.dropTable('UnidadeEstudantil', true);
    await queryRunner.dropTable('Usuario', true);
  }
}
