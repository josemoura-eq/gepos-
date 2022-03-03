import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HealthAreaService } from "./healthArea.service";
import { HealthAreaControllerBase } from "./base/healthArea.controller.base";

@swagger.ApiTags("health-areas")
@common.Controller("health-areas")
export class HealthAreaController extends HealthAreaControllerBase {
  constructor(
    protected readonly service: HealthAreaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
