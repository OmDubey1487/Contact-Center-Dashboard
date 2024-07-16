import './Body.css'
import Header from '../Header/Header'
import Card from '../Cards/Card'
import Table from '../Table/Table'
import { useEffect, useRef, useState } from 'react'
import statsData from '../../data/call-stats-data.json'
import frequentOpportunityDescData from '../../data/frequent-opportunity-desc.json'
import topOpportunitiesData from '../../data/top-identified-opportunity.json'

const stats = JSON.parse (JSON.stringify (statsData))
const frequentOpportunityDesc = JSON.parse (JSON.stringify (frequentOpportunityDescData))
const topOpportunities = JSON.parse (JSON.stringify (topOpportunitiesData))

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
                        <span className='stat-heading'>OverallCall Stats:</span>
                        <ul className="info-cards">
                            <li>
                                <Card width="15vw" height="10vw" >
                                    <div className="left-border">
                                        <span className='card-heading'>Total no. of Calls</span>
                                        <span className='stat-count'>{stats["overall_call_stats"].total}</span>
                                    </div>
                                    <span className='card-text'>Analyzed</span>
                                </Card>
                            </li>
                            <li>
                                <Card width="15vw" height="10vw">
                                    <div className="left-border">
                                        <span className='card-heading'>Average Call Duration</span>
                                        <span className='stat-count'>
                                            {stats["overall_call_stats"].average_duration}
                                            <span className="stat-unit">seconds</span>
                                        </span>
                                    </div>
                                    <span className='card-text'>Average length</span>
                                </Card>
                            </li>
                        </ul>
                    </div>
                    <div className="followup-call-stats">
                        <span className='stat-heading'>Follow-up Calls:</span>
                        <ul className="info-cards">
                            <li>
                                <Card width="10vw" height="10vw" background='pink'>
                                    <div className="left-border">
                                        <span className='card-heading'>Open</span>
                                        <span className='stat-count'>{stats["follow-up_calls"].open}</span>
                                    </div>
                                    <span className='card-text'>Active issues</span>
                                </Card>
                            </li>
                            <li>
                                <Card width="10vw" height="10vw" background='light-blue'>
                                    <div className="left-border">
                                        <span className='card-heading'>Pending</span>
                                        <span className='stat-count'>{stats["follow-up_calls"].pending}</span>
                                    </div>
                                    <span className='card-text'>Awaiting resolution</span>
                                </Card>
                            </li>
                            <li>
                                <Card width="10vw" height="10vw" background='purple'>
                                    <div className="left-border">
                                        <span className='card-heading'>Closed</span>
                                        <span className='stat-count'>{stats["follow-up_calls"].closed}</span>
                                    </div>
                                    <span className='card-text'>Resolved issues</span>
                                </Card>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="search">
                    <span>Advance Search</span>
                    <input type="search" placeholder='Agent Name, Call status,' id='inputSearch' ></input>
                    <button id='searchBtn'>Search</button>
                </div>
                <Table />
            </div>
            <div className='secondary'>
                <Card width="90%" height="300px" background='blue' className="freq-opp">
                    <div className='freq-opp-head'>
                        Most frequently Occouring Opportunity
                    </div>
                    <div className="freq-opp-body">
                        <span className='freq-opp-time'>{frequentOpportunityDesc["time"]}</span>
                        <span className='freq-opp-title'>{frequentOpportunityDesc["title"]}</span>
                        <span className='freq-opp-desc'>{frequentOpportunityDesc["desc"]}</span>
                        <span className='freq-opp-comment'>{frequentOpportunityDesc["comment"]}</span>
                        <a href={frequentOpportunityDesc["link-to-all-issues"]} className='freq-opp-button' target='blank'>See all Issues</a>
                    </div>
                </Card>
                <span className='stat-heading'>Top Identified Opportunities:</span>
                <Card width="90%" height="300px">
                    <ul className='opportunity-list'>
                        {
                            topOpportunities.map ( opportunity => {
                                return (
                                    <li>
                                        <img src={opportunity["icon-url"]} className='opportunity-icon'/>
                                        <div className='opportunity-desc'>
                                            <span className='opportunity-heading'>{opportunity["name"]}</span>
                                            <span className='opportunity-time'>{opportunity["time"]}</span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </Card>
            </div>

        </div>
    )
}

export default Body