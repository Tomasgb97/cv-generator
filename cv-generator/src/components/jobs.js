import react from "react";

class Jobs extends react.Component{


    render(){

        return(

            <div>
                <h2>Working Experience</h2>
                <form onSubmit={this.props.handleJobs}>
                <input required type="text" placeholder="where" name="where"></input>
                <input required type="text" placeholder="job" name="job"></input>
                <input required type="month" placeholder="from" name="from"></input>
                <input required type="month" placeholder="to" name="to"></input>
                <button required type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default Jobs;