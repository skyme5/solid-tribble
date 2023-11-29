import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configurations from 'src/config/configurations';
import databaseConfig from './config/database.config';
import { AddressModule } from './resources/address/address.module';
import { UsersModule } from './resources/users/users.module';
import { DatabaseModule } from './db/db.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configurations, databaseConfig],
    }),
    DatabaseModule,
    UsersModule,
    AddressModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
