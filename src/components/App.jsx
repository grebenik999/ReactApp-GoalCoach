import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './completeGoalList';

class App extends Component {

    signOut = () => {
        firebaseApp
            .auth()
            .signOut()
    }

    render() {
        return (
            <div
                style={{
                margin: '5px',
                textAlign: 'center',
                position: 'relative'
            }}>
                <h3 style={{
                    textTransform: 'uppercase'
                }}>Список Задач</h3>
                <br/>
                <AddGoal/>
                <hr/>
                <GoalList/>
                < hr/>
                <h3>Завершенные задачи:</h3>
                <CompleteGoalList/>
                <br/>
                <button
                    className="btn btn-default"
                    type="button"
                    onClick={() => this.signOut()}>Выход</button>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps, null)(App);