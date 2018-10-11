export class Timeline {
    heading: string;
    duration: string;
    description: Array<string>;
    institute: string;

    constructor (heading: string, duration: string, description: Array<string>, institute: string){
        this.heading = heading;
        this.duration = duration;
        this.description = description || [];
        this.institute = institute;
    }
}