export class User {
    Id:number;
    Name:string;
    Level:number;
    HP:number;
    constructor(config:any)
    {
        this.Id = config.Id ||-1;
        this.Name= config.Name ||"";
        this.Level = config.Level ||1;
        this.HP = config.HP || 0;
    }
}