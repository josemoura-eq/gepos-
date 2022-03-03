import { Module } from "@nestjs/common";
import { ObjectiveModuleBase } from "./base/objective.module.base";
import { ObjectiveService } from "./objective.service";
import { ObjectiveController } from "./objective.controller";
import { ObjectiveResolver } from "./objective.resolver";

@Module({
  imports: [ObjectiveModuleBase],
  controllers: [ObjectiveController],
  providers: [ObjectiveService, ObjectiveResolver],
  exports: [ObjectiveService],
})
export class ObjectiveModule {}
