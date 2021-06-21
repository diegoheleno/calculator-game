import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class DefaultEntity {
    @PrimaryGeneratedColumn("uuid") id: string;
}