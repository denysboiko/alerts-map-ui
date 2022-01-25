import React, {Component} from 'react';
import {Checkbox} from "semantic-ui-react";

export class CheckboxesList extends Component {
    render() {
        return (
            <div class="group fields">
                {
                    this.props.options.map(option => {
                        return (<div class="field"><Checkbox label={option}/></div>)
                    })
                }<br/>
            </div>
        )
    }
}