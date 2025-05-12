import { BasicLayout } from '../../layouts/BasicLayout';

const content =
    <div style={{textAlign: 'center', fontFamily: 'Lacquer'}}>
        <h1 style={{marginTop: '25px'}}>sorry, this page does not exist.</h1>
    </div>

export default function PageNotFound(){
    return(
        BasicLayout(content)
    )
}