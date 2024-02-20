import {ConfigurationService} from "./configuration.service";
import {DynamicModule, Module} from "@nestjs/common";

@Module({})

export class ConfigurationModule {
    static register(): DynamicModule {
        return {
            module: ConfigurationModule,
            providers: [
                {
                    provide: ConfigurationService,
                    useValue: new ConfigurationService({
                        environment: 'production',
                    }),
                }
            ],
            exports: [ConfigurationService]
        }
    }
}