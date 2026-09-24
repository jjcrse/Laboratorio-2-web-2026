import { Test, TestingModule } from '@nestjs/testing';
import { OrderPreparationEstimateService } from './order-preparation-estimate.service';

describe('OrderPreparationEstimateService', () => {
  let service: OrderPreparationEstimateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderPreparationEstimateService],
    }).compile();

    service = module.get<OrderPreparationEstimateService>(OrderPreparationEstimateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
