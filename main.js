$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira o seu e-mail',
            mensagem: 'Por favor, insira a sua mensagem'
        },
        submitHandler: function (form) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        }
    });

    // Adiciona a classe 'active' ao item do menu clicado
    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });
});