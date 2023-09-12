import { useContext } from "react"
import { GroupCtx } from "../context/GroupCtx"

export const useGroupCtx = () => {
    const ctx = useContext(GroupCtx)

    if (!ctx) {
        throw Error("useGroupCtx is outside GroupCtxProvider")
    }

    return ctx
}