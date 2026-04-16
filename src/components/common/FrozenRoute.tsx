'use client'

import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ReactNode, useContext, useRef } from "react";

export default function FrozenRoute({ children }: { children: ReactNode }) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context);

    if (!context) {
        return <>{children}</>;
    }

    return (
        <LayoutRouterContext.Provider value={frozen.current}>
            {children}
        </LayoutRouterContext.Provider>
    );
};
