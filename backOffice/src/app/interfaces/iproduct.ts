export interface IProduct {
    id: string;
    data: {
        price: number,
        title: string,
        reviews: string[],
        category: string,
        description: string,
        employee: string
    };
}
