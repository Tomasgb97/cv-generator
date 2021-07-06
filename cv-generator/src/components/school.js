import react from "react";

class Schools extends react.Component{


    render(){

        return(

            <div>
                <h2>School studies</h2>
                <form onSubmit={this.props.handleSchools}>
                <input type="text" placeholder="institute" name="institute"></input>
                <input type="text" placeholder="title" name="title"></input>
                <input type="month" placeholder="from" name="from"></input>
                <input type="month" placeholder="to" name="to"></input>
                <button type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default Schools;