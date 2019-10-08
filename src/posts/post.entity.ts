import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class PostEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:200})
    title:string;

    @Column({length:200})
    content:string;
}