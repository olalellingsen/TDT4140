import { useContext } from "react"
import { UserCtx } from "../context/UserCtx"

export const useUserCtx = () => {
    const ctx = useContext(UserCtx)

    if (!ctx) {
        throw Error("useUserCtx is outside UserCtxProvider")
    }

    return ctx
}