import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ObjectiveResolverBase } from "./base/objective.resolver.base";
import { Objective } from "./base/Objective";
import { ObjectiveService } from "./objective.service";

@graphql.Resolver(() => Objective)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ObjectiveResolver extends ObjectiveResolverBase {
  constructor(
    protected readonly service: ObjectiveService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
