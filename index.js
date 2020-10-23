mybuton1 = document.querySelectorAll('button');
var abc = '';
for (item of mybuton1) {
    item.addEventListener('click', (e) => {
        shash = e.target.innerText;
       if (shash == 'C') {
            abc = "";
            XXX.value = abc;
        }
        else if (shash == '=') {
            XXX.value = eval(abc);
        }
        else {
            abc=abc+ shash;
            XXX.value = abc;
        }

    })

}
