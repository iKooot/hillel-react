import type {NewsType} from "../../../types/news.type";

export type NewsItemType = {
    article: NewsType;
    onRemoveArticle: (id: string) => void;
}