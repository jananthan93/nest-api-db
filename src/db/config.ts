import { TypeOrmModule } from "@nestjs/typeorm";
import { BooksEntity } from "../books/books.entity";

const config= TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'manager',
  schema: 'public',
  database: 'nest',
  entities: ['dist/**/*.entity{.ts,.js}'],
  // entities: [BooksEntity],
//
  synchronize: true,
})
export default config;