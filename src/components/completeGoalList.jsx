import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setCompleted} from '../actions';
import {completeGoalRef} from '../firebase';

class CompleteGoalList extends Component {
    componentWillMount() {
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach(completeGoal => {
                const {email, title} = completeGoal.val();
                completeGoals.push({email, title});
            })
            this
                .props
                .setCompleted(completeGoals);
        })
    }

    // clearComleted() {     completeGoalRef.set([]); }

    render() {
        return (
            <div>
                {this
                    .props
                    .completeGoals
                    .map((completeGoal, index) => {
                        const {email, title} = completeGoal;
                        return (
                            <div key={index} className="itemGoal">
                                <p
                                    style={{
                                    textDecoration: 'line-through'
                                }}>
                                    <strong>{title}</strong>
                                </p>
                                <span
                                    style={{
                                    textDecoration: 'line-through',
                                    marginLeft: '5px'
                                }}>
                                    <strong>|Автор:</strong>
                                    <em>{email}</em>
                                </span>
                                <hr/>
                            </div>
                        )
                    })
}
                {/* <button className="btn btn-danger" onClick={() => this.clearComleted()}>Очистить завершенные</button> */}
            </div>

        )
    }
}

function mapStateToProps(state) {
    const {completeGoals} = state;
    return {completeGoals}
}

export default connect(mapStateToProps, {setCompleted})(CompleteGoalList);