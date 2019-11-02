export enum Grade {
    BRONZE,
    SILVER,
    GOLD,
}

export interface Item {
    id?: number;
    name?: string;
    grade?: Grade;
    imgURL?: string;
    servantsURL?: string;
    drops?: Drop[];
}

export interface Drop {
    area?: string;
    quest?: string;
    ap?: number;
    apPerDrop?: number;
    dropRate?: number;
    sampleSize?: number;
}
