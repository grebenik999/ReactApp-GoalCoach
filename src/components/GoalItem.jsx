import React, {Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';

class GoalItem extends Component {
    completeGoal() {
        const {email} = this.props.user;
        const {title, serverKey} = this.props.goal;
        goalRef
            .child(serverKey)
            .remove();
        completeGoalRef.push({email, title});
    }

    closeGoal() {
        const {serverKey} = this.props.goal;
        goalRef
            .child(serverKey)
            .remove();
    }

    render() {
        const {email, title} = this.props.goal;
        return (
            <div className="itemGoal">
                <p>Описание :
                    <textarea className="form-control" type="text" placeholder={title}/> {/* <strong>{title}</strong> */}
                </p>
                <p>
                    <strong>Автор:
                    </strong>
                    {email}
                </p>
                <br/>
                <div>
                    <button
                        style={{
                        marginRight: '5px',
                        textTransform: 'uppercase'
                    }}
                        className="btn btn-sm btn-primary"
                        onClick={() => this.completeGoal()}>Выполнено</button>
                    <button className="btn btn-sm btn-danger" onClick={() => this.closeGoal()}>&times;</button>
                </div>
                <br/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {user} = state;
    return {user}
}

export default connect(mapStateToProps, null)(GoalItem);