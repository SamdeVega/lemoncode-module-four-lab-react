import { CatsRepository } from "../repositories/CatsRepositoryMock"
import { DogsRepository } from "../repositories/DogsRepositoryMock"
import { Picture } from "../entities/Picture"

export enum PictureGenre {
    Kitties,
    Puppies,
}

export const PictureService = () => {
    const catsRepository = CatsRepository()
    const dogsRepository = DogsRepository()
    const list = (genre: PictureGenre = PictureGenre.Kitties): Picture[] => {
        switch (genre) {
            case PictureGenre.Puppies:
                return dogsRepository.list()
            default:
                return catsRepository.list()
        }
    }
    return {
        list,
    }
}
