const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElement = document.querySelectorAll('.hidden')
const hiddenElement1 = document.querySelectorAll('.hidden1')
const hiddenElement2 = document.querySelectorAll('.hidden2')

hiddenElement.forEach((el) => observer.observe(el));
hiddenElement1.forEach((el) => observer.observe(el));
hiddenElement2.forEach((el) => observer.observe(el));