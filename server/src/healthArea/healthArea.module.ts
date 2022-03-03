import { Module } from "@nestjs/common";
import { HealthAreaModuleBase } from "./base/healthArea.module.base";
import { HealthAreaService } from "./healthArea.service";
import { HealthAreaController } from "./healthArea.controller";
import { HealthAreaResolver } from "./healthArea.resolver";

@Module({
  imports: [HealthAreaModuleBase],
  controllers: [HealthAreaController],
  providers: [HealthAreaService, HealthAreaResolver],
  exports: [HealthAreaService],
})
export class HealthAreaModule {}
