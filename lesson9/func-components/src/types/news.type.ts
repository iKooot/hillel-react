export type NewsType = {
    id: string;
    author: string;
    title: string;
    description: string;
    text: string;
    photo: string;
    hashtags: string[],
}

export type HashtagType = {
    id: string;
    label: string;
}