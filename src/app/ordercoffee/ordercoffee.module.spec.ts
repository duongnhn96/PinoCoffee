import { OrdercoffeeModule } from './ordercoffee.module';

describe('OrdercoffeeModule', () => {
  let ordercoffeeModule: OrdercoffeeModule;

  beforeEach(() => {
    ordercoffeeModule = new OrdercoffeeModule();
  });

  it('should create an instance', () => {
    expect(ordercoffeeModule).toBeTruthy();
  });
});
