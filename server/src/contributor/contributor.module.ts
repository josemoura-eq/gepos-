import { Module } from "@nestjs/common";
import { ContributorModuleBase } from "./base/contributor.module.base";
import { ContributorService } from "./contributor.service";
import { ContributorController } from "./contributor.controller";
import { ContributorResolver } from "./contributor.resolver";

@Module({
  imports: [ContributorModuleBase],
  controllers: [ContributorController],
  providers: [ContributorService, ContributorResolver],
  exports: [ContributorService],
})
export class ContributorModule {}
