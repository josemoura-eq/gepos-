import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ContributorServiceBase } from "./base/contributor.service.base";

@Injectable()
export class ContributorService extends ContributorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
