import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ContributorService } from "./contributor.service";
import { ContributorControllerBase } from "./base/contributor.controller.base";

@swagger.ApiTags("contributors")
@common.Controller("contributors")
export class ContributorController extends ContributorControllerBase {
  constructor(
    protected readonly service: ContributorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
