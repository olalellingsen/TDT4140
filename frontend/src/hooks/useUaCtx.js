import { useContext } from "react"
import { UaCtx } from "../context/UaCtx"

export const useUaCtx = () => {
    const ctx = useContext(UaCtx)

    if (!ctx) {
        throw Error("userAuthenticationContext er utenfor uaContextProvider")
    }

    return ctx
}

