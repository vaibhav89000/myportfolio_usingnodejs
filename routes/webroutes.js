const express = require('express');

const router = express.Router();
const User = require('../model/user');


router.get('/',(req,res,next)=>{
    res.render('home',{pageTitle: 'Home'});
});

router.get('/projects',(req,res,next)=>{
    res.render('projects',{pageTitle: 'Projects'});
});

router.get('/skills',(req,res,next)=>{
    res.render('skills',{pageTitle: 'Skills'});
});

router.get('/contact',(req,res,next)=>{
    res.render('contact',{pageTitle: 'Contact'});
});

router.get('/certificates',(req,res,next)=>{
    res.render('certificates',{pageTitle: 'Certificates'});
});

router.get('/projects/employeeproject',(req,res,next)=>{
    res.render('employeeproject',{pageTitle: 'Employee project'});
});

router.get('/projects/learningplatform',(req,res,next)=>{
    res.render('learningplatform',{pageTitle: 'Learning platform'});
});

// router.get('/submitted',(req,res,next)=>{
//     res.render('')
// });

router.post('/contact/submitted',(req,res,next)=>{
    console.log('hello');
    const firstname = req.body.firstname;
    console.log(firstname);
    const lastname = req.body.lastname;
    console.log(lastname);
    const email = req.body.email;
    console.log(email);
    const number = req.body.number;
    console.log(number);
    const comment = req.body.comment;
    console.log(comment);
    // console.log(firstname);
    const user = new User(firstname,lastname,email,number,comment);
    user
    .save()
    .then(()=>{
        res.render('submitted',{pageTitle: 'Learning platform',firstname: firstname,lastname: lastname});
    })
    .catch(err =>console.log(err));
    // res.render('submitted',{pageTitle: 'response submitted'});
});

module.exports = router;