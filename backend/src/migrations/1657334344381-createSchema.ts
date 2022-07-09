import {MigrationInterface, QueryRunner} from "typeorm";

export class createSchema1657334344381 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createSchema('neerajadesigns');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropSchema('neerajadesigns');
    }

}
