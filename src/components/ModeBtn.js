import { useSelector, useDispatch } from 'react-redux'
import { darkMode, lightMode } from '../duck/modeSlice.js'

export default function ModeButton() {
    const mode = useSelector((state) => state)
    const dispatch = useDispatch()

    return (
        <div style={{'backgroundColor': mode.color1, 'padding': '15px'}}>
            <button onClick={() => mode.darkMode ? dispatch(lightMode()) : dispatch(darkMode())}>
                { mode.darkMode ? "Light mode" : "Dark mode" }
            </button>
        </div>
    )
}