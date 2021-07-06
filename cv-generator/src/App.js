
import './App.css';
import Header from './components/header';
import GeneralInfo from './components/GeneralInfo';
import Schools from './components/school';
import SchoolList from './components/RenderSchools';
import WorkingExp from './components/RenderJobs';
import Jobs from './components/jobs';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      user: {
      name: '',
      surname: '',
      email: '',
      phone: '',
      schools: [],
      jobs: []}
    }
  }
  handleCallback = (value, field) => {

    let userCopy = {...this.state.user}
    userCopy[field] = value


    this.setState({

      user: userCopy
      
    })

  }

  handleSchools = (e) => {
    e.preventDefault();

    const newSchool = {

      institute: e.target.institute.value,
      title: e.target.title.value,
      from: e.target.from.value,
      to: e.target.to.value
    }


    let userCopy = {...this.state.user}
    userCopy.schools.push(newSchool);

    this.setState({
      
      user: userCopy
    })
  }

  handleJobs = (e) => {
    e.preventDefault();

    const newJob = {

      where: e.target.where.value,
      job: e.target.job.value,
      from: e.target.from.value,
      to: e.target.to.value
    }


    let userCopy = {...this.state.user}
    userCopy.jobs.push(newJob);

    this.setState({
      
      user: userCopy
    })
  }


  render()
  {return (

    <div className="App">
      <Header/>
      <div>
        <div>
          <GeneralInfo handleCallback={this.handleCallback}/>
          <Schools handleSchools={this.handleSchools} />
          <Jobs handleJobs={this.handleJobs} />
        </div>
        <div>
          <h3> Name
            <p> &nbsp; {this.state.user.name}</p>
          </h3>
          <h3> SurName
            <p> &nbsp; {this.state.user.surname}</p>
          </h3>
          <h3> Email
            <p> &nbsp; {this.state.user.email}</p>
          </h3>
          <h3> Phone
            <p> &nbsp; {this.state.user.phone}</p>
          </h3>
          <h3>studies
          <SchoolList list={this.state.user.schools}/>
          </h3>
          <h3>Working Experience
            <WorkingExp list={this.state.user.jobs} />
          </h3>
        </div>
      </div>
    </div>
  )
}
}

export default App;
