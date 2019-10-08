import {Document} from 'mongoose';

export interface Posts extends Document{
    readonly title: string;
    readonly content: string;
}