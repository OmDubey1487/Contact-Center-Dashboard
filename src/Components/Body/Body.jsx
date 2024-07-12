import './Body.css'
import Header from '../Header/Header'
import Card from '../Cards/Card'
import { useEffect, useRef, useState } from 'react'

const Body = () => {
    const [clickedOption, setClickedOption] = useState (1);

    return (
        <div className='body'>
            <Header />
            <div className="main">
                <ul  className='option-list'>
                    <li>
                        <button className={clickedOption===1 ? 'selected' : ''} onClick={e=>setClickedOption(1)}>Last 24 hours</button>
                    </li>
                    <li>
                        <button className={clickedOption===2 ? 'selected' : ''} onClick={e=>setClickedOption(2)}>Last week</button>
                    </li>
                    <li>
                        <button className={clickedOption===3 ? 'selected' : ''} onClick={e=>setClickedOption(3)}>Last month</button>
                    </li>
                    <li>
                        <button className={clickedOption===4 ? 'selected' : ''} onClick={e=>setClickedOption(4)}>Last year</button>
                    </li>
                </ul>
                <div className="stats">
                    <div className='overall-call-stats'>
                        <span>OverallCall Stats:</span>
                        <ul className="info-cards">
                            <li>
                                <Card width="15vw" height="10vw" ></Card>
                            </li>
                            <li>
                                <Card width="15vw" height="10vw"></Card>
                            </li>
                        </ul>
                    </div>
                    <div className="followup-call-stats">
                        <span>Follow-up Calls:</span>
                        <ul className="info-cards">
                            <li>
                                <Card width="10vw" height="10vw" background='pink'></Card>
                            </li>
                            <li>
                                <Card width="10vw" height="10vw" background='light-blue'></Card>
                            </li>
                            <li>
                                <Card width="10vw" height="10vw" background='purple'></Card>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='secondary'>
                {/* <Card width="90%" height="40vh">
                    
                </Card>
                <span>Top Identified Opportunities:</span>
                <Card width="90%" height="50vh"></Card> */}
            </div>

        </div>
    )
}

export default Body