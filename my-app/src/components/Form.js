import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  DatePicker,
  Radio,
  Select,
  Button,
} from 'antd';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createUser} from '../actions/userAction';

const { Option } = Select;
class InfoForm extends Component {
    constructor(props){
        super(props);
        this.state={
            isUpdate:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event){
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
              this.props.createUser(values);
            }
          });

         
       
        
    }

    render(){
            const dateFormat ='DD/MMMM/YYYY' ;
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
                <Form.Item label="First Name">
                  {getFieldDecorator('firstName', {
                    rules: [
                      {
                        type: 'string',
                        message: 'The input is not valid!',
                      },
                      {
                        required: true,
                        message: 'Please input your First Name!',
                      },
                    ],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Last Name">
                  {getFieldDecorator('lastName', {
                    rules: [
                      {
                        type: 'string',
                        message: 'The input is not valid!',
                      },
                      {
                        required: true,
                        message: 'Please input your Last Name!',
                      },
                    ],
                  })(<Input />)}
                </Form.Item>
                <Form.Item label="Gender">
                  {getFieldDecorator('gender')(
                    <Radio.Group>
                      <Radio value="Male">Male</Radio>
                      <Radio value="Female">Female</Radio>
                    </Radio.Group>,
                  )}
                </Form.Item>
                <Form.Item label="Date of Birth">
                  {getFieldDecorator('dateOfBirth', config)(<DatePicker format={dateFormat}/>)}
                </Form.Item>
                <Form.Item label="Phone Number">
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                  })(<Input/>)}
                </Form.Item>
                <Form.Item label="Select role" hasFeedback>
                  {getFieldDecorator('role', {
                    rules: [{ required: true, message: 'Please select your role!' }],
                  })(
                    <Select placeholder="Please select your role">
                      <Option value="Intern">Intern</Option>
                      <Option value="Fresher">Fresher</Option>
                      <Option value="Junior">Junior</Option>
                      <Option value="Senior">Senior</Option>
                      <Option value="Leader">Leader</Option>
                      <Option value="Project Manager">Project Manager</Option>
                    </Select>,
                  )}
                </Form.Item>
                <Form.Item label="Salary">
                  {getFieldDecorator('salary', {
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                  })(<Input/>)}
                </Form.Item>
                <Form.Item label="Select your skills">
                  {getFieldDecorator('skills', {
                    rules: [
                      { required: true, message: 'Please select your skills!', type: 'array' },
                    ],
                  })(
                    <Select mode="multiple" placeholder="Please select your skills">
                      <Option value="ReactJS">ReactJS</Option>
                      <Option value="NodeJS">NodeJS</Option>
                      <Option value="Bootstrap">Bootstrap</Option>
                      <Option value="MongoDB">MongoDB</Option>
                      <Option value="GraphQL">GraphQL</Option>
                    </Select>,
                  )}
                </Form.Item>
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
export default connect(null,{createUser})(Form.create()(InfoForm));