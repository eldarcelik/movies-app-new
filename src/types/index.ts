import { CONTENT_TYPE, QUERY_TYPE } from '@/constants/constantValues';
import { IMovie, IShow } from '@/pages/Home/types';

export interface IItem extends IMovie, IShow {}

type ValueOf<T> = T[keyof T];

export type ContentType = ValueOf<typeof CONTENT_TYPE>;

export type QueryType = ValueOf<typeof QUERY_TYPE>;
