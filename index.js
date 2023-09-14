const express = require('express');
const app = express()

app.get('/',(req,res) => {

res.send('hola get')

})


app.post('/',(req,res) => {

    res.send('hola get')
    
    })

    app.post('/',(req,res) => {

        put.send('hola PUT')
        
        })


        app.post('/',(req,res) => {

            patch.send('hola PATCH')
            
            })

            app.post('/',(req,res) => {

                del.send("hola delete")
                
                })




    app.listen(3000,() => {
        console.log('listening to port 3000')


    })

