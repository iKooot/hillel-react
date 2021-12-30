import type {NewsType} from "../../../types/news.type";

export type NewsListPropType = {
    list: NewsType[],
    onRemoveArticle: (id: string) => void;
}