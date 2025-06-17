export interface TExtension{
    id: number;
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
}


export type FilterType = "all" | "active" | "inActive";