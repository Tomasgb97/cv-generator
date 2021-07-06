import react from 'react';
import { uniqueId } from 'lodash';

class WorkingExp extends react.Component{


    render(){

        return(

            <ul>
                {this.props.list.map(jobExp => <li key={uniqueId()}>At: {jobExp.where} &nbsp;
                Job: {jobExp.job}. &nbsp;
                From: {jobExp.from} &nbsp;
                To: {jobExp.to}</li>)}
            </ul>
        )
    }
}

export default WorkingExp;