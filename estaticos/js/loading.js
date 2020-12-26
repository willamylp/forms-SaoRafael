function loading(opcao) {
    if (opcao == 'login') {
        setTimeout(function () {
            window.location.href = "../home";
        }, 1500);
    }
    else {
        setTimeout(function () {
            window.location.href = "../logout";
        }, 1500);
    }
}