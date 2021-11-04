//构建后台简易服务器
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const student = [
    {
        id: 1,
        name: '张三',
    },
    {
        id:2,
        name: '李四'
    },
    { 
        id:3,
        name: '赵六'
    }
];

const grades = [
    {
        name: '张三',
        grade: {
           ts: 90,
           js: 89
        }
    },
    {
        name: '李四',
        grade: {
           ts: 56,
           js: 87
        }
    },
    {
        name: '赵六',
        grade: {
            ts: 90,
            js: 54
        }
    }
]

app.get('/api/students/:id', (req, res) => {
    const id = req.params.id;
    const students = student.filter(item => item.id == id);
    if(students.length > 0){
        res.status(200).json(students[0]);
    }else{
        res.status(404).json({message: 'no student found by that'})
    }
});


app.get('/api/grades', (req, res) => {
    const { name } = req.query;
    console.log(name);
    if(!name) return res.json(404).json({message: `name is required`});
    let students = grades.filter(item => item.name === name);
    if(students.length > 0){
        res.status(200).json(students[0]['grade']);
    }else{
        res.status(404).json({message:`no score found by that name:${name}`})
    }
})


const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});