// lenis
// const lenis = new Lenis()

const lenis = new Lenis({
    speed: 800,
    offset: 50,
    duration: 1.2,
    easing: (t => Math.min(1, 1.001 - Math.pow(2, -9 * t))),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: navigator.platform.toUpperCase().indexOf("MAC") >= 0 ? false : true,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

if (window.matchMedia("(min-width: 992px)").matches) {

    lenis.on('scroll', (e) => {
        //   console.log(e)
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);
}

	/*====================================
         Header JS
    ======================================*/ 
    jQuery(window).on('scroll', function() {
        if ($(this).scrollTop() > 200) {
            $('#header .header-inner').addClass("sticky");
        } else {
            $('#header .header-inner').removeClass("sticky");
        }
    });

    /*====================================
        Sticky Header JS
    ======================================*/ 
    jQuery(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });

    $('.pro-features .get-pro').on( "click", function(){
        $('.pro-features').toggleClass('active');
    });

    /*====================================
        Search JS
    ======================================*/ 
    $('.search a').on( "click", function(){
        $('.search-top').toggleClass('active');
    });



// about section counting
function countUp(element, label, endValue) {
    const currentCount = { value: 0 };

    gsap.to(currentCount, {
        duration: 3,
        value: parseInt(endValue, 10) || 0, // Ensure a valid number or default to 0
        onUpdate: () => {
            element.innerText = Math.ceil(currentCount.value) + label + '+';
        },
        ease: "power3.out"
    });
}



// Gsap scroll animation
gsap.registerPlugin(ScrollTrigger);

gsap.to(".text p", {
  backgroundPositionX: "0%",
  stagger: 1,
  scrollTrigger: {
    trigger: ".text",
    scrub: 1,
    start: "top 80%",
    end: "bottom 40%"
  }
});

// sticky scroll animation
const benefitsContainers = gsap.utils.toArray('.benefits-container');

benefitsContainers.forEach((container, index) => {
    gsap.to(container, {
        scrollTrigger: {
            trigger: "#services",
            start: () => `top+=${index * window.innerHeight}`,
            end: () => `+=${(index + 1) * window.innerHeight}`,
            pin: true,
            scrub: true,
        }
    });
});

var swiper = new Swiper(".stickySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1500,
      },
  });


gsap.utils.toArray('.count-wrapper').forEach((count) => {
    const countNo = count.querySelector(".count-text");
    const countLabel = count.querySelector(".count-label");
    const endValue = countNo.getAttribute('data-count');
    const countLabelVal = countLabel.getAttribute('data-text');

    ScrollTrigger.create({
        trigger: '.about',
        start: "top 45%",
        onEnter: () => {
            countUp(countNo, countLabelVal, endValue);
        }
    });
});


// blog slider
var teamSwiper = new Swiper(".blog-swiper", {
    slidesPerView: 1.13,
    spaceBetween: 16,
    // allowTouchMove: false,
    autoplay: {
        delay: 4500,
    },
    scrollbar: {
        el: ".blog-scrollbar",
        hide: false,
        draggable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.1,
            spaceBetween: 24,
            allowTouchMove: false,
            scrollbar: {
                el: ".blog-scrollbar",
                hide: false,
                draggable: true,
            },
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
