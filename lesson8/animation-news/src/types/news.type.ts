export interface NewsType {
    id: string;
    title?: string;
    description?: string;
    hashtags: hashtag[];
}

export type hashtag = {
    label: string;
    id: string;
}