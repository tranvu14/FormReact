import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {Select,Form} from 'antd';




const { Option } = Select;

class NewSelect extends Component{
    render(){
        const { getFieldDecorator } = this.props.form;
    return (
        <Form.Item label={this.props.label}>
        {getFieldDecorator(this.props.name, {
          rules: [
            { 
                required: this.props.required,
                message: 'Please select your'+this.props.label,
                type: this.props.type
            },
          ],
        })(
        <Select placeholder={this.props.holder} mode = {this.props.mode}>
            {this.props.listData.map(item => (
                <Option value = {item} key = {item}>{item}</Option>
            ))}
        </Select>
         )}
         </Form.Item>
    );
    }
}
export default NewSelect 