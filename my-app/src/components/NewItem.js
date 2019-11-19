import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {
    Form,
    Input
} from 'antd';


class NewItem extends Component {
  

    render () {
        const { getFieldDecorator } = this.props.form;
        return (
        <Form.Item label={this.props.label} >
            {
                getFieldDecorator(this.props.name,{
                    rules:[
                        {
                            type: this.props.type,
                            message: 'The input is not valid!',
                        },
                        {
                            required: this.props.required,
                            message: 'Please input your '+ this.props.label,

                        },
                    ],
                })(<Input />)
            }
        </Form.Item>
        )
    }


}
export default NewItem