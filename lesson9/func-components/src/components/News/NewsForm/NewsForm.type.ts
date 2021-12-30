import type {NewsType} from "../../../types/news.type";

export type NewsFormType = {
    onAddArticle: (article: NewsType) => void;
}

export type NewsFormValidationType = {
    [name: string]: {
        valid: null | boolean;
        errorMessage: string;
    }
}