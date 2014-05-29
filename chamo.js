var pranks = {};
Prank1 = {'type': 'video',
          'name': 'Tigresa video',
          'url': 'http://www.youtube.com/embed/UWj70gloOtA?autoplay=1&amp;controls=0&amp;showinfo=0&amp;autohide=1&amp;start=25'}

Prank2 = {'type': 'photo',
          'name': 'Hasselhoff',
          'photos': ['http://images5.fanpop.com/image/photos/31000000/David-Hasselhoff-david-hasselhoff-31032907-1280-800.jpg',
                     'http://i4.walesonline.co.uk/incoming/article1793134.ece/alternates/s2197/david-hasselhoff-768626979.jpg',
                     'http://i4.chroniclelive.co.uk/incoming/article1355734.ece/alternates/s2197/david-hasselhoff-539431694.jpg']
}

pranks['tigresa'] = Prank1;
pranks['hasselhoff'] = Prank2;

$(document).ready( function(){
    var currentPrankCode = 'hasselhoff';
    var prank = pranks[currentPrankCode]
    switch(prank.type) {
        case 'video':
            $('body').html('<div class="video"><iframe width="100%" height="100%" src="' + prank.url + '" frameborder="0" allowfullscreen></iframe></div>');
            break;
        case 'photo':
	        $('body').html('<div id="photo" class="photo"></div>');
            var n = Math.floor((Math.random()*prank.photos.length));
            var photo = "url('" + prank.photos[n] + "')";
            $("#photo").css('background-image', photo);
            break;
    }
});
