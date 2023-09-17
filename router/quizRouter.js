const express = require('express')
const db = require('../db')
const quizRouter = express.Router()
quizRouter.get("/getquizpool",(req,res)=>{
    const sql = `
            SELECT
            *,
            CONCAT('[', GROUP_CONCAT(
                '{"_id":"', quiz_option.id, '","quiz_id":"', quiz_option.quiz_id, '","label":"', quiz_option.label, '","value":"', quiz_option.value, '"}'
            SEPARATOR ', '), ']') AS options
        FROM
            quiz_pool
        INNER JOIN
            quiz_option ON quiz_pool.id = quiz_option.quiz_id
        GROUP BY
        quiz_pool.id;
    `;
    db.query(sql,(err,data)=>{
        console.log(err);
        if(err){
            res.send({
                msg:'net error',
                code:500,
                data:{
                    us:null,
                    up:null
                }
            })
        }else{
            res.send({
                msg: 'success',
                code:200,
                data: data
            })
        }
    })
})
module.exports = quizRouter