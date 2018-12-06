import React, {Component} from 'react';
import imgURL from '../image/wukong.jpg';

export default class Test extends Component {

    test = () => {

        const fields = {
            name: {
                defaultValue: '',
                rules: [
                    {
                        pattern: function (value) {
                            return value.length > 0;
                        }, error: '??????'
                    },
                    {
                        pattern: /^.{1,4}$/,
                        error: '?????4???'
                    }
                ]
            },
            age: {
                defaultValue: '',
                rules: [
                    {
                        pattern: function (value) {
                            return value.length > 0;
                        }, error: '??????'
                    },
                    {
                        pattern: /^.{1,4}$/,
                        error: '?????4???'
                    }
                ]
            },
            gender: {
                defaultValue: '',
                rules: [
                    {
                        pattern: function (value) {
                            return value.length > 0;
                        }, error: '??????'
                    },
                    {
                        pattern: /^.{1,4}$/,
                        error: '?????4???'
                    }
                ]
            }
        }

        const initialFormState = {};
        for (const key in fields) {
            initialFormState[key] = {value: fields[key].defaultValue, error: ''};
        }

        const value = 'daniel'
        const newFieldState = {value, valid: true, error: ''};
        const newForm = {...initialFormState, ["name"]: newFieldState};
        console.log(newForm)


        const fields1 = {
            userName: '',
            age: '',
            gender: '',
            password: ''
        }

        const newFiellds = {...fields1, ['age']: 11};
        console.log(newFiellds)



    }

    render() {
        return (
            <div>{this.test()}
                <div align="center">
                    <h1>Test!</h1>
                </div>
            </div>
        )
    }
}