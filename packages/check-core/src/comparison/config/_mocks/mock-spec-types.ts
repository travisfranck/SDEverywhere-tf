// Copyright (c) 2023 Climate Interactive / New Venture Fund

import type {
  ComparisonScenarioGroupId,
  ComparisonScenarioGroupRefSpec,
  ComparisonScenarioGroupSpec,
  ComparisonScenarioId,
  ComparisonScenarioInputAtPositionSpec,
  ComparisonScenarioInputAtValueSpec,
  ComparisonScenarioInputPosition,
  ComparisonScenarioInputSpec,
  ComparisonScenarioPresetMatrixSpec,
  ComparisonScenarioRefSpec,
  ComparisonScenarioSpec,
  ComparisonScenarioWithAllInputsSpec,
  ComparisonScenarioWithInputsSpec,
  ComparisonSpecs,
  ComparisonViewGraphsArraySpec,
  ComparisonViewGraphsPresetSpec,
  ComparisonViewGraphsSpec,
  ComparisonViewGroupSpec,
  ComparisonViewGroupWithScenariosSpec,
  ComparisonViewGroupWithViewsSpec,
  ComparisonViewSpec
} from '../comparison-spec-types'

//
// SCENARIOS
//

export function scenarioMatrixSpec(): ComparisonScenarioPresetMatrixSpec {
  return {
    kind: 'scenario-matrix'
  }
}

export function scenarioWithAllInputsSpec(
  position: ComparisonScenarioInputPosition,
  opts?: { id?: string; title?: string; subtitle?: string }
): ComparisonScenarioWithAllInputsSpec {
  return {
    kind: 'scenario-with-all-inputs',
    id: opts?.id,
    title: opts?.title,
    subtitle: opts?.subtitle,
    position
  }
}

export function scenarioWithInputsSpec(
  inputs: ComparisonScenarioInputSpec[],
  opts?: { id?: string; title?: string; subtitle?: string }
): ComparisonScenarioWithInputsSpec {
  return {
    kind: 'scenario-with-inputs',
    id: opts?.id,
    title: opts?.title,
    subtitle: opts?.subtitle,
    inputs
  }
}

export function inputAtPositionSpec(
  inputName: string,
  position: ComparisonScenarioInputPosition
): ComparisonScenarioInputAtPositionSpec {
  return {
    kind: 'input-at-position',
    inputName,
    position
  }
}

export function inputAtValueSpec(inputName: string, value: number): ComparisonScenarioInputAtValueSpec {
  return {
    kind: 'input-at-value',
    inputName,
    value
  }
}

export function scenarioRefSpec(
  scenarioId: ComparisonScenarioId,
  title?: string,
  subtitle?: string
): ComparisonScenarioRefSpec {
  return {
    kind: 'scenario-ref',
    scenarioId,
    title,
    subtitle
  }
}

//
// SCENARIO GROUPS
//

export function scenarioGroupSpec(
  title: string,
  scenarios: (ComparisonScenarioSpec | ComparisonScenarioRefSpec)[],
  opts?: { id?: string }
): ComparisonScenarioGroupSpec {
  return {
    kind: 'scenario-group',
    id: opts?.id,
    title,
    scenarios
  }
}

export function scenarioGroupRefSpec(groupId: ComparisonScenarioGroupId): ComparisonScenarioGroupRefSpec {
  return {
    kind: 'scenario-group-ref',
    groupId
  }
}

//
// VIEWS
//

export function viewSpec(
  title: string | undefined,
  subtitle: string | undefined,
  scenarioId: ComparisonScenarioId,
  graphs: ComparisonViewGraphsSpec
): ComparisonViewSpec {
  return {
    kind: 'view',
    title,
    subtitle,
    scenarioId,
    graphs
  }
}

export function graphsPresetSpec(preset: 'all'): ComparisonViewGraphsPresetSpec {
  return {
    kind: 'graphs-preset',
    preset
  }
}

export function graphsArraySpec(graphIds: string[]): ComparisonViewGraphsArraySpec {
  return {
    kind: 'graphs-array',
    graphIds
  }
}

//
// VIEW GROUPS
//

export function viewGroupWithViewsSpec(title: string, views: ComparisonViewSpec[]): ComparisonViewGroupWithViewsSpec {
  return {
    kind: 'view-group-with-views',
    title,
    views
  }
}

export function viewGroupWithScenariosSpec(
  title: string,
  scenarios: (ComparisonScenarioRefSpec | ComparisonScenarioGroupRefSpec)[],
  graphs: ComparisonViewGraphsSpec
): ComparisonViewGroupWithScenariosSpec {
  return {
    kind: 'view-group-with-scenarios',
    title,
    scenarios,
    graphs
  }
}

//
// TOP-LEVEL TYPES
//

export function comparisonSpecs(
  scenarios: ComparisonScenarioSpec[],
  scenarioGroups: ComparisonScenarioGroupSpec[] = [],
  viewGroups: ComparisonViewGroupSpec[] = []
): ComparisonSpecs {
  return {
    scenarios,
    scenarioGroups,
    viewGroups
  }
}
