import { useContext } from "react"
import { ExerciseCtx } from "../context/ExerciseCtx"

export const useExerciseCtx = () => {
    const ctx = useContext(ExerciseCtx)

    if (!ctx) {
        throw Error("useExerciseCtx is outside ExerciseCtxProvider")
    }

    return ctx
}