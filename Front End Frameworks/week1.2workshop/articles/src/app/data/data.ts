import { Article } from '../models/article.model';
import { data } from "../data/seed"

export class Data{
private articles: Article[];

    constructor(){
        this.articles = data.map(d => new Article(d.title, d.description, d.author, d.imageUrl));
    }

    getData(){
        return this.articles;
    }
}


// export class ArticlesData{
//     getData(): Article[]{
//         let articles: Article[]=[];

//         for(let i=0; i<data.length; i++){
//             articles[1]=new Article(data[1].title, data[1].description,
//                 data[1].author, data[1].imageUrl);
//         }
//         return articles;
//     }
// }