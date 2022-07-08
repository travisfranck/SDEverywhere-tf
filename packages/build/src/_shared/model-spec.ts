// Copyright (c) 2022 Climate Interactive / New Venture Fund

/**
 * Describes a model input variable.
 */
export interface InputSpec {
  /** The variable name (as used in the modeling tool). */
  varName: string

  /** The default value for the input. */
  defaultValue: number

  /** The minimum value for the input. */
  minValue: number

  /** The maximum value for the input. */
  maxValue: number
}

/**
 * Describes a model output variable.
 */
export interface OutputSpec {
  /** The variable name (as used in the modeling tool). */
  varName: string
}

/**
 * Describes a model (e.g., a Vensim mdl file) and the input/output variables
 * that should be included in the model generated by SDE.
 */
export interface ModelSpec {
  /** The start time (year) for the model (typically the same as `INITIAL TIME`). */
  startTime: number

  /** The end time (year) for the model (typically the same as `FINAL TIME`). */
  endTime: number

  /** The input variable specs. */
  inputs: InputSpec[]

  /** The output variable specs. */
  outputs: OutputSpec[]

  /** The dat files to be included with the SDE `spec.json` file. */
  // TODO: Remove references to `spec.json`
  datFiles: string[]

  /** Additional options included with the SDE `spec.json` file. */
  // TODO: Remove references to `spec.json`
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: { [key: string]: any }
}