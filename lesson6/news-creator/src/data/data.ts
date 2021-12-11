import faker from 'faker';
import type {DataType, Hashtag} from "../types/dataType";

export const HASHTAGS: Hashtag[] = [
    {
        id: faker.datatype.uuid(),
        label: '#news'
    },
    {
        id: faker.datatype.uuid(),
        label: '#ukraine'
    },
    {
        id: faker.datatype.uuid(),
        label: '#odessa'
    },
    {
        id: faker.datatype.uuid(),
        label: '#hot'
    },
]

const getHashtags = (): string[] => {
    const numberOfHashtags = faker.datatype.number({min: 1, max: HASHTAGS.length - 1})

    const hashtagsArray = Array(numberOfHashtags).fill('').map( () => {
        const randomIndex = faker.datatype.number({min: 1, max: HASHTAGS.length - 1})

        return HASHTAGS[randomIndex].label
    })

    const filteredArray = hashtagsArray.filter( el => {
        if(hashtagsArray.includes(el)) {
            return true
        }
    })

    return filteredArray
}

export const makeArticle = function (): DataType {
    return {
        id: faker.datatype.uuid(),
        author: `${faker.name.firstName()} ${faker.name.firstName()}`,
        title: faker.name.title(),
        description: faker.lorem.paragraph(),
        text: faker.lorem.text(),
        photo: `${faker.image.imageUrl()}?v=${Math.round(Math.random() * 100)}`,
        hashtags: getHashtags(),
    }
}

export const makeNews = function (count: number): DataType[] {
    return Array(count).fill('').map(() => makeArticle())
}