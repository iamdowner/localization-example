import React from 'react';
// import logo from './logo.svg';
// import useEffect from 'react;
// import useState from 'react';

const en = {
  original: {
    switch_to: 'английскую версию (оригинал)',
    title: <div>Welcome to Arts Probably official website.</div>,
    tagline: 'All we do is just posting beauteous illustrations.',
    first_heading: <h3>Favorite</h3>,
    first_text: (
      <p>
        This is <b>not</b> autoposting. We choose only illustrations that we like ourselves.
      </p>
    ),
    second_heading: <h3>Ads</h3>,
    second_text: (
      <p>
        <b>No &quot;Mega&quot;</b>&apos;s out here. All advertisements are posted with the &quot;ad&quot; tag.
      </p>
    ),
    third_heading: <h3>New</h3>,
    third_text: <p>We publish illustrations that you most likely haven&apos;t seen before.</p>,
    about_heading: <h3>About us</h3>,
    about_text: (
      <p>
        We live in russia, we publish illustrations in the telegram channel. we love to communicate, draw and eat
        bananas.<br></br>Today our team consists of 3 people
      </p>
    ),
    background: 'full_1.jpg',
  },
};
const ru = {
  translated: {
    switch_to: 'русскую версию (перевод)',
    title: (
      <div>
        Добро пожаловать на официальный сайт<br></br>Arts Probably.
      </div>
    ),
    tagline: 'Все, что мы делаем - размещаем красивые иллюстрации.',
    first_heading: <h3>Любимое</h3>,
    first_text: (
      <p>
        <b>Никакого</b> автопостинга. Мы выбираем только те иллюстрации, которые нравятся нам самим.
      </p>
    ),
    second_heading: <h3>Реклама</h3>,
    second_text: (
      <p>
        Никакой <b>&quot;Меги&quot;</b> здесь нет. Вся реклама размещается с рекламным тегом.
      </p>
    ),
    third_heading: <h3>Новое</h3>,
    third_text: <p>Мы публикуем иллюстрации, которых вы, скорее всего, раньше не видели.</p>,
    about_heading: <h3>О нас</h3>,
    about_text: (
      <p>
        Мы живем в россии, публикуем иллюстрации в телеграм-канале. мы любим общаться, рисовать и есть бананы.<br></br>
        Сегодня наша команда состоит из 3 человек.
      </p>
    ),
    background: 'full_1.jpg',
  },
  localized: {
    switch_to: 'русскую версию (локаллизация)',
    title: (
      <div>
        Официальный сайт<br></br>Arts Probably.
      </div>
    ),
    tagline: 'Мы просто постим прекрасные иллюстрации',
    first_heading: <h3>Русские, вперед!</h3>,
    first_text: (
      <p>Мы из России! Вы сможете открыть для себя новых российских авторов, и помочь им набрать популярность.</p>
    ),
    second_heading: <h3>Реклама</h3>,
    second_text: (
      <p>
        Никакой <b>&quot;Меги&quot;</b> здесь нет. Вся реклама размещается с рекламным тегом
      </p>
    ),
    third_heading: <h3>Новенькое!</h3>,
    third_text: <p>Здесь вы точно найдете что-то новенькое!</p>,
    about_heading: <h3>Кто мы?</h3>,
    about_text: (
      <p>
        2 пацана и 1 пацанка из разных городов России, выживаем как можем, параллельно постим супер-пупер изображения.
      </p>
    ),
    background: 'full_1_ru.jpg',
  },
};

const locales = [en.original, ru.translated, ru.localized];

import './App.css';

