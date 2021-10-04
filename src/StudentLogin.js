import axios from 'axios'
import React, {useState} from 'react'

export default function StudentLogin() {
    const [student, setStudent] = useState(null)
    const [groups, setGroups] = useState(null)
    const [availableTests, setAvailableTests] = useState(null)
    function studentLogin(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/student/getStudent', {
            email: e.target.email.value,
            password: e.target.pass.value


        }).then(response => {
            console.log(response.data[0])
            setStudent(response.data[0])
            axios.post('',{
                student_id: response.data[0].id
            })
            // get the group and then the test: SELECT * from groups JOIN group_has_students on group_has_students.group_id = groups.id where group_has_students.student_id = 56
        })

    }
    return (
        <div>
            <form onSubmit={studentLogin}>
                <h2>Login as Student</h2>
                <input name='email' type='text' placeholder='email' />
                <input name='pass' type='password' placeholder='Password' />
                <button type='submit'>Login</button>
            </form>
            
        </div>
    )
}
