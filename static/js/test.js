
        var but0 = document.querySelector('#butGoToPost');
        var but1 = document.querySelector('#butOutHome');
        var but2 = document.querySelector('.butGoToHome');
        var but3 = document.querySelector('.butBlack');

        var div1 = document.querySelector('div#one');
        var div2 = document.querySelector('div.two');

         function OnDiv1 ()
        {
            div1.style.display = 'block';
            div2.style.display = 'none';
            but3.style.display = 'block';
        }

        function OnDiv2 ()
        {
            div1.style.display = 'none';
            div2.style.display = 'block';
            but3.style.display = 'block';
        }

       function inputActive ()
        {
             document.querySelector('input.inp1').style.border.color='red';
             document.querySelector('input.inp2').style.border.color='red';
             //document.querySelector('input.inp1').style.border-color='blue';
        }

        if (div1.style.display=='block' || div2.style.display=='block')
        {
            but3.style.display = 'block';
        }
        else
        {
            but3.style.display = 'none';
        }
        but0.addEventListener('click', function (e)//переход из home к обработке запросса
        {
            div1.style.display = 'block';
            but3.style.display = 'block';
        } );

       /* but1.addEventListener('click', function (e)//проверка введенных данных и переход ко второму блоку
        {
            div1.style.display = div1.style.display == 'none' ? 'block' : 'none';
            div2.style.display = div2.style.display == 'none' ? 'block' : 'none';
            but3.style.display = 'block';
        } );*/
        but2.addEventListener('click', function (e)//выход назад в home в случае неудачи
        {
            div1.style.display = 'none';
            div2.style.display = 'none';
            but3.style.display = 'none';
        } );
         but3.addEventListener('click', function (e)//выход назад в home в случае удачи
        {
            div1.style.display = 'none';
            div2.style.display = 'none';
            but3.style.display = 'none';

        } );
        /*<!-- {{article.name}}{{article.email}}-->*/