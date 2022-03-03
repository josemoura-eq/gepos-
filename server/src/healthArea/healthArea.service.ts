import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { HealthAreaServiceBase } from "./base/healthArea.service.base";

@Injectable()
export class HealthAreaService extends HealthAreaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
