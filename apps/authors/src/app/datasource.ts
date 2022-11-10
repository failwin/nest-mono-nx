import { DataSource } from 'typeorm';
import { Author } from './models';
import { environment } from '../environments/environment';

const dataSource = new DataSource({
  type: 'postgres',
  entities: [Author],
  synchronize: process.env.NODE_ENV !== 'production',
  migrations: ['./migrations/*{.ts,.js}'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: process.env.NODE_ENV !== 'production',
  ...environment.db
});

export default dataSource;
