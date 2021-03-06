import {Component}          from 'preact';
import {observer}           from 'mobx-preact';
import {resolveFormElement} from '../../components/form/form';
import {index}              from '../../state';
import './intl-input.scss';

@observer
export class IntlInput extends Component {
    updateInput = name => value => {
        index.input[name] = value || undefined; // Empty strings and null would throw an error
    };

    render() {
        const {input} = index.getAPI();

        const inputs = input.map(op => {
            const currentValue = index.input[op.name];

            return resolveFormElement({
                option: op,
                onUpdate: this.updateInput(op.name),
                currentValue: currentValue !== undefined ? currentValue : op.value
            });
        });

        return (
            <div id="intl-input">
                {inputs}
            </div>
        );
    }
}
