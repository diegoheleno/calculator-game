import OperationType from "../enums/type.enum"

export default interface Operation {
  type: OperationType;
  value: number;
}
