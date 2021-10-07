import { Test, TestingModule } from '@nestjs/testing';
import { RequestService } from './request.service';
import {
  createConnection,
  getConnection,
  getRepository,
  Repository,
} from 'typeorm';
import { Request } from './entities/request.entity';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { requestFactory } from './request.factory';

describe('RequestService', () => {
  let service: RequestService;
  let repository: Repository<Request>;
  const testConnectionName = 'testConnection';

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RequestService,
        {
          provide: getRepositoryToken(Request),
          useClass: Repository,
        },
      ],
    }).compile();

    let connection = await createConnection({
      type: 'better-sqlite3',
      database: ':memory:',
      dropSchema: true,
      entities: [Request],
      synchronize: true,
      logging: false,
      name: testConnectionName,
    });

    let repository = getRepository(Request, testConnectionName);
    service = new RequestService(repository);
    // service = module.get<RequestService>(RequestService);
    return connection;
  });

  afterEach(async () => {
    await getConnection(testConnectionName).close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have no users (test for mock)', async () => {
    insertMocks(testConnectionName);

    expect(await service.findAll()).toHaveLength(10);
  });
});

function insertMocks(testConnectionName) {
  let repository = getRepository(Request, testConnectionName);

  Array(10).forEach((_, index) => {
    let mockRequest = requestFactory({ id: index + 1 });
    repository.insert(mockRequest);
  });
}