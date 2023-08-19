import React from "react"

type Props = {
    children: React.ReactNode
}

const Subtitle = ({ children }: Props) =>
    <p className="my-4 text-3xl italic">
        {children}
    </p>

export default Subtitle
