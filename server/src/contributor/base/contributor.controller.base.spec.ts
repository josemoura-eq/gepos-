import { Test } from "@nestjs/testing";
import { INestApplication, HttpStatus, ExecutionContext } from "@nestjs/common";
import request from "supertest";
import { MorganModule } from "nest-morgan";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { ContributorController } from "../contributor.controller";
import { ContributorService } from "../contributor.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  comune: "exampleComune",
  contributorName: "exampleContributorName",
  countryOfOrigin: "exampleCountryOfOrigin",
  createdAt: new Date(),
  id: "exampleId",
  municipality: "exampleMunicipality",
  numberOfColaborators: "exampleNumberOfColaborators",
  organizationType: "exampleOrganizationType",
  province: "exampleProvince",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  comune: "exampleComune",
  contributorName: "exampleContributorName",
  countryOfOrigin: "exampleCountryOfOrigin",
  createdAt: new Date(),
  id: "exampleId",
  municipality: "exampleMunicipality",
  numberOfColaborators: "exampleNumberOfColaborators",
  organizationType: "exampleOrganizationType",
  province: "exampleProvince",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    comune: "exampleComune",
    contributorName: "exampleContributorName",
    countryOfOrigin: "exampleCountryOfOrigin",
    createdAt: new Date(),
    id: "exampleId",
    municipality: "exampleMunicipality",
    numberOfColaborators: "exampleNumberOfColaborators",
    organizationType: "exampleOrganizationType",
    province: "exampleProvince",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  comune: "exampleComune",
  contributorName: "exampleContributorName",
  countryOfOrigin: "exampleCountryOfOrigin",
  createdAt: new Date(),
  id: "exampleId",
  municipality: "exampleMunicipality",
  numberOfColaborators: "exampleNumberOfColaborators",
  organizationType: "exampleOrganizationType",
  province: "exampleProvince",
  updatedAt: new Date(),
};

const service = {
  create() {
    return CREATE_RESULT;
  },
  findMany: () => FIND_MANY_RESULT,
  findOne: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

describe("Contributor", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ContributorService,
          useValue: service,
        },
      ],
      controllers: [ContributorController],
      imports: [MorganModule.forRoot(), ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /contributors", async () => {
    await request(app.getHttpServer())
      .post("/contributors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /contributors", async () => {
    await request(app.getHttpServer())
      .get("/contributors")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /contributors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contributors"}/${nonExistingId}`)
      .expect(404)
      .expect({
        statusCode: 404,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /contributors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/contributors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
