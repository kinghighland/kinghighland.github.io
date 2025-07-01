// 移动端导航菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 点击导航链接关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// 滚动时导航栏效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为需要动画的元素添加初始样式和观察器
document.querySelectorAll('.project-card, .article-card, .current-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 进度条动画
const progressBars = document.querySelectorAll('.progress');
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target;
            const width = progress.style.width;
            progress.style.width = '0%';
            setTimeout(() => {
                progress.style.width = width;
            }, 500);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    progressObserver.observe(bar);
});

// 导航高亮
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// 打字机效果
function typeWriter(element, text, speed = 100) {
    element.innerHTML = '';
    let i = 0;
    const timer = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

function typeWriterHTML(element, html, speed = 100) {
    element.innerHTML = '';
    let i = 0;
    let temp = '';
    let isTag = false;

    function type() {
        if (i < html.length) {
            let char = html[i];
            temp += char;
            if (char === '<') isTag = true;
            if (char === '>') isTag = false;

            // 只有在不是标签内容时才延时显示
            if (!isTag) {
                element.innerHTML = temp;
                i++;
                setTimeout(type, speed);
            } else {
                // 标签内容直接累加，不延时
                i++;
                type();
            }
        } else {
            element.innerHTML = temp; // 最后补全
        }
    }
    type();
}

// 页面加载完成后启动打字机效果
// window.addEventListener('load', () => {
//    const heroTitle = document.querySelector('.hero h1');
//    if (heroTitle) {
//        const originalText = heroTitle.innerHTML;
//        typeWriter(heroTitle, originalText, 80);
//    }
//});
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriterHTML(heroTitle, originalText, 80);
    }
});