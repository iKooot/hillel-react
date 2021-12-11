export type DataType = {
    id: string;
    author: string;
    title: string;
    description: string;
    text: string;
    photo: string;
    hashtags: string[],
}

export type Hashtag = {
    id: string;
    label: string;
}