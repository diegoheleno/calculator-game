import { Entity, Column, ManyToOne, JoinColumn } from "typeorm"
import DefaultEntity from "./entity";
import Result from "./result.entity";
import Stage from "./stage.entity";

@Entity()
export default class Operation extends DefaultEntity {
    @ManyToOne(() => Stage) @JoinColumn() stageId: string;
    @ManyToOne(() => Result) @JoinColumn() resultId: string;
    @Column() type: string;
    @Column() value: number;
}