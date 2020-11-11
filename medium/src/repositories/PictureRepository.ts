import { Picture } from "../entities/Picture"

export interface PictureRepository {
    list: () => Picture[]
}
