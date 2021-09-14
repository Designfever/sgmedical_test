import Page from "../common/page";

export default class Index extends Page {
    constructor() {
        super();
        function headerFix(){
            window.addEventListener('scroll',function(){
                const scrollVal = window.pageYOffset;
                const secTop = document.querySelector('.sec-1').offsetTop;
                const headerEl = document.querySelector('header');
                if(scrollVal >= secTop){
                    headerEl.classList.add('on');
                } else{
                    headerEl.classList.remove('on');
                }
            });
        }
        headerFix();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new Index();
});  
