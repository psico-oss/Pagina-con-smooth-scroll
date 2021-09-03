const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");



//Boton top -----------------------------------------------------------------------------------------



$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        closeAllForms();
        $("html, body").animate({ scrollTop: 0 }, 600);

        return false;
    });
});

// SCROLL TOP
if (btn1.classList.contains("selected")) {
    $("html, body").animate({ scrollTop: -1000 }, 2000);
}





// MENU SELECCIONADO

btn1.addEventListener('click', () => {
    if (!btn1.classList.contains("selected")) {
        btn1.classList.toggle("selected");
    }

    if (btn2.classList.contains("selected")) {
        btn2.classList.toggle("selected");
    }

    if (btn3.classList.contains("selected")) {
        btn3.classList.toggle("selected");
    }

    if (btn4.classList.contains("selected")) {
        btn4.classList.toggle("selected");
    }
    if (btn5.classList.contains("selected")) {
        btn5.classList.toggle("selected");
    }

});

btn2.addEventListener('click', () => {
    if (!btn2.classList.contains("selected")) {
        btn2.classList.toggle("selected");
    }

    if (btn1.classList.contains("selected")) {
        btn1.classList.toggle("selected");
    }

    if (btn3.classList.contains("selected")) {
        btn3.classList.toggle("selected");
    }

    if (btn4.classList.contains("selected")) {
        btn4.classList.toggle("selected");
    }

    if (btn5.classList.contains("selected")) {
        btn5.classList.toggle("selected");
    }

});

btn3.addEventListener('click', () => {
    if (!btn3.classList.contains("selected")) {
        btn3.classList.toggle("selected");
    }

    if (btn1.classList.contains("selected")) {
        btn1.classList.toggle("selected");
    }

    if (btn2.classList.contains("selected")) {
        btn2.classList.toggle("selected");
    }

    if (btn4.classList.contains("selected")) {
        btn4.classList.toggle("selected");
    }

    if (btn5.classList.contains("selected")) {
        btn5.classList.toggle("selected");
    }

});

btn4.addEventListener('click', () => {
    if (!btn4.classList.contains("selected")) {
        btn4.classList.toggle("selected");
    }

    if (btn1.classList.contains("selected")) {
        btn1.classList.toggle("selected");
    }

    if (btn2.classList.contains("selected")) {
        btn2.classList.toggle("selected");
    }

    if (btn3.classList.contains("selected")) {
        btn3.classList.toggle("selected");
    }

    if (btn5.classList.contains("selected")) {
        btn5.classList.toggle("selected");
    }

});

btn5.addEventListener('click', () => {
    if (!btn5.classList.contains("selected")) {
        btn5.classList.toggle("selected");
    }

    if (btn1.classList.contains("selected")) {
        btn1.classList.toggle("selected");
    }

    if (btn2.classList.contains("selected")) {
        btn2.classList.toggle("selected");
    }

    if (btn3.classList.contains("selected")) {
        btn3.classList.toggle("selected");
    }

    if (btn4.classList.contains("selected")) {
        btn4.classList.toggle("selected");
    }

});

// MENU SELECCIONADO FIN