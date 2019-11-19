import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  DatePicker,
  Radio,
  Select,
  Button,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUser } from '../actions/userAction';
import NewSelect from './NewSelect';
import data from './select.json';
import NewItem from './NewItem';
const { Option } = Select;
class InfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpdate: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        
        console.log(this.props.form);
        this.props.createUser(values);
      }
    });
  }

  render() {
    const dateFormat = 'DD/MMMM/YYYY';
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 6 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select time!' }],
    };
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item>
          <h2 className="ant-form-text">Information Form</h2>
        </Form.Item>
        <NewItem form={this.props.form} label="First Name" type="string" required="true" name="firstName" inputType="Input"/>
        <NewItem form={this.props.form} label="Last Name" type="string" required="true" name="lastName" inputType="Input" />
        <Form.Item label="Gender">
          {getFieldDecorator('gender')(
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="Date of Birth">
          {getFieldDecorator('dateOfBirth', config)(<DatePicker format={dateFormat} />)}
        </Form.Item>
        <NewItem form={this.props.form} label="Phone Number" type="" required="true" name="phone" />
        <NewItem form={this.props.form} label="Salary" type="" required="true" name="salary" />
        <NewSelect form={this.props.form} label="Role" name = "role"holder="Please select your role" listData={data.roles} required="true"/>          
        <NewSelect form={this.props.form} label="Skills" name = "skills" type="array" mode = "multiple" holder="Please select your skills" listData={data.skills} required="true"/>          
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Submit
                  </Button>
        </Form.Item>
      </Form>
    );
  }
}
InfoForm.propTypes = {
  createUser: PropTypes.func.isRequired
}
export default connect(null, { createUser })(Form.create()(InfoForm));