import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/userAction';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import { Table,Tag} from 'antd';
class Info extends Component {

    componentDidMount(){
      this.props.fetchUsers();
      
    }
    UNSAFE_componentWillReceiveProps(nextProps){
      if(nextProps.newUser){
       this.props.users.push(nextProps.newUser);
      }
    }

    render(){
        const columns = [
            {
                title:'First Name',
                dataIndex:'firstName',
                key:'firstName',
            },
            { title:'Last Name',dataIndex:'lastName',key:'lastName'},
            { title:'Gender',dataIndex:'gender',key:'gender'},
            { title:'Date of Birth',dataIndex:'dateOfBirth',key:'dateOfBirth'},
            { title:'Phone',dataIndex:'phone',key:'phone'},
            { title:'Role',dataIndex:'role',key:'role'},
            { title:'Salary',dataIndex:'salary',key:'salary'},
            { title:'Skills',dataIndex:'skills',key:'skills',render: skills => (
                <span>
                  {skills.map(skill => {
                    return (
                      <Tag color="blue" key={skill}>
                        {skill}
                      </Tag>
                    );
                  })}
                </span>
              ),}
        ];
        
        return(
            <Table rowKey={record => record.id}columns={columns} dataSource={this.props.users} />
        )
    }
} 

Info.propTypes = {
  fetchUsers: PropTypes.func.isRequired,
  newUser: PropTypes.object
};


const mapStateToProps = state => ({
    users: state.users.items,
    newUser: state.users.item
});
export default connect(mapStateToProps,{ fetchUsers })(Info);