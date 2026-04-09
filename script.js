/**
 * 个人名片网站交互脚本
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 页面加载动画 ---
    const loader = document.querySelector('.loader');
    const body = document.body;
    
    setTimeout(() => {
        loader.classList.add('hide');
        body.classList.remove('loading');
        
        setTimeout(() => {
            document.querySelectorAll('#home .line-wrap').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('is-revealed');
                }, index * 50);
            });
        }, 500); 
    }, 1000);

    // --- 3. 导航栏悬停黑带遮罩动效 (Nav Hover Reveal) ---
    const navWrapper = document.querySelector('.hero-nav-wrapper');
    const hoverTriggers = document.querySelectorAll('.hover-trigger');
    const marqueeText = document.getElementById('marqueeText');
    const baseNavItems = document.querySelectorAll('.hero-nav-bar:not(.layer-nav-bar) .nav-item');
    const layerNavItems = document.querySelectorAll('.layer-nav-bar .nav-item');

    hoverTriggers.forEach((trigger, index) => {
        trigger.addEventListener('mouseenter', () => {
            // 获取对应的文字并生成跑马灯内容 (重复多次以保证无缝)
            const text = trigger.getAttribute('data-hover-text');
            const repeatedText = Array(10).fill(`${text} &nbsp; `).join('');
            marqueeText.innerHTML = repeatedText;

            // 激活黑带展开
            navWrapper.classList.add('active');

            // 处理非悬停项的透明度变暗 (Dimming)
            baseNavItems.forEach((item, i) => {
                if (i !== index) {
                    item.classList.add('dimmed');
                    layerNavItems[i].classList.add('dimmed');
                } else {
                    item.classList.remove('dimmed');
                    layerNavItems[i].classList.remove('dimmed');
                }
            });
        });

        trigger.addEventListener('mouseleave', () => {
            // 关闭黑带
            navWrapper.classList.remove('active');
            
            // 恢复所有项的透明度
            baseNavItems.forEach(item => item.classList.remove('dimmed'));
            layerNavItems.forEach(item => item.classList.remove('dimmed'));
        });
    });

    // --- 4. Lottie 动画加载 (Lottie Animation) ---
    const lottieAbout = document.getElementById('lottie-about');
    if (lottieAbout) {
        console.log('Attempting to load Lottie animation...');
        
        // 确保 lottie 对象存在
        const lottieLib = window.lottie || window.bodymovin;
        
        if (lottieLib) {
            lottieLib.loadAnimation({
                container: lottieAbout,
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: (typeof lottieAboutData !== 'undefined') ? lottieAboutData : null
            });
            console.log('Lottie init call sent with animationData.');
        } else {
            console.error('Lottie library NOT found at initialization.');
        }
    }

});