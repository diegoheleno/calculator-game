import OperationDto from './operation.dto';
import ResultDto from './result.dto';
import StageState from '../enums/state.enum'

export default interface StageDto {
  id: string;
  phase: number
  start: number;
  end: number;
  times: number;
  operations: OperationDto[];
  results: ResultDto[];
  state: StageState;
  progress: number;
}

export const defaultStageDto: StageDto = {
  id: '',
  phase: 0,
  start: 0,
  end: 0,
  times: 0,
  operations: [],
  results: [],
  state: StageState.Draft,
  progress: 0,
};
