export interface Product{
    id:number;
    created_at:Date;
    updated_at:Date;
    title:string;
    description:string;
    image_num:number;
    url:string;
    tag:string;
    images:{
        name:string,
        url:string;
    }
}

export interface Blog {
    title: string;
    content: string;
    url: string;
    date: string;
    thumbnail: string;
    favicon:string;
    type:string;
}
