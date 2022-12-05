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
            isGenerated: true,
            generationStrategy: 'identity',
          },

          {
            name: 'keycloak_id_usu',
            type: 'varchar(36)',
            isNullable: true,
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
        name: 'Instituicao',
        columns: [
          {
            name: 'id_ins',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'identity',
          },

          {
            name: 'nome_ins',
            type: 'varchar(255)',
          },

          {
            name: 'sigla_ins',
            type: 'varchar(255)',
          },

          {
            name: 'apelido_ins',
            type: 'varchar(255)',
          },

          {
            name: 'data_last_update_ins',
            type: 'timestamptz',
            isNullable: true,
          },

          {
            name: 'data_last_search_sync_ins',
            type: 'timestamptz',
            isNullable: true,
          },
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'Instituicao_Membership',
        columns: [
          {
            name: 'id_ins_mem',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'identity',
          },

          {
            name: 'id_usu_fk',
            type: 'int',
          },
          {
            name: 'id_ins_fk',
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
            columnNames: ['id_ins_fk'],
            referencedColumnNames: ['id_ins'],
            referencedTableName: 'Instituicao',
            onDelete: 'CASCADE',
          }),
        ],
      }),
    );

    await queryRunner.createTable(
      new Table({
        name: 'TurmaCategoria',
        columns: [
          {
            name: 'id_tur_cat',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'identity',
          },

          {
            name: 'titulo_tur_cat',
            type: 'varchar(255)',
            isNullable: true,
          },

          {
            name: 'titulo_filhos_tur_cat',
            type: 'varchar(255)',
            isNullable: true,
          },

          {
            name: 'id_ins_fk',
            type: 'int',
            isNullable: true,
          },

          {
            name: 'id_tur_cat_pai_fk',
            type: 'int',
            isNullable: true,
          },
        ],

        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_ins_fk'],
            referencedColumnNames: ['id_ins'],
            referencedTableName: 'Instituicao',
          }),

          new TableForeignKey({
            columnNames: ['id_tur_cat_pai_fk'],
            referencedColumnNames: ['id_tur_cat'],
            referencedTableName: 'TurmaCategoria',
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
            isGenerated: true,
            generationStrategy: 'identity',
          },

          {
            name: 'nome_prof',
            type: 'varchar(255)',
            isNullable: true,
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
            isGenerated: true,
            generationStrategy: 'identity',
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
            isGenerated: true,
            generationStrategy: 'identity',
          },

          {
            name: 'nome_tur',
            type: 'varchar(255)',
            isNullable: true,
          },

          {
            name: 'id_tur_cat_fk',
            type: 'int',
            isNullable: true,
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_tur_cat_fk'],
            referencedTableName: 'TurmaCategoria',
            referencedColumnNames: ['id_tur_cat'],
          }),
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
            isGenerated: true,
            generationStrategy: 'identity',
          },

          {
            name: 'id_ins_fk',
            type: 'int',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            columnNames: ['id_ins_fk'],
            referencedTableName: 'Instituicao',
            referencedColumnNames: ['id_ins'],
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
            isGenerated: true,
            generationStrategy: 'identity',
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
        name: 'Aula',
        columns: [
          {
            name: 'id_aul',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'identity',
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
            isGenerated: true,
            generationStrategy: 'identity',
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
            isGenerated: true,
            generationStrategy: 'identity',
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
            isGenerated: true,
            generationStrategy: 'identity',
          },

          {
            name: 'data_inicio_eve',
            type: 'timestamptz',
            isNullable: true,
          },

          {
            name: 'data_fim_eve',
            type: 'timestamptz',
            isNullable: true,
          },

          {
            name: 'tipo_eve',
            type: 'varchar(255)',
            isNullable: true,
          },

          {
            name: 'id_aul_fk',
            type: 'int',
            isNullable: true,
          },
        ],

        foreignKeys: [
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
            isGenerated: true,
            generationStrategy: 'identity',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('Apelido', true);
    await queryRunner.dropTable('Evento', true);
    await queryRunner.dropTable('Aula_Professor', true);
    await queryRunner.dropTable('Aula_Turma', true);
    await queryRunner.dropTable('Aula', true);
    await queryRunner.dropTable('Etapa', true);
    await queryRunner.dropTable('PeriodoLetivo', true);
    await queryRunner.dropTable('Turma', true);
    await queryRunner.dropTable('Materia', true);
    await queryRunner.dropTable('Professor', true);
    await queryRunner.dropTable('Grupo', true);
    await queryRunner.dropTable('TurmaCategoria', true);
    await queryRunner.dropTable('Instituicao_Membership', true);
    await queryRunner.dropTable('Instituicao', true);
    await queryRunner.dropTable('Usuario', true);
  }
}
