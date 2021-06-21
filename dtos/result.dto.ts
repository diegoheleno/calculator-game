import OperationDto from "./operation.dto";

export default interface Result {
  value: number;
  operations: OperationDto[];
}