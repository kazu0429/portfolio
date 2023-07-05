export interface Product{
    id:number;
    created_at:Date;
    updatad_at:Date;
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