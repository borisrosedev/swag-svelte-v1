interface Designer {
    id: number,
        firstname: string
        lastname: string
        fullname: string
        photos: {
                id?: number,
                src: string,
                alt: string
            }[
            
        ]
}

export type { Designer }