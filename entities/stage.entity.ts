import { Entity, Column } from "typeorm"
import DefaultEntity from "./entity";

@Entity()
export default class Stage extends DefaultEntity {
    @Column() phase: number
    @Column() start: number;
    @Column() end: number;
    @Column() times: number;
    @Column() state: string;
}