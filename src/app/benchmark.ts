export class Benchmark {
    id: number;
    name: string;
    standards: string;
    level: number[];
    modifier: string[];
    scheme: string;
    category: Category;
}

export enum Category {
    Gymnastics,
    Conditioning,
    Weightlifting
}

export const BENCHMARKS: Benchmark[] = [
    { id: 11, name: 'Pull-ups', standards: 'some standards', level: [1,2,3], modifier: ['a', 'b', 'c'], scheme:'dunno', category: Category.Gymnastics },
    { id: 12, name: 'Push-ups', standards: 'some standards', level: [1,2,3], modifier: ['a', 'b', 'c'], scheme:'dunno', category: Category.Gymnastics },
    { id: 13, name: 'Sit-ups', standards: 'some standards', level: [1,2,3], modifier: ['a', 'b', 'c'], scheme:'dunno', category: Category.Gymnastics }
]