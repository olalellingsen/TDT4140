import { useContext } from "react"
import { SessionCtx } from "../context/SessionCtx"

export const useSessionCtx = () => {
    const ctx = useContext(SessionCtx)

    if (!ctx) {
        throw Error("useSessionCtx is outside SessionCtxProvider")
    }

    return ctx
}