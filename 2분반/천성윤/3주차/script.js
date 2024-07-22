$(document).ready(function () {
    // 기본 도형 애니메이션 함수
    function animateShape() {
        $('#shape').attr('class', 'circle');

        setTimeout(function () {
            $('#shape').attr('class', 'triangle');
        }, 1000);

        setTimeout(function () {
            $('#shape').attr('class', 'square');
        }, 2000);

        setTimeout(function () {
            $('#shape').attr('class', 'star');
        }, 3000);

        setTimeout(function () {
            animateShape();
        }, 4000);
    }

    animateShape();

    let isAnimating = false; // 애니메이션 상태
    let animationInterval;  // 위치 애니메이션 인터벌
    let colorInterval;       // 색상 애니메이션 인터벌

    // 상태 저장 변수
    let posX = 0; // 현재 X 위치
    let posY = 0; // 현재 Y 위치
    let velocityX = 3; // X 방향 속도
    let velocityY = 3; // Y 방향 속도
    let isMoving = false; // 원이 움직이고 있는지 여부

    // 빨간 원 애니메이션 시작
    function startRedShapeAnimation() {
        const $redShape = $('#redShape');
        const viewportWidth = $(window).width();
        const viewportHeight = $(window).height();
        const shapeWidth = $redShape.width();
        const shapeHeight = $redShape.height();

        if (isMoving) {
            // 멈춘 위치에서 애니메이션 재개
            $redShape.css({
                left: posX,
                top: posY
            });
        }

        // 원 위치 애니메이션
        animationInterval = setInterval(function () {
            posX += velocityX;
            posY += velocityY;

            if (posX <= 0 || posX + shapeWidth >= viewportWidth) {
                velocityX = -velocityX; // X 방향 반전
            }

            if (posY <= 0 || posY + shapeHeight >= viewportHeight) {
                velocityY = -velocityY; // Y 방향 반전
            }

            $redShape.css({
                left: posX,
                top: posY
            });
        }, 16); // 1.5배 속도 증가

        // 무지개 색상 애니메이션
        const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#7FFF00', '#00FFFF', '#0000FF', '#8B00FF'];
        let colorIndex = 0;
        colorInterval = setInterval(function () {
            $redShape.css('background-color', colors[colorIndex]);
            colorIndex = (colorIndex + 1) % colors.length;
        }, 1000); // 1초마다 색상 변경

        isMoving = true;
    }

    // 빨간 원 애니메이션 중지
    function stopRedShapeAnimation() {
        clearInterval(animationInterval);
        clearInterval(colorInterval);

        // 현재 위치 저장
        const $redShape = $('#redShape');
        posX = parseFloat($redShape.css('left'));
        posY = parseFloat($redShape.css('top'));

        isMoving = false;
    }

    // 버튼 클릭 이벤트
    $('#toggleAnimation').click(function () {
        if (isAnimating) {
            stopRedShapeAnimation();
            $(this).text('시작');
        } else {
            startRedShapeAnimation();
            $(this).text('멈춤');
        }
        isAnimating = !isAnimating;
    });
});
