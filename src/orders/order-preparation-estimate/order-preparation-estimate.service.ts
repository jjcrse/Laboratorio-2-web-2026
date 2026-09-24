import { Injectable } from '@nestjs/common';
import { OrderEntity } from '../entities/order.entity';

@Injectable()
export class OrderPreparationEstimateService {
    estimate(order:OrderEntity): number {
        const estimatedTime = order.status === 'ready' ? 0 : 3 + order.quantity * 2;
        return estimatedTime;
    } 
}
