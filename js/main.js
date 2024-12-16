(function(){
    const spanEl = document.querySelector('.profile-text > h2 > span')
    const txtArr = ['Web Publisher','Web Design', 'Hyun Joon']
    console.log(txtArr)
    let index = 0;
    let currentTxt = txtArr[index].split("")
    // writeTxt
    function writeTxt(){
        spanEl.textContent += currentTxt.shift()
        if(currentTxt.length !== 0){
            setTimeout(writeTxt, Math.floor(Math.random() * 100))
        }else {
            currentTxt = spanEl.textContent.split("")
            setTimeout(deleteTxt, 3000) 
        }
    }
    // deleteTxt
    function deleteTxt(){
        currentTxt.pop() 
        spanEl.textContent = currentTxt.join()
        if(currentTxt.length !==0){
            setTimeout(deleteTxt, Math.floor(Math.random() * 100))
        }else {
            index = (index + 1) % txtArr.length
            currentTxt = txtArr[index].split("")
            writeTxt()
        }
    }
    writeTxt()
})()
$(document).ready(function() {
//     // 스크롤 이벤트 감지
//     $(window).on('scroll', function() {
//         // 현재 스크롤 높이 구하기
//         var scrollTop = $(window).scrollTop();
//         if (scrollTop >= 170) {
//             $('.header h1 a').css('color', 'black');
//         } else {
//             $('.header h1 a').css('color', 'white');
//         }
//     });

    $('header nav ul li').click(function(){
        $('header nav ul li').removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        let babo = $('main > section').eq(idx).offset().top
        $('html, body').animate({
            scrollTop : babo
        })
    })
    $(window).scroll(function(){
        $('main > section').each(function(){
            if($(this).offset().top <= $ (window).scrollTop()){
                let idx = $ (this).index()
                $('header ul li').removeClass('on')
                $('header ul li').eq(idx).addClass('on')
            }
            
        })
    })
});


VANTA.BIRDS({
  el: ".profile-box",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x181818,
  color1: 0x504d4d,
  color2: 0x50d2ff,
  birdSize: 1.20,
  quantity: 3.00
})
$('.wheel').on('click', function() {
    $('html, body').animate({ scrollTop: 863 }, 'smooth');
});