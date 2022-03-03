/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ObjectiveService } from "../objective.service";
import { ObjectiveCreateInput } from "./ObjectiveCreateInput";
import { ObjectiveWhereInput } from "./ObjectiveWhereInput";
import { ObjectiveWhereUniqueInput } from "./ObjectiveWhereUniqueInput";
import { ObjectiveFindManyArgs } from "./ObjectiveFindManyArgs";
import { ObjectiveUpdateInput } from "./ObjectiveUpdateInput";
import { Objective } from "./Objective";
import { ContributorFindManyArgs } from "../../contributor/base/ContributorFindManyArgs";
import { Contributor } from "../../contributor/base/Contributor";
import { ContributorWhereUniqueInput } from "../../contributor/base/ContributorWhereUniqueInput";
@swagger.ApiBearerAuth()
export class ObjectiveControllerBase {
  constructor(
    protected readonly service: ObjectiveService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Objective })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ObjectiveCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Objective> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Objective",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Objective"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        objective: data.objective
          ? {
              connect: data.objective,
            }
          : undefined,
      },
      select: {
        actualStatus: true,
        createdAt: true,
        expectedStatus: true,
        id: true,

        objective: {
          select: {
            id: true,
          },
        },

        timeframe: true,
        unit: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Objective] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ObjectiveFindManyArgs)
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Objective[]> {
    const args = plainToClass(ObjectiveFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Objective",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        actualStatus: true,
        createdAt: true,
        expectedStatus: true,
        id: true,

        objective: {
          select: {
            id: true,
          },
        },

        timeframe: true,
        unit: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Objective })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ObjectiveWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Objective | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Objective",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        actualStatus: true,
        createdAt: true,
        expectedStatus: true,
        id: true,

        objective: {
          select: {
            id: true,
          },
        },

        timeframe: true,
        unit: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Objective })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ObjectiveWhereUniqueInput,
    @common.Body()
    data: ObjectiveUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Objective | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Objective",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Objective"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          objective: data.objective
            ? {
                connect: data.objective,
              }
            : undefined,
        },
        select: {
          actualStatus: true,
          createdAt: true,
          expectedStatus: true,
          id: true,

          objective: {
            select: {
              id: true,
            },
          },

          timeframe: true,
          unit: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Objective })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ObjectiveWhereUniqueInput
  ): Promise<Objective | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          actualStatus: true,
          createdAt: true,
          expectedStatus: true,
          id: true,

          objective: {
            select: {
              id: true,
            },
          },

          timeframe: true,
          unit: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/contributor")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(ContributorFindManyArgs)
  async findManyContributor(
    @common.Req() request: Request,
    @common.Param() params: ObjectiveWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Contributor[]> {
    const query = plainToClass(ContributorFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Contributor",
    });
    const results = await this.service.findContributor(params.id, {
      ...query,
      select: {
        comune: true,
        contributorName: true,
        countryOfOrigin: true,
        createdAt: true,
        id: true,
        municipality: true,
        numberOfColaborators: true,
        organizationType: true,
        province: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/contributor")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "update",
    possession: "any",
  })
  async createContributor(
    @common.Param() params: ObjectiveWhereUniqueInput,
    @common.Body() body: ObjectiveWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      contributor: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Objective",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Objective"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/contributor")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "update",
    possession: "any",
  })
  async updateContributor(
    @common.Param() params: ObjectiveWhereUniqueInput,
    @common.Body() body: ContributorWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      contributor: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Objective",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Objective"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/contributor")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "update",
    possession: "any",
  })
  async deleteContributor(
    @common.Param() params: ObjectiveWhereUniqueInput,
    @common.Body() body: ObjectiveWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      contributor: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Objective",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Objective"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id/objectives")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "read",
    possession: "any",
  })
  @ApiNestedQuery(ObjectiveFindManyArgs)
  async findManyObjectives(
    @common.Req() request: Request,
    @common.Param() params: ObjectiveWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Objective[]> {
    const query = plainToClass(ObjectiveFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Objective",
    });
    const results = await this.service.findObjectives(params.id, {
      ...query,
      select: {
        actualStatus: true,
        createdAt: true,
        expectedStatus: true,
        id: true,

        objective: {
          select: {
            id: true,
          },
        },

        timeframe: true,
        unit: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post("/:id/objectives")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "update",
    possession: "any",
  })
  async createObjectives(
    @common.Param() params: ObjectiveWhereUniqueInput,
    @common.Body() body: ObjectiveWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      objectives: {
        connect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Objective",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Objective"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/objectives")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "update",
    possession: "any",
  })
  async updateObjectives(
    @common.Param() params: ObjectiveWhereUniqueInput,
    @common.Body() body: ObjectiveWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      objectives: {
        set: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Objective",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Objective"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id/objectives")
  @nestAccessControl.UseRoles({
    resource: "Objective",
    action: "update",
    possession: "any",
  })
  async deleteObjectives(
    @common.Param() params: ObjectiveWhereUniqueInput,
    @common.Body() body: ObjectiveWhereUniqueInput[],
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<void> {
    const data = {
      objectives: {
        disconnect: body,
      },
    };
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Objective",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new common.ForbiddenException(
        `Updating the relationship: ${
          invalidAttributes[0]
        } of ${"Objective"} is forbidden for roles: ${roles}`
      );
    }
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
