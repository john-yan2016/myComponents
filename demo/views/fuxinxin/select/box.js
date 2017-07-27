import React from 'react';

export default class Box extends React.Component {

    renderContent(props) {
        const { chosen, options, disabled } = props;
        if (typeof chosen === 'number' && options[chosen] !== undefined) {
            const clear = disabled ? null : <span className="select-clear" onClick={props.handleClear} />;
            return <span style={{verticalAlign:'baseline',fontSize:12}}>{options[chosen].text || options[chosen]}{clear}</span>;
        } else {
            return <span className="select-placeholder">{props.placeholder}</span>
        }
    }

    render() {
        const props = this.props;
        const className = 'select-box' + (props.disabled ? ' select-box-disabled' : '');

        return (
            <div className={className} onClick={props.onClick} >
                {this.renderContent(props)}
                <span className="select-arrow" />
            </div>
        )
    }
}
