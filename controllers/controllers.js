const article = require('../model/Article')
const controllers = require('./controllers.js');

const goHomePage = (req, res) => {
    article.find()
        .sort({ created_at: -1 })
        .then(result => {
            res.render('index', { data: result });
        })
        .catch(err => {
            console.log(err);
            res.status(500).send('Internal Server Error');
        });
};
const createPost = (req,res)=>{
    let article1 = new article(req.body);
    article1.save()
    .then(()=> {res.redirect('/')})
    .catch(err =>{err});
}

const deleteUser = (req, res) => {
    article.findByIdAndDelete(req.params.id)
    .then(()=> {res.redirect('/')})
    .catch(err =>{ console.log(err)});    
}

module.exports ={
    goHomePage,   
    createPost,     
    deleteUser,
}

