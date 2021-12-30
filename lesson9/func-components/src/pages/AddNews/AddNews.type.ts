import type {NewsType} from "../../types/news.type";

export type AddNewsType = {
    onAddArticle: (article: NewsType) => void
}