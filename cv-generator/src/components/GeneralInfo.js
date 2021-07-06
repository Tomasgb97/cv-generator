
import react from 'react';

class GeneralInfo extends react.Component{


    render() {

        return(

            <div>
                <form>
                    <label htmlFor="name">Name</label>
                        <input onChange={(e) => this.props.handleCallback(e.target.value, e.target.name) } name="name" type="text" id="name" ></input>

                    <label htmlFor="surname">Surname</label>
                        <input onChange={(e) => this.props.handleCallback(e.target.value, e.target.name) } name="surname" type="text" id="surname" ></input>

                    <label htmlFor="email">Email</label>
                        <input onChange={(e) => this.props.handleCallback(e.target.value, e.target.name) } name="email" type="email" id="email" placeholder=" ....@......com" ></input>

                    <label htmlFor="phone">Phone</label>
                        <input onChange={(e) => this.props.handleCallback(e.target.value, e.target.name) } name="phone" type="text" id="phone" placeholder=" + xxxx-xxxxx" ></input>
                </form>
            </div>
        )
    }
}

export default GeneralInfo;