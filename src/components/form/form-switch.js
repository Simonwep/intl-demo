import base         from './base.scss';
import styles       from './form-switch.scss';
import {classnames} from '../../js/classnames';
import {Component}  from 'preact';

export class FormSwitch extends Component {

    onChange = () => {
        const {value, onChange} = this.props;
        onChange(!value);
    };

    render({value}) {
        return (
            <button class={classnames({
                [base['form-element']]: true,
                [styles['form-switch']]: true,
                [styles.selected]: value
            })} onClick={this.onChange}/>
        );
    }
}
