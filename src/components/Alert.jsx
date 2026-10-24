import { css } from "@emotion/react";
import ErrorIcon from "../assets/frown.jsx"
import WarningIcon from "../assets/alert-triangle.jsx";
import InfoIcon from "../assets/alert-circle.jsx";
import SuccessIcon from "../assets/check-circle.jsx";

function Alert(props) {
    let AlertIcon
    let bgColor

    if (props.severity === "error"){
        bgColor = "#F9C8C8"
        AlertIcon = ErrorIcon
    } else if (props.severity === "warning"){
        bgColor = "#F9D9C8"
        AlertIcon = WarningIcon
    } else if (props.severity === "info") {
        bgColor = "#F9EBC8"
        AlertIcon = InfoIcon
    } else if (props.severity === "success") {
        bgColor = "#CEF7CD"
        AlertIcon = SuccessIcon
    }

    return (
        <div
            css={css`
                    margin: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: start;
                    padding-left: 20px;
                    width: 650px;
                    height: 76px;
                    font-weight: 700;
                    font-size: 20px;
                    color: #444444;
                    border-radius: 10px;
                    background-color: ${bgColor};
                `}
        >
            <div
                css={css`margin-right: 20px;`}
            >
                <AlertIcon />
            </div>
            {props.message}
        </div>
    )
}

export default Alert