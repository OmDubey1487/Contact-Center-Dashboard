import './Table.css'
import SortLabel from './SortLabel'
import Search from './Search'
import callData from '../../data/call-data.json'
import { useSortableTable } from '../../helper/useSortedTable'
import { useState } from 'react'
import CommonUtils from '../../helper/utils'

const { capitalizeWords } = CommonUtils

const parsedCallData = JSON.parse(JSON.stringify(callData))

const Table = () => {
    const [data, setData] = useState (parsedCallData)
    const [filteredData, setFilteredData] = useState (data)
    const [tableData, handleSorting] = useSortableTable (filteredData)

    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>
                            <div className='table-heading'>
                                <span>Member Id</span> 
                                <SortLabel sort={handleSorting} field="memberId"/>
                            </div>
                        </th>
                        <th>
                            <div className='table-heading'>
                                <span>Mem_Name</span> 
                                <SortLabel sort={handleSorting} field="mem_name"/>
                            </div>
                        </th>
                        <th>
                            <div className='table-heading'>
                                <span>Engagement Date</span> 
                                <SortLabel sort={handleSorting} field="date"/>
                            </div>
                        </th>
                        <th>
                            <div className='table-heading'>
                                <span>Category</span> 
                                <SortLabel sort={handleSorting} field="category"/>
                            </div>
                        </th>
                        <th>
                            <div className='table-heading'>
                                <span>Severity Level</span> 
                                <SortLabel sort={handleSorting} field="severity"/>
                            </div>
                        </th>
                        <th>
                            <div className='table-heading'>
                                <span>Insight</span> 
                                <SortLabel sort={handleSorting} field="report_link"/>
                            </div>
                        </th>
                        <th>
                            <div className='table-heading'>
                                <span>Status</span> 
                                <SortLabel sort={handleSorting} field="status"/>
                            </div>
                        </th>
                        <th>
                            <div className='table-heading'>
                                <span>Work On</span> 
                                <SortLabel sort={handleSorting} field="work_on"/>
                            </div>
                        </th>
                        <th>
                            <div className='table-heading'>
                                <span>Current Owner</span> 
                                <SortLabel sort={handleSorting} field="owner"/>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th><Search data={data} setFilteredData={setFilteredData} field="memberId">CC102</Search></th>
                        <th><Search data={data} setFilteredData={setFilteredData} field="mem_name">913-878-5544</Search></th>
                        <th><Search data={data} setFilteredData={setFilteredData} field="date">MM/DD/YYYY</Search></th>
                        <th><Search data={data} setFilteredData={setFilteredData} field="category">Order Delay</Search></th>
                        <th><Search data={data} setFilteredData={setFilteredData} field="severity">1</Search></th>
                        <th><Search data={data} setFilteredData={setFilteredData} field="report_link">NA</Search></th>
                        <th><Search data={data} setFilteredData={setFilteredData} field="status">9</Search></th>
                        <th><Search data={data} setFilteredData={setFilteredData} field="work_on">8</Search></th>
                        <th><Search data={data} setFilteredData={setFilteredData} field="owner">NA</Search></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        console.log (tableData)}{
                        tableData.map ((call, index) => {
                            return (
                            <tr key={index}>
                                <td>{call.memberId}</td>
                                <td>{capitalizeWords (call.mem_name)}</td>
                                <td> <div className="date-rectangle">{call.date}</div> </td>
                                <td>{capitalizeWords (call.category)}</td>
                                <td>{capitalizeWords (call.severity)}</td>
                                <td><a href={call.report_link} target='blank'>Details</a></td>
                                <td><span className={`status-label status-${call.status.toLowerCase()}`}>{capitalizeWords (call.status)}</span></td>
                                <td><a href={call.work_on}>Work</a></td>
                                <td>{capitalizeWords (call.owner)}</td>
                            </tr>
                        )})
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table