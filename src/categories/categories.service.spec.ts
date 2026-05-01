import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(() => {
    service = new CategoriesService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a category and auto-increment id', () => {
    const category = service.create({ name: 'Food' });
    expect(category).toEqual({ id: 1, name: 'Food' });

    const secondCategory = service.create({ name: 'Transport' });
    expect(secondCategory).toEqual({ id: 2, name: 'Transport' });
  });

  it('should return all categories', () => {
    service.create({ name: 'Food' });
    service.create({ name: 'Transport' });

    expect(service.findAll()).toEqual([
      { id: 1, name: 'Food' },
      { id: 2, name: 'Transport' },
    ]);
  });

  it('should find a category by id', () => {
    service.create({ name: 'Food' });
    expect(service.findOne(1)).toEqual({ id: 1, name: 'Food' });
  });

  it('should remove a category by id', () => {
    service.create({ name: 'Food' });
    const removed = service.remove(1);
    expect(removed).toEqual({ id: 1, name: 'Food' });
    expect(service.findAll()).toEqual([]);
  });

  it('should throw on unknown category id', () => {
    expect(() => service.findOne(999)).toThrow('Category not found');
    expect(() => service.remove(999)).toThrow('Category not found');
  });
});
