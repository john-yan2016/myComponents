import React from 'react';

export default class Menu extends React.Component {

    render() {

        const props = this.props;
        const style = {
            top        : props.height - 1,
            display    : props.showMenu && !props.disabled ? '' : 'none',
            lineHeight : props.optionHeight + 'px',
            maxHeight  : props.optionHeight * 8 + 2
        };

        const options = props.options.map((item, index) => {
            if(item.disabled){
                return <li key={index}  className='select-disabled-option' >{item.text || item}</li>
            }
            return (
                <li key={index}
                    className={index === props.focused ? 'select-focused-option' : ''}
                    onClick={e=>props.handleChoose(e, index)}
                    onMouseEnter={props.focusOption.bind(null, index)}
                >
                    {item.text || item}
                </li>
            )
        });

        return <ul className="select-option thin-scroll" style={style}>{options}</ul>;
    }
}