// @flow
// tip length calibration types
import typeof {
  TIP_LENGTH_STEP_SESSION_STARTED,
  TIP_LENGTH_STEP_LABWARE_LOADED,
  TIP_LENGTH_STEP_MEASURING_NOZZLE_OFFSET,
  TIP_LENGTH_STEP_PREPARING_PIPETTE,
  TIP_LENGTH_STEP_INSPECTING_TIP,
  TIP_LENGTH_STEP_MEASURING_TIP_OFFSET,
  TIP_LENGTH_STEP_CALIBRATION_COMPLETE,
} from '../constants'
import type { CalibrationLabware } from '../types'

import type { LabwareDefinition2 } from '@opentrons/shared-data'

export type TipLengthCalibrationStep =
  | TIP_LENGTH_STEP_SESSION_STARTED
  | TIP_LENGTH_STEP_LABWARE_LOADED
  | TIP_LENGTH_STEP_MEASURING_NOZZLE_OFFSET
  | TIP_LENGTH_STEP_PREPARING_PIPETTE
  | TIP_LENGTH_STEP_INSPECTING_TIP
  | TIP_LENGTH_STEP_MEASURING_TIP_OFFSET
  | TIP_LENGTH_STEP_CALIBRATION_COMPLETE

export type TipLengthCalibrationInstrument = {|
  model: string,
  name: string,
  tipLength: number,
  mount: string,
  serial: string,
  defaultTipracks: Array<LabwareDefinition2>,
|}

export type TipLengthCalibrationSessionParams = {|
  mount: string,
  hasCalibrationBlock: boolean,
  tipRackDefinition: LabwareDefinition2,
|}

export type TipLengthCalibrationSessionDetails = {|
  instrument: TipLengthCalibrationInstrument,
  currentStep: TipLengthCalibrationStep,
  labware: Array<CalibrationLabware>,
|}
