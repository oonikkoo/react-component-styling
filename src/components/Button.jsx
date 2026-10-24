// Start coding here
import { css } from '@emotion/react'

function Button(prop) {
    let bgColor

    if (prop.color === "primary") {
        bgColor = "#074ee8"
    } else if (prop.color === "secondary") {
        bgColor = "#07a4e8"
    }

    return (
        <button
            css={css`
                display: block;
                margin: 10px;
                width: 170px;
                height: 50px;
                border-radius: 4px;
                font-weight: 400;
                background-color: ${bgColor};
            `}
        >{prop.name}</button>
    )
}

export default Button