import { Pipe, PipeTransform } from '@angular/core';
import { Grade, Item } from '../models/drop';

export class ItemGradeFilterOptions {
    grade: Grade
}

@Pipe({
    name: 'itemGradeFilter',
    pure: false
})
export class ItemGradeFilterPipe implements PipeTransform {
    transform(items: Item[], filter: ItemGradeFilterOptions): Item[] {
        if (!items || !filter) {
            return items;
        }
        return items.filter(i => i.grade === filter.grade);
    }
}