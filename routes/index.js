exports.init = function(app, db) {

    // render index page
    app.get('/', function(req, res){
        res.render('index');
    });
    
    app.get('/user', function(req, res){
        var collection = db.get('usercollection');
        collection.find({},{},function(e,docs){ //取得所有的集合数据, 渲染到页面上,关键字是userlist
            res.json(docs);
        });
    
    });
    
    app.get('/create', function(req, res){
        var collection = db.get('usercollection');
        collection.insert({"name":new Date().toLocaleTimeString()})
        
    
    })
    
}
