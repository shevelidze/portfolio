import React from 'react';
import './Figure.css'

export default class Figure extends React.Component {
    constructor(props) {
        super();
        this.state = {
            xOffset: 0,
            yOffset: 0
        }
        this.maxOffset = 20;
    }
    componentDidMount() {
        document.addEventListener('mousemove', this.onMouseMove.bind(this));
    }
    onMouseMove(event) {
        this.setState({
            xOffset: this.maxOffset *
                (document.documentElement.clientWidth / 2 - event.clientX) /
                document.documentElement.clientWidth *
                this.props.xModifier,
            yOffset: this.maxOffset *
                (document.documentElement.clientHeight / 2 - event.clientY) /
                document.documentElement.clientHeight *
                this.props.yModifier
        });
    }
    render() {
        let skins = [
            <svg width="41" height="71" viewBox="0 0 41 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32.2824 69.4333C28.5768 66.6 10.4624 42.8188 1.86849 31.2824L40.0194 0.86849" stroke={this.props.color} stroke-width="2" />
            </svg>,
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="25" cy="25" r="24" stroke={this.props.color} stroke-width="2" />
            </svg>,
            <svg width="41" height="44" viewBox="0 0 41 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.01927 41.1742L2.15295 1.6354L38.8277 17.1905L7.01927 41.1742Z" stroke={this.props.color} stroke-width="2" />
            </svg>,
            <svg width="57" height="88" viewBox="0 0 57 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M55.9084 71.9084C-79.0878 -25.251 98.7367 -23.0056 1.14178 87.2693" stroke={this.props.color} stroke-width="2" />
            </svg>,
            <svg width="67" height="56" viewBox="0 0 67 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.999964 11.609C28.4292 4.38832 53.5479 -15.3488 37.0673 29.7582C62.6054 6.06084 66.2223 37.0795 64.8384 55.551" stroke={this.props.color} stroke-width="2" />
            </svg>
        ]
        let rotation = this.props.rotation || '0deg';
        return (
            <div
                style={{
                    '--x-offset': this.state.xOffset + 'px',
                    '--y-offset': this.state.yOffset + 'px',
                    '--x-position': this.props.xPosition,
                    '--y-position': this.props.yPosition,
                    '--rotation': rotation
                }}
                className="Figure"
            >
                {skins[this.props.skinIndex]}
            </div>
        );
    }
}