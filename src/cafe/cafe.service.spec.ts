import { Test, TestingModule } from '@nestjs/testing';
import { CafeService } from './cafe.service';
import { faker } from '@faker-js/faker';
import { CafeEntity } from './cafe.entity';
import { TypeOrmTestingConfig } from 'src/shared/testing-utils/typeorm-testing-config';
import { Repository } from 'typeorm';

describe('CafeService', () => {
  let service: CafeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CafeService],
      imports: [...TypeOrmTestingConfig()],


    }).compile();

    service = module.get<CafeService>(CafeService);
    repository = module.get<Repository<CafeEntity>>(getRepositoryToken(CafeEntity));

  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create should return a new cafe', async () => {
    const cafe: CafeEntity = {
      id: "",
      name: faker.company.companyName(),
      description: faker.lorem.sentence(),
      price: faker.address.secondaryAddress(),
      
    }
});

