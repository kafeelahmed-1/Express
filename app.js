
const express = require('express');
const app = express();
const usersRouter = require('./models/Users/Users');        
const employeesRouter = require('./models/Emplyees/employees'); 
const adminRouter = require('./models/Admin/admin');         

app.use(express.json());


app.use('/api/users', usersRouter);
app.use('/api/employees', employeesRouter);
app.use('/api/admin', adminRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
