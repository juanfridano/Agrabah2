import {CategoryType} from './categoryType';
export class Category {
    id: number;
    name: string;
    type: CategoryType;

    constructor(id: number, name: string, type: CategoryType) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

