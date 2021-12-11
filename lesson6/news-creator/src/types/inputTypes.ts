export type InputText = {
    value: string | ArrayBuffer | null;
    touched: boolean;
    valid: boolean;
}

export type InputGroup = {
    title: InputText,
    description: InputText,
    text: InputText,
    photo: InputText,
    author: InputText,
    hashtags: {
        checkboxList: Hashtag[],
        touched: boolean;
        valid: boolean;
    },
}

export type Hashtag = {
    label: string;
    id: string;
    checked: boolean;
}