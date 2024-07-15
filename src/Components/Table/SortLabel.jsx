import upArrow from '../../assets/arrow-up-svgrepo-com.svg'
import downArrow from '../../assets/arrow-down-svgrepo-com.svg'
import { useState } from 'react'

const SortLabel = ({sort, field}) => {
    const [sortOrder, setSortOrder] = useState ('desc')

    const toggleSort = () => {
        setSortOrder (sortOrder === 'asc' ? 'desc' : 'asc')
        sort (field, sortOrder)
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column'}} onClick={e => toggleSort()}>
            <img src={upArrow} style={{opacity: (sortOrder==='asc'?'30%':'100%'), width: '10px'}} />
            <img src={downArrow} style={{opacity: (sortOrder==='asc'?'100%':'30%'), width: '10px'}} />
        </div>
    )
}

export default SortLabel