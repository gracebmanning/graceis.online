export default function PageNotFound(){
    return(
        <div className='container' style={{textAlign: 'center', fontFamily: 'Lacquer'}}>
            <h1 style={{marginTop: '25px'}}>sorry, this page does not exist.</h1>
            <a href='/' style={{color: 'black'}}>
                <h2>go home</h2>
            </a>
        </div>
    )
}