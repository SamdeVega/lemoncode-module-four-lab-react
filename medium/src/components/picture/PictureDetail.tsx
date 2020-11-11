import { Card, CardContent, CardMedia, Typography } from "@material-ui/core"
import React from "react"
import { Picture } from "../../entities/Picture"

interface PictureProps {
    picture: Picture
}

export const PictureDetail = (props: PictureProps) => {
    const { picture } = props

    return (
        <Card>
            <CardMedia
                className="media"
                image={picture.picUrl}
            />
            <CardContent>
                <Typography>
                    {picture.title}
                </Typography>
            </CardContent>
        </Card>
    )
}
