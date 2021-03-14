const path = require ('path')
const  express = require('express')
// const { allowedNodeEnvironmentFlags } = require('process')

const  hbs = require('hbs')
const { title } = require('process')


const app = express()

//Define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set ('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))



app.get('', (req, res) =>{
    res.render('index', {
        title: 'Weather App',
        name: 'Baibhav Singh'
    })
})

app.get('/about', (req, res) =>{
    res.render('about', {
        title: 'About Me',
        name: 'Baibhav Singh'
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        helpText: ' This is the  help message to the User',
        title:'Help',
        name: 'Baibhav Singh'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'philadelphia'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Baibhav Singh',
        errorMessage: 'Help article not found.'
    })
})

app.get('*',(req, res) =>{
    res.render('404', {
        title: '404',
        name: 'Baibhav Singh',
        errorMessage: 'Page not found'
    })
})


app.listen(3000, () =>{
    console.log('Server is up on port 3000.')

} )