import './Support.css';
import { BasicLayout } from '../../layouts/BasicLayout';

const iframeStyle = {
    border:"none",
    width: "fit-content",
    padding: "4px",
    background: "#f9f9f9"
}

const content =
    <div className="supportContainer">
        <h1>support</h1>
        <p>if you'd like to support my work and future projects, feel free to send a tip!</p>
        <p><b>all support is greatly appreciated :-)</b></p>
        <p>・゜゜ . . * *✧･ﾟ:*・ ✧･ﾟ: ・゜゜・．</p>
        <iframe id='kofiframe' src='https://ko-fi.com/graceisonline/?hidefeed=true&widget=true&embed=true&preview=true' style={iframeStyle} height='712' title='graceisonline'></iframe>
    </div>

export default function Support(){
    return(
        <BasicLayout title={"Support"} content={content} />
    )
}