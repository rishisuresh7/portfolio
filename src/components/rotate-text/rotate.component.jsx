import React from 'react';
import './rotate.styles.scss';

class RotateText extends React.Component {

    constructor(props) {
        super(props);
  
        const {toRotate: {secondaryText}} = props;
        this.state = {
            text: '',
            index: 0,
            textToRotate: secondaryText,
            isDeleting: false,
            element: {},
        }
    }

    handleTick = (i = 0) => {
        const { text, textToRotate, index, isDeleting, element } = this.state;
        const delTime = this.props.delTime && this.props.delTime ? this.props.delTime : 100;
        const time = this.props.time && this.props.time ? this.props.time : 200;
        const timeOut = isDeleting ? delTime : time;
        const displayText = isDeleting? text.substring(0, i--) : text.substring(0, i++);

        element.innerHTML = displayText ? displayText : '';
        this.setState({...this.state, text: textToRotate[index]});
        if (i && i === text.length  ) {
            this.setState({...this.state, isDeleting: true});
        } else if ( isDeleting && i === 0 ) {
            const dataIndex = (index + 1) % textToRotate.length;
            this.setState({...this.state, isDeleting: false, index: dataIndex});
        }

        setTimeout(() => {
            this.handleTick(i);
        }, timeOut);
    }

    componentDidMount() {
        const element = document.getElementById('data-animate');
        this.setState({...this.state, element: element}, () => {
            this.handleTick();
        });
    }

    render() {
        const {toRotate: {primaryText}} = this.props;
        return (
            <React.Fragment>
                <h2>{primaryText}&nbsp;
                    <span id='data-animate'></span>
                    <span className='animate-cursor'></span>
                </h2>
            </React.Fragment>
        )
    }
}

export default RotateText;