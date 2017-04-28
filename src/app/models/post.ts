import {PostImage} from '../models/postimage';
import {Address} from '../models/address';

export class Post {
    Id:number;
    Title:string;
    SubTitle:string;
    Text:string;
    User:string;
    UserId:number;
    Address:Address[]
    ImageUrls:PostImage[];
}