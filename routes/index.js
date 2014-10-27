exports.init = function(app, db) {

    // render index page
    app.get('/', function(req, res){
        res.render('index');
    });
    
    app.get('/map', function(req, res){
        res.render('map');
    });
    
    app.get('/user', function(req, res){
        var collection = db.get('usercollection');
        collection.find({},{},function(e,docs){ //ȡ�����еļ�������, ��Ⱦ��ҳ����,�ؼ�����userlist
            res.json(docs);
        });
    
    });
    
    app.get('/create', function(req, res){
        var collection = db.get('usercollection');
        collection.insert({"name":new Date().toLocaleTimeString()})
        
    
    })
    
}
