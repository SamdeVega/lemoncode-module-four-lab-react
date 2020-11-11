import { Picture } from "../entities/Picture"
import { PictureRepository } from "./PictureRepository"

export const DogsRepository = (): PictureRepository => {
    const list = (): Picture[] => [
        {
            id: 'bs7hj2ksa0',
            picUrl: 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg',
            title: 'Cool dog A',
        },
        {
            id: 's8j271gcmo',
            picUrl: 'https://icdn6.themanual.com/image/themanual/connor-the-puggle-puppy-photo-credit-dan-baker-768x768.jpg',
            title: 'Cool dog B',
        },
        {
            id: 'g73md7slkx',
            picUrl: 'https://static.stacker.com/s3fs-public/styles/properly_sized_image/s3/2020-03/English%20Lab%20Puppy%20%281%29_0.png',
            title: 'Cool dog C',
        },
        {
            id: 'pq2zi8ld4h',
            picUrl: 'https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2020/03/dog-puppy-1278x834.jpg',
            title: 'Cool dog D',
        },
    ]
    return {
        list,
    }
}
