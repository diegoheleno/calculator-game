import { Entity, Column, ManyToOne, JoinColumn } from "typeorm"
import DefaultEntity from "./entity";
import Stage from "./stage.entity";

@Entity()
export default class Result extends DefaultEntity {
    @ManyToOne(() => Stage) @JoinColumn() stageId: string;
    @Column() value: number;
}