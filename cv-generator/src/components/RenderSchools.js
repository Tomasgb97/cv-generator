import react from 'react';
import { uniqueId } from 'lodash';

class SchoolList extends react.Component{


    render(){

        return(

            <ul>
                {this.props.list.map(school => <li key={uniqueId()}>institute: {school.institute}. &nbsp;
                Title: {school.title}. &nbsp;
                From: {school.from}. &nbsp;
                To: {school.to}</li>)}
            </ul>
        )
    }
}

export default SchoolList;