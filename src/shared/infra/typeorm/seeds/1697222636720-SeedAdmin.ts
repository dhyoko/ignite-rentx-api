import { hash } from "bcrypt";
import { MigrationInterface, QueryRunner } from "typeorm";
import { v4 as uuidV4 } from "uuid";

export class SeedAdmin1697222636720 implements MigrationInterface {
  id = uuidV4();

  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = await hash("admin", 8);

    await queryRunner.query(
      `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license)
        values('${this.id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XLAOS128712')
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const adminUser = await queryRunner.query(
      `SELECT * FROM USERS WHERE id = '${this.id}'`
    );
    if (adminUser) {
      await queryRunner.query(`DELETE FROM USERS WHERE id = '${this.id}'`);
    }
  }
}
