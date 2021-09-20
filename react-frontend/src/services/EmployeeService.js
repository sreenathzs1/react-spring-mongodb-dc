import axios from 'axios';

const url = { url: process.env.REACT_APP_API_URL}; //backend service name

class EmployeeService {

    getEmployees(){
        return axios.get(process.env.REACT_APP_API_URL);
    }

    createEmployee(employee){
        return axios.post(process.env.REACT_APP_API_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(process.env.REACT_APP_API_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(process.env.REACT_APP_API_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(process.env.REACT_APP_API_URL + '/' + employeeId);
    }
}

export default new EmployeeService()