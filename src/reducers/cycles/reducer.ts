import { produce } from 'immer'

import { Cycle } from '@/types/cycle'

import { CyclesActionTypes } from './actions'

interface CyclesState {
    cycles: Cycle[]
    activeCycleId: string | null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cyclesReducer = (state: CyclesState, action: any) => {
    switch (action.type) {
        case CyclesActionTypes.ADD_CYCLE: {
            /**
             * COM BIBLIOTECA IMMER
             */
            return produce(state, (draft) => {
                draft.cycles.push(action.payload.newCycle)
                draft.activeCycleId = action.payload.newCycle.id
            })

            /**
             * SEM IMMER

                return {
                    ...state,
                    cycles: [...state.cycles, action.payload.newCycle],
                    activeCycleId: action.payload.newCycle.id,
                }
            */
        }
        case CyclesActionTypes.INTERRUPT_CURRENT_CYCLE: {
            /**
             * COM BIBLIOTECA IMMER
             */
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].interruptedDate = new Date()
            })

            /**
             * SEM IMMER

                return {
                    ...state,
                    cycles: state.cycles.map((cycle) => {
                        if (cycle.id === state.activeCycleId) {
                            return { ...cycle, interruptedDate: new Date() }
                        } else {
                            return cycle
                        }
                    }),
                    activeCycleId: null,
                }
            */
        }
        case CyclesActionTypes.FINISHED_CURRENT_CYCLE: {
            /**
             * COM BIBLIOTECA IMMER
             */
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null
                draft.cycles[currentCycleIndex].finishedDate = new Date()
            })

            /**
             * SEM IMMER
                return {
                    ...state,
                    cycles: state.cycles.map((cycle) => {
                        if (cycle.id === state.activeCycleId) {
                            return { ...cycle, finishedDate: new Date() }
                        } else {
                            return cycle
                        }
                    }),
                }
            */
        }
        default:
            return state
    }
}
