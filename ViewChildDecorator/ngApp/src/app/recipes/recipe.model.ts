export class Recipe {
    // declare a property
    public name: string;
    public description: string;
    public imagePath: string;

    // initialize property using constructor
    constructor(name: string, desc: string, imgPath: string){
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
    }
}