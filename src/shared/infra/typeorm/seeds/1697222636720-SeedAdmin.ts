import { hash } from "bcrypt";
import { MigrationInterface, QueryRunner } from "typeorm";
import { v4 as uuidV4 } from "uuid";

export class SeedAdmin1697222636720 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const id = uuidV4();
    const password = await hash("admin", 8);

    await queryRunner.query(
      `INSERT INTO USERS(id, name, email, password, "is_admin", created_at, driver_license)
        values('${id}', 'admin', 'admin@rentx.com.br', '${password}', true, 'now()', 'XLAOS128712')
      `
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const adminUser = await queryRunner.query(
      `SELECT * FROM USERS WHERE email='admin@rentx.com.br'`
    );
    if (adminUser) {
      await queryRunner.query(
        `DELETE FROM USERS WHERE email='admin@rentx.com.br'`
      );
    }
  }
}
