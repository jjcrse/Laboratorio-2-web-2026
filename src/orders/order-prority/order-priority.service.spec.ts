import { OrderEntity } from "../entities/order.entity";
import { OrderPriorityService } from "./order-priority.service";


describe("OrderPriorityService", () => {
  const service = new OrderPriorityService();

  
  function buildOrder(status: "pending" | "ready", quantity: number): OrderEntity {
    return { status, quantity } as OrderEntity;
  }

  it("un pedido pending con cantidad 1 devuelve normal", () => {
    const order = buildOrder("pending", 1);
    const result = service.classify(order);
    expect(result.priority).toBe("normal");
  });

  it("un pedido pending con cantidad 3 devuelve medium", () => {
    const order = buildOrder("pending", 3);
    const result = service.classify(order);
    expect(result.priority).toBe("medium");
  });

  it("un pedido pending con cantidad 4 devuelve high", () => {
    const order = buildOrder("pending", 4);
    const result = service.classify(order);
    expect(result.priority).toBe("high");
  });

  it("un pedido ready con cantidad 5 devuelve completed", () => {
    const order = buildOrder("ready", 5);
    const result = service.classify(order);
    expect(result.priority).toBe("completed");
  });
});