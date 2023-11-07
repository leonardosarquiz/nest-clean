/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { JwtModule } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { Env } from 'src/env'
import { JwtStrategy } from './jwt.strategy'


@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService], global: true, useFactory(config: ConfigService<Env, true>) {
        const privateKey = config.get('JWT_PRIVATE_KEY', { infer: true })
        const publicKey = config.get('JWT_PUBLIC_KEY', { infer: true })
        return {

          privateKey,
          publicKey
        }
      },
    })
  ],
  providers: [JwtStrategy],
})
export class AuthModule { }
