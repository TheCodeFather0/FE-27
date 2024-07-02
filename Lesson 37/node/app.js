import axios from "axios";
import chalk from "chalk";
const url = 'https://jsonplaceholder.typicode.com/users'
const colors = ['red','green','blue','purple','yellow']


axios(url).then(({data}) => {
    data.forEach(({username}) => {
        console.log(setColor(username));
    });
})

function setColor () {
    
}