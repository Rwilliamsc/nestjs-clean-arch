import { Module } from '@nestjs/common'
import { EnvConfigService } from './env-config.service'
import { EnvConfig } from './env-config.interface'
import { ConfigService } from '@nestjs/config'

@Module({
  providers: [EnvConfigService],
})
export class EnvConfigModule implements EnvConfig {
  constructor(private readonly configService: ConfigService) {}
  getAppPort(): number {
    return Number(this.configService.get<number>('APP_PORT'))
  }
  getNodeEnv(): string {
    return this.configService.get<string>('NODE_ENV')
  }
}
