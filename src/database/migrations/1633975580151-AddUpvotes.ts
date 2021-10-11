import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUpvotes1633975580151 implements MigrationInterface {
    name = 'AddUpvotes1633975580151'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "upvotes" ("userId" integer NOT NULL, "requestId" integer NOT NULL, CONSTRAINT "PK_783275c1834f1467411bf9fe502" PRIMARY KEY ("userId", "requestId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_384eb12a6b63f9ba90a5231b78" ON "upvotes" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_6215dc5cb7fd47167f8b1e917d" ON "upvotes" ("requestId") `);
        await queryRunner.query(`ALTER TABLE "upvotes" ADD CONSTRAINT "FK_384eb12a6b63f9ba90a5231b780" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "upvotes" ADD CONSTRAINT "FK_6215dc5cb7fd47167f8b1e917d6" FOREIGN KEY ("requestId") REFERENCES "request"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "upvotes" DROP CONSTRAINT "FK_6215dc5cb7fd47167f8b1e917d6"`);
        await queryRunner.query(`ALTER TABLE "upvotes" DROP CONSTRAINT "FK_384eb12a6b63f9ba90a5231b780"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6215dc5cb7fd47167f8b1e917d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_384eb12a6b63f9ba90a5231b78"`);
        await queryRunner.query(`DROP TABLE "upvotes"`);
    }

}
