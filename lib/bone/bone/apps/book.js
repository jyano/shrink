

BOOK=function(){ $.fm()
    toBook = function(){Y.run('book')}
    s1.A(
        $.h1('BOOK').$(toBook) ,
        bookName = $.ip(),
        $.bt('new book',function(){
            $.P('newBook', {name: bookName.V()},
                toBook)}),
        $.hr())

    $.Gj('books',function(bks){
        s1.A($.h3('books:'))
        _.e(bks, function(bk){
            s1.A( $.sp().C('x').$(function(){
                    $.P('delBook',{book: bk._id},toBook)
                }),
                $.bt(bk.name,function(){
                    s2.A($.h2('CHAPTER: '+bk.name),
                        chapterTitleInput=$.ip(),
                        $.bt('new chapter',
                            function(){$.P('newChapter',{
                                chapterTitle: chapterTitleInput.V(),
                                book:bk._id
                            },function(){chapterView(bk, c)})}), $.hr())
                    $.eGj('chapters',{book:bk._id}, function(ch){
                        s2.A($.bt(ch.title, function(){
                            chapterView(bk,ch)}), $.br(2))})
                }), $.br(2))})})


    chapterView=function(b,c){ s2.E();s1.E();
        s1.A($.h1('BOOK').$( toBook) )
        $.Gj('chapters',{book:bk._id}, function(chapters){
            s1.A($.h3('chapters:'))
            s2.A($.h3('pages:'))
            _.e(chapters,function(ch){
                s1.A($.sp('x').$(function(){$.P('delChapter',{chapter: ch._id}, function(){chapterView(bk, ch)})}),
                    $.bt(ch.title, function(){chapterView(bk,ch)}), $.br(2))})})
        s2.A($.h1('chapter: '+ch.title))
        s2.A( pageNameInput=$.ip(),
            $.bt('new page', function(){
                $.P('newPage',{pageName :pageNameInput.V(), chapter:ch._id
                })}), $.hr())
        $.eGj('/pages', {chapter: ch._id}, function(pg){
            s2.A($.bt(pg.name, function(){pageView(bk,ch,pg)
            }), $.br(2)  )})
    }}
pageView = function(bk, ch, pg){s1.E();s2.E()
    s1.A($.h1('BOOK').$(ldr('book')) )
    s1.A($.h1('CHAPTER '+ ch.title).$(function(){chapterView(book,ch )}))
    $.Gj('/pages',{chapter: ch._id},
        function(pgs){s1.A($.h3('pages'))
            _.e(pgs,function(pg){
                s1.A($.bt(pg.name,function(){sectionView(ch)}), $.br(2)
                )})})
    s2.A($.h1('page: '+pg.name))
    $.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
        function(sc){s2.A($.bt(sc.section, function(){sectionView(bk,ch,pg)}), $.br(2)
        )})
}
OBJECT=function(){$.fm()
    s1.A('your objects', $.br(2), t= $.ip(),
        $.bt('new object',function(){$.P('newObj',
            {t: t.V()})}))
    $.eG('objs', function(o){

        s1.A($.h2(o.t).$(function(){
            s2.E($.h1(o.t), tt=$.ip(),
                $.bt('new sub-object',function(){
                    $.P('newObj', {t: tt.V()})}))}))
        _.e(o.i,function(i){ s1.A(h3(i)) })
    })

}
