import React from 'react'

class  Timer extends React.Component {
    
    state = {
        time: 0
    }

    render (){
        return(
            <div>
                {this.props.stringTime} Seconds Remaining
            </div>
        )
    }
}

export default Timer