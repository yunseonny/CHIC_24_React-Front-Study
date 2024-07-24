$(document).ready(function () {
    $('.btn').on('click', function () {
        $('div.ani_box').animate({ top: '100px', left: '100px', width: '200px', height: '200px', 'font-size': '2rem', padding: '20px', margin: '100px', opacity: '0.5' }, 2000, function () {
            $(this).css('background-color', 'red')
        });
    });
});