function App() {
  const [current_locale, setLocale] = React.useState<number>(0);
  function change_locale() {
    setLocale(next_locale(current_locale));
    return;
  }
  function getFriendlyLocaleName(current_locale: number) {
    return locales[next_locale(current_locale)].switch_to;
  }
  function next_locale(current_locale: number) {
    if (current_locale === locales.length - 1) {
      return 0;
    } else {
      return current_locale + 1;
    }
  }
  return (
    <div className="App">
      <header className="showcase">
        <div className="background">
          <img src={locales[current_locale].background} alt="background" />
        </div>
        <div className="content">
          <button onClick={change_locale} className="switchLocale">
            Переключиться на {getFriendlyLocaleName(current_locale)}
          </button>
          <img src="logo.png" className="logo" alt="Arts Probably logo" />
          <div className="title">{locales[current_locale].title}</div>
          <div className="text">{locales[current_locale].tagline}</div>
        </div>
      </header>
      <section className="services">
        <div className="container grid-3 center">
          <div>
            <i className="fas fa-heart fa-3x"></i>
            {locales[current_locale].first_heading}
            {locales[current_locale].first_text}
          </div>
          <div>
            <i className="fas fa-ad fa-3x"></i>
            {locales[current_locale].second_heading}
            {locales[current_locale].second_text}
          </div>
          <div>
            <i className="fas fa-fire fa-3x"></i>
            {locales[current_locale].third_heading}
            {locales[current_locale].third_text}
          </div>
        </div>
      </section>
      <section className="about bg-light">
        <div className="container">
          <div className="grid-2">
            <div className="center">
              <i className="fas fa-user-friends fa-10x"></i>
            </div>
            <div>
              {locales[current_locale].about_heading}
              {locales[current_locale].about_text}
            </div>
          </div>
        </div>
      </section>

      <footer className="center bg-dark">
        <p>Arts Probably &copy; 2020</p>
      </footer>
    </div>
  );
}

// function easy_background(selector, sld_args) {
//   function empty_img(x) {
//     if (x) {
//       return "<img src='" + x + "'>";
//     } else {
//       return '';
//     }
//   }

//   //use object same as arrays in php {nameofindex:variable} inside object you can use arrays [value1,val2] (variable in object can be as array
//   //var sld_args={i:["img/555.jpg","img/44.jpg","img/33.jpg","img/22.jpg","img/11.jpg","img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg"],d:[3000,3000,3000,3000,3000] };

//   //if delay is empty or forgotten then use this default value
//   var def_del = 3000;

//   var p = document.createElement('div');
//   p.innerHTML = ' ';
//   p.classList.add('easy_slider');

//   document.body.insertBefore(p, document.body.firstChild);
//   //switch all values in object -- objectname.index in you case sld_args is object and i is index of array which keep images (i). We use this function for fill div with img tags
//   //and for insert delays into empty or forgotten places in object
//   sld_args.slide.forEach(function (v, i) {
//     if (v) {
//       document.querySelector('.easy_slider').innerHTML += empty_img(v);
//       if (typeof sld_args.delay[i] == 'undefined' || typeof sld_args.delay[i] == '' || sld_args.delay[i] == 0) {
//         sld_args.delay[i] = def_del;
//       }
//     }
//   });

//   //add various style on selector
//   document.querySelector('.easy_slider').style.display = 'none';

//   setTimeout(function () {
//     //add various style on selector
//     if (typeof sld_args.transition_timing === 'undefined') {
//       sld_args.transition_timing = 'ease-in';
//     }
//     if (typeof sld_args.transition_duration === 'undefined') {
//       sld_args.transition_duration = 600;
//     }
//     var transition = 'all ' + sld_args.transition_duration + 'ms ' + sld_args.transition_timing;
//     document.querySelector(selector).style.WebkitTransition = transition;
//     document.querySelector(selector).style.MozTransition = transition;
//     document.querySelector(selector).style.MsTransition = transition;
//     document.querySelector(selector).style.OTransition = transition;
//     document.querySelector(selector).style.transition = transition;
//   }, 100);

//   //this n is number of row  in object - if first row one function if more than 1 then other
//   var n = 1;
//   //li collection previous delays from previous slides
//   var li = 0;

//   function slider() {
//     //switching all images one by one
//     sld_args.slide.forEach(function (vvv, iii) {
//       //here go all slides except first
//       if (n > 1) {
//         //set delay from collected number from previous slides
//         var delay = li;
//         setTimeout(function () {
//           document.querySelector(selector).style.backgroundImage = "url('" + vvv + "')";
//         }, delay); // >1
//         //collecting delays from curent
//         li = li + sld_args.delay[iii];
//       } else {
//         //this function for only  first slide

//         //next row
//         n++;
//         //collect delay first time
//         li = sld_args.delay[iii];

//         document.querySelector(selector).style.backgroundImage = "url('" + vvv + "')";
//       }
//     });
//   }

//   slider();

//   setInterval(function () {
//     // REPEAT

//     slider();
//     //here used length of array of delays in object instead you tot_time variable
//   }, 8000);
// }

export default App;
