import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [
    { id: 1, name: 'Food', icon: '🍔', color: '#FF6B6B' },
    { id: 2, name: 'Transportation', icon: '🚗', color: '#4D96FF' },
    { id: 3, name: 'Bills', icon: '💡', color: '#FFD93D' },
    { id: 4, name: 'Shopping', icon: '🛍️', color: '#6BCB77' },
  ];
  private nextId = 5;

  create(data: any) {
    const category: Category = {
      id: this.nextId++,
      name: data.name,
      icon: data.icon || '📁',
      color: data.color || '#9d4edd',
    };
    this.categories.push(category);
    return category;
  }

  findAll() {
    return this.categories;
  }

  findOne(id: number) {
    const category = this.categories.find(item => item.id === id);
    if (!category) {
      throw new Error('Category not found');
    }
    return category;
  }

  remove(id: number) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Category not found');
    }
    const [removed] = this.categories.splice(index, 1);
    return removed;
  }
}
