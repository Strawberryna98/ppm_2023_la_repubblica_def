
function toggleMenu() {
    
    var divA = document.getElementById('menu_top_alternative');
    var divB = document.getElementById('menu_top_default');
    var data = document.getElementById('temperature_and_date');
    if (window.innerWidth < 765) {
        console.log("if");
      divB.classList.add("hide_by_default");
      divA.classList.remove("hide_by_default");
      enrichMenuAlternative();
      
      data.classList.remove('justify-content-end');
      data.classList.add('justify-content-center');

    } else {
        console.log("else");
        divA.classList.add("hide_by_default");
        divB.classList.remove("hide_by_default");
        restoreMenuOriginal();
        data.classList.add('justify-content-end');
        data.classList.remove('justify-content-center');
    }
}
function restoreMenuOriginal(){ 
    const rIcon = document.querySelector('#r_icon'); 
    const button1 = document.querySelector('#r_icon_default'); 
    if(button1!==null && rIcon!==null){
        button1.appendChild(rIcon); 
        rIcon.classList.add("p-1");

    }
    const rep = document.querySelector('#repubblica'); 
    const button2 = document.querySelector('#rep_default'); 
    if(button2!==null && rep!==null)
        button2.appendChild(rep); 
}
function enrichMenuAlternative(){
        //menu
    const rIcon = document.querySelector('#r_icon'); 
    const button1 = document.querySelector('#r_icon_button'); 
    if(button1!==null && rIcon!==null){
        button1.appendChild(rIcon); 
        rIcon.classList.add("p-2");

    }
    const rep = document.querySelector('#repubblica'); 
    const button2 = document.querySelector('#rep_button'); 
    if(button2!==null && rep!==null)
        button2.appendChild(rep); 
}

window.onload = function() {

    var divA = document.getElementById('menu_top_alternative');
    if (divA!==null)
    {
        divA.classList.add("hide_by_default");
       
    }

    window.addEventListener('resize', toggleMenu);

    //data
    var dataAttuale = new Date();
    var contenitore = document.getElementById("data");
    contenitore.innerHTML = "Oggi è il " + dataAttuale.getDate() + "/" + (dataAttuale.getMonth() + 1) + "/" + dataAttuale.getFullYear() + "- Aggiornato alle " + dataAttuale.getHours() + ":" + dataAttuale.getMinutes();
    
    //nav
    document.getElementById("open_nav").addEventListener("click", function() {
            var navBar = document.getElementById("nav_bar");
            navBar.classList.toggle("hide_by_default");
    });
    document.getElementById("open_nav_alternative").addEventListener("click", function() {
        var navBar = document.getElementById("nav_bar");
        navBar.classList.toggle("hide_by_default");
    });
    //apertura menu header
   
    document.getElementById("menu_espandibile").addEventListener("click", function() {
        document.querySelector("#sottomenu0").classList.toggle("hide_by_default");
    });
    document.getElementById("menu_espandibile_1").addEventListener("click", function() {
        document.querySelector("#sottomenu1").classList.toggle("hide_by_default");
    });

    document.getElementById("menu_espandibile_2").addEventListener("click", function() {
        document.querySelector("#sottomenu2").classList.toggle("hide_by_default");
    });
    document.getElementById("menu_espandibile_3").addEventListener("click", function() {
        document.querySelector("#sottomenu3").classList.toggle("hide_by_default");
    });
    document.getElementById("menu_espandibile_4").addEventListener("click", function() {
        document.querySelector("#sottomenu4").classList.toggle("hide_by_default");
    });
    //apertura menu footer
    var pulsante = document.getElementById("footer_toggle");
    pulsante.addEventListener("click", function() {
        if (pulsante.innerHTML === 'Espandi v') {
            pulsante.innerHTML = "Riduci ^";
        } else if (pulsante.innerHTML === 'Riduci ^') {
            pulsante.innerHTML = 'Espandi v';
        }
        document.querySelector("#footer_menu_main").classList.toggle("hide_by_default");
    });
    setTimeout(function() {
        document.querySelector("#ad_0").classList.toggle("hide_by_default");
    }, 800);
    setTimeout(function() {
        document.querySelector("#ad_4").classList.toggle("hide_by_default");
    }, 600);
    setTimeout(function() {
        document.querySelector("#ad_3").classList.toggle("hide_by_default");
    }, 3000);
    setTimeout(function() {
        document.querySelector("#ad_2").classList.toggle("hide_by_default");
    }, 4000);
    setTimeout(function() {
        document.querySelector("#ad_1").classList.toggle("hide_by_default");
    }, 5000);
    setTimeout(function() {
        document.querySelector("#ad_6").classList.toggle("hide_by_default");
    }, 7000);
    setTimeout(function() {
        document.querySelector("#ad_5").classList.toggle("hide_by_default");
    }, 8000);
    setTimeout(function() {
        document.querySelector("#ad_7").classList.toggle("hide_by_default");
    }, 10000);
    alert("file javascript caricato, le animazioni sono ora funzionanti");
}









// Funzione che nasconde il sottomenu quando si clicca altrove
/*function nascondiSottomenu() {
    sottomenu.classList.add("hide_by_default");
}

linkSottomenu.addEventListener("click", function(e) {
    e.stopPropagation(); // evita che l'evento venga propagato al documento stesso
    sottomenu.classList.toggle("hide_by_default");
});

document.addEventListener("click", function() {
    nascondiSottomenu();
});

// Event listener sulla finestra, per nascondere il sottomenu quando si fa scroll
window.addEventListener("scroll", function() {
    nascondiSottomenu();
});*/