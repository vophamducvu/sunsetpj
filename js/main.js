let loading = document.querySelector('.loading')
window.addEventListener("load", (event) => {
    loading.classList.add('active')
    document.querySelector('.header__lang-select').style.display = 'block';
    document.querySelector('.select').style.display = 'block';
    let openSquareVideo = document.querySelector('.popupvideo')
    if (document.contains(openSquareVideo))
        document.querySelector('.popupvideo').style.display = 'flex';
})

function handleSlider() {
    var slider = document.querySelector('.scslider__wrapper');
    if (document.contains(slider)) {
        var flktySlider = new Flickity(slider, {
            // options
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            pageDots: false,
            fade: true,
            prevNextButtons: false,
            wrapAround: true,


        });
        let btnPrev = document.querySelector('.scslider .scslider__arrow-left'),
            btnNext = document.querySelector('.scslider .scslider__arrow-right')

        btnPrev.addEventListener('click', function () {
            flktySlider.previous(true)
        })
        btnNext.addEventListener('click', function () {
            flktySlider.next(true)
        })
    }

}
handleSlider()

function handleSlider2() {
    var slider = document.querySelector('.scslider__wrapper2');
    if (document.contains(slider)) {
        var flktySlider = new Flickity(slider, {
            // options
            cellAlign: 'left',
            contain: true,
            draggable: '>1',
            pageDots: false,
            fade: true,
            prevNextButtons: false,
            wrapAround: true,


        });
        let btnPrev = document.querySelector('.scmain .slider .slider__arrow-left'),
            btnNext = document.querySelector('.scmain .slider .slider__arrow-right')

        btnPrev.addEventListener('click', function () {
            flktySlider.previous(true)
        })
        btnNext.addEventListener('click', function () {
            flktySlider.next(true)
        })
    }

}
handleSlider2()

function handleInfo() {
    var slider = document.querySelector('.scbe .wrapper');
    if (document.contains(slider)) {
        var flktySlider = new Flickity(slider, {
            // options
            cellAlign: 'left',
            contain: true,
            draggable: false,
            pageDots: false,
            fade: true,
            prevNextButtons: false,
            wrapAround: true,
        });
        let btnPrev = document.querySelector('.scbe .arrow .arrow-left'),
            btnNext = document.querySelector('.scbe .arrow .arrow-right')

        btnPrev.addEventListener('click', function () {
            flktySlider.previous(true)
        })
        btnNext.addEventListener('click', function () {
            flktySlider.next(true)
        })
    }
}
handleInfo()

function handleBrand() {
    var last = document.querySelector('.scbrandslide');
    if (document.contains(last)) {
        var flktyLast = new Flickity(last, {
            cellAlign: 'left',
            contain: true,
            draggable: true,
            prevNextButtons: false,
            wrapAround: true,
            pageDots: false,
            autoPlay: 1500,
            imagesLoaded: true
        })
    }
}
handleBrand()

function handleWrap() {
    var wrap = document.querySelector('.scevents .wrap');
    if (document.contains(wrap)) {
        var flktyWrap = new Flickity(wrap, {
            cellAlign: 'left',
            contain: true,
            draggable: '>3',
            prevNextButtons: false,
            groupCells: true,
            pageDots: false,
            imagesLoaded: true


        })
        window.addEventListener('resize', function () {
            let wWindow = window.pageXOffset
            if (wWindow < 992) {
                var flktyWrap = new Flickity(wrap, {
                    cellAlign: 'center',
                    groupCells: 2,
                }
                )
            }
        })
        window.addEventListener('resize', function () {
            let wWindow = window.pageXOffset
            if (wWindow < 576) {
                var flktyWrap = new Flickity(wrap, {
                    cellAlign: 'center',
                    groupCells: false,
                }
                )
            }
        })
    }
}

handleWrap()

function handleBlog() {
    var wrap = document.querySelector('.scblog .wrap');
    if (document.contains(wrap)) {
        var flktyWrap = new Flickity(wrap, {
            cellAlign: 'left',
            contain: true,
            draggable: '>3',
            prevNextButtons: false,
            groupCells: true,
            pageDots: false,
            imagesLoaded: true

        })
        window.addEventListener('resize', function () {
            let wWindow = window.pageXOffset
            if (wWindow < 992) {
                var flktyWrap = new Flickity(wrap, {
                    cellAlign: 'center',
                    groupCells: 2,
                }
                )
            }
        })
        window.addEventListener('resize', function () {
            let wWindow = window.pageXOffset
            if (wWindow < 576) {
                var flktyWrap = new Flickity(wrap, {
                    cellAlign: 'center',
                    groupCells: false,
                }
                )
            }
        })
    }
}
handleBlog()

function handleSlideService() {
    var service = document.querySelector('.scour .scour__wrap');
    if (document.contains(service)) {
        var flktyLast = new Flickity(service, {
            cellAlign: 'center',
            contain: true,
            draggable: true,
            prevNextButtons: false,
            wrapAround: true,
            pageDots: true,
            imagesLoaded: true
        })
    }
}
handleSlideService()

function numberCount() {
    let number = document.querySelectorAll('.facts-number-yellow');
    let section = document.querySelector('.scbooking');
    let section2 = document.querySelector('.scnumber');
    let interval = 1000;
    if (document.contains(section)) {
        let a = 0;
        window.addEventListener("scroll", function () {
            let hBeach = section.offsetTop;
            let heightE = hBeach + section.clientHeight;
            let wH = window.pageYOffset
            let wInner = wH + window.innerHeight;
            if (wInner > hBeach && wH < heightE && a == 0) {
                countNber()
                a = 1
            }
        })

        function countNber() {
            number.forEach(function (item_number) {
                let target = item_number.dataset.target;
                let valueStart = 0;
                let dur = Math.floor(interval / target);
                let count = setInterval(function () {
                    valueStart += 1;
                    item_number.textContent = valueStart;
                    if (item_number.textContent === target) {
                        clearInterval(count)
                    }
                }, dur)
            })
        }
    }
    if (document.contains(section2)) {
        let b = 0;
        window.addEventListener("scroll", function () {
            let hBeach2 = section2.offsetTop;
            let heightE2 = hBeach2 + section2.clientHeight;
            let wH2 = window.pageYOffset
            let wInner2 = wH2 + window.innerHeight;
            if (wInner2 > hBeach2 && wH2 < heightE2 && b == 0) {
                countNber()
                b = 1
            }
        })

        function countNber() {
            number.forEach(function (item_number) {
                let target = item_number.dataset.target;
                let valueStart = 0;
                let dur = Math.floor(interval / target);
                let count = setInterval(function () {
                    valueStart += 1;
                    item_number.textContent = valueStart;
                    if (item_number.textContent === target) {
                        clearInterval(count)
                    }
                }, dur)
            })
        }
    }
}
numberCount()


const backToTop = document.querySelector('.btt-button')
function rollToTop() {
    window.addEventListener('scroll', function () {
        let thatHeight = window.pageYOffset
        const heightSlider = document.querySelector('.scintro')
        if (document.contains(heightSlider)) {
            if (thatHeight >= heightSlider.offsetHeight) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        }
    })
}

window.addEventListener('scroll', function () {
    let thisHeight = window.pageYOffset
    const heightHero = document.querySelector('.scbanner')
    if (document.contains(heightHero)) {
        if (thisHeight >= heightHero.offsetHeight) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    }
})

window.addEventListener('scroll', function () {
    let heightPage2 = window.pageYOffset
    const heightHeroService2 = document.querySelector('.scbanner__service2')
    if (document.contains(heightHeroService2)) {
        if (heightPage2 >= heightHeroService2.offsetHeight) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    }
})
window.addEventListener('scroll', function () {
    let heightPage3 = window.pageYOffset
    const heightHeroEvent2 = document.querySelector('.scbanner__event2')
    if (document.contains(heightHeroEvent2)) {
        if (heightPage3 >= heightHeroEvent2.offsetHeight) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    }
})

rollToTop()

function clickToTop() {
    backToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        }
        )
    })
}

clickToTop()

//doi ngon ngu
const click = document.querySelector('.header__menu .header__menu-lang')

click.addEventListener('click', function () {
    this.classList.toggle('active');
})

const lang = document.querySelector('.header__right-lang'),
    langCurrent = document.querySelector('.header__right .header__right-lang .header__lang-current span'),
    langItems = document.querySelectorAll('.header__right .header__right-lang .header__lang-select .lang__option')

lang.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('active');
})

langItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault()
        let langText = this.textContent;
        let langCurrentSpan = langCurrent.textContent;
        langCurrent.innerHTML = langText;
        this.innerHTML = langCurrentSpan;

    });
});

document.addEventListener('click', function () {
    lang.classList.remove('active');
})

function menuMobile() {
    const btnMenu = document.querySelector('.header__right-mobile'),
        nav = document.querySelector('.nav')
    if (document.contains(btnMenu)) {
        btnMenu.addEventListener('click', function () {
            this.classList.toggle('active')
            nav.classList.toggle('active')

        })

        function hideNav() {
            btnMenu.classList.remove('active')
            nav.classList.remove('active')
        }

        window.addEventListener('resize', function () {
            let wWindow = this.innerWidth
            if (wWindow > 992) {
                hideNav()
            }
        })
    }
}
menuMobile()

//mở video khi click vào hình

function clickToOpenVideo() {
    let video = document.querySelectorAll('.scvideo .scvideo__playvideobtn .button'),
        openSquareVideo = document.querySelector('.popupvideo'),
        iframe = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe'),
        btnClose = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-close')
    if (document.contains(openSquareVideo)) {
        video.forEach(function (video) {
            video.addEventListener('click', function () {
                openSquareVideo.classList.add('active')
                let dataID = video.getAttribute('data-video-src')
                iframe.setAttribute('src', `https://www.youtube.com/embed/${dataID}?autoplay=0`)

            })
        })

        function closeVideo() {
            openSquareVideo.classList.remove('active')
            iframe.setAttribute('src', '')
        }

        btnClose.addEventListener('click', function () {
            closeVideo()
        })
        openSquareVideo.addEventListener('click', function () {
            closeVideo()
        })
    }
}
clickToOpenVideo()

function map() {
    let iframe = document.querySelector('.scmap iframe')
    if (document.contains(iframe)) {
        let dataID = iframe.getAttribute('data-id')
        iframe.setAttribute('src', `https://www.google.com/maps/embed?pb=${dataID}`)
    }
}
map()

function clickToChangeInfo() {
    let tabs = document.querySelectorAll('.scgallery__nav-items'),
        listNews = document.querySelectorAll('.scgallery__des')

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {

            tabs.forEach(function (tab) {
                tab.classList.remove('active')
            })
            this.classList.add('active')


            listNews.forEach(function (newslist) {
                newslist.classList.remove('active')
            })
            let id = this.dataset.tab


            document.querySelector('.scgallery__des-' + id).classList.add('active')
        })
    })
}
clickToChangeInfo()
