import React, { Component } from 'react';
import { DatePicker, Button } from 'antd'

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="card-header">Example Component</div>
                <div className="card-body">I'm an example component!</div>
                <DatePicker />
                <Button type="primary">Primary</Button>
            </div>
        );
    }
}
