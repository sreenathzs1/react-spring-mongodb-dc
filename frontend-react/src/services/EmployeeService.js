import axios from 'axios';

const url = process.env.REACT_APP_API_URL; //backend service name

class EmployeeService {

    getEmployees(){
        return axios.get(url);
    }

    createEmployee(employee){
        return axios.post(url, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(url + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(url + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(url + '/' + employeeId);
    }
}

export default new EmployeeService()




// import axios from 'axios';

// const url = { url: process.env.REACT_APP_API_URL}; //backend service name

// class EmployeeService {

//     getEmployees(){
//         return axios.get(process.env.REACT_APP_API_URL);
//     }

//     createEmployee(employee){
//         return axios.post(process.env.REACT_APP_API_URL, employee);
//     }

//     getEmployeeById(employeeId){
//         return axios.get(process.env.REACT_APP_API_URL + '/' + employeeId);
//     }

//     updateEmployee(employee, employeeId){
//         return axios.put(process.env.REACT_APP_API_URL + '/' + employeeId, employee);
//     }

//     deleteEmployee(employeeId){
//         return axios.delete(process.env.REACT_APP_API_URL + '/' + employeeId);
//     }
// }

// export default new EmployeeService()






// import axios from 'axios';

// const EMPLOYEE_API_BASE_URL="http://54.82.232.102:80/api/v1/employees"; //public ip with 80 port for k8s deploy

// class EmployeeService {

//     getEmployees(){
//         return axios.get(EMPLOYEE_API_BASE_URL);
//     }

//     createEmployee(employee){
//         return axios.post(EMPLOYEE_API_BASE_URL, employee);
//     }

//     getEmployeeById(employeeId){
//         return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//     }

//     updateEmployee(employee, employeeId){
//         return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
//     }

//     deleteEmployee(employeeId){
//         return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
//     }
// }

// export default new EmployeeService()

// #REACT_APP_API_URL="http://${BACKEND_API}:8080/api/v1/employees" .env file 

//#REACT_APP_API_URL="http://${BASE_URL}:8080/api/v1/employees"