import React from 'react';
import './Button.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lightLeft: 0,
            lightIsVisible: false
        }
        this.buttonRef = React.createRef();
    }
    render() {
        return (
            <div
                ref={this.buttonRef}
                class="Button"
                onMouseMove={this.onMouseMove.bind(this)}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseLeave.bind(this)}
                style = {{
                    '--light-left': this.state.lightLeft + 'px',
                }}
            >
                <div className={'light ' + (this.state.lightIsVisible ? '' : 'invisible')}></div>
                <div className="text">{this.props.text}</div>
            </div>
        )
    }
    onMouseMove(event) {
        if (!this.state.lightIsVisible) return;
        let rect = event.target.getBoundingClientRect();
        console.log(event.clientX - rect.left);
        console.log(rect.width, rect.height);
        this.setState({
            lightLeft: event.clientX - rect.left
        });
    }
    onMouseEnter(event) {
        this.setState({
            lightIsVisible: true
        });
    }
    onMouseLeave(event) {
        this.setState({
            lightIsVisible: false
        });
    }
}