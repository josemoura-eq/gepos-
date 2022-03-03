import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ContributorResolverBase } from "./base/contributor.resolver.base";
import { Contributor } from "./base/Contributor";
import { ContributorService } from "./contributor.service";

@graphql.Resolver(() => Contributor)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ContributorResolver extends ContributorResolverBase {
  constructor(
    protected readonly service: ContributorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
