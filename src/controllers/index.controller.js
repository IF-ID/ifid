const index = (req, res) => {
    
    res.render('index', { title: 'IFID' });
}

module.exports = { index };