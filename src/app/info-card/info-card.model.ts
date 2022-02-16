export class InfoCardModel {
    img: string;
    title: string;
    description: string;

    constructor(img: string, title:string, description: string) {
        this.img = img;
        this.title = title;
        this.description = description;
    }
}