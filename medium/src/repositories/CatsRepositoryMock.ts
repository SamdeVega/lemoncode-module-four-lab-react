import { Picture } from "../entities/Picture"
import { PictureRepository } from "./PictureRepository"

export const CatsRepository = (): PictureRepository => {
    const list = (): Picture[] => [
        {
            id: 'j83hd7j938',
            picUrl: 'https://a.wattpad.com/cover/70004173-352-k510160.jpg',
            title: 'Cool cat A',
        },
        {
            id: 'nu3w9yufbe7',
            picUrl: 'https://cf.ltkcdn.net/cats/images/orig/245861-1600x1066-black-cat-close-up-sitting.jpg',
            title: 'Cool cat B',
        },
        {
            id: 'l6wauyw7dk2',
            picUrl: 'https://sparknlaunch.files.wordpress.com/2014/02/cute_cat_reddit_post.jpg',
            title: 'Cool cat C',
        },
        {
            id: 'm3c3nshy4s',
            picUrl: 'https://wallpaperset.com/w/full/7/b/b/56635.jpg',
            title: 'Cool cat D',
        },
    ]
    return {
        list,
    }
}
