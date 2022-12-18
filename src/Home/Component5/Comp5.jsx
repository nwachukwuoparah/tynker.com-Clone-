import './Component5.css'

const Component5 = ({ h2, p1, p2, p3, p4, p5 }) => {
    return (
        <div className='Comp5_card'>
            <div className='Comp5_card_wrap'>
                <h2>{h2}</h2>
                <p>{p1} </p>
                <p>{p2} </p>
                <p>{p3} </p>
                <p>{p4} </p>
                {p5 && <p>{p5}</p>}
            </div>

        </div>
    )
}

export default Component5