import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { HealthAreaResolverBase } from "./base/healthArea.resolver.base";
import { HealthArea } from "./base/HealthArea";
import { HealthAreaService } from "./healthArea.service";

@graphql.Resolver(() => HealthArea)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class HealthAreaResolver extends HealthAreaResolverBase {
  constructor(
    protected readonly service: HealthAreaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
