const templates = [
  /** Zero Slide*/
  `<div class="center">
    <h1>
      Создание приложения на Angular 5
    </h1>
    <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/angular2.png?raw=true" alt="" width="200">
    <p>Аминов Рустам</p>
    <p>Frontend-developer</p>
  </div>
  <br>
  <ol>
    <li>О фреймворке</li>
    <li>Возможности фреймворка
      <ol>
        <li>CLI</li>
        <li>Наследие первого ангулара</li>
        <li>Новые фишечки</li>
      </ol>
    </li>
    <li>Описание данного приложения</li>
    <li>Проблемы с которыми столкнулся</li>
    <li>Вкусности и не очень от использования ангулара</li>
    <li>Где и как его следует применять</li>
  </ol>`,

  /** First Slide*/
  `<div class="center flex-box">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/1_grk7btEn0OJEQRKgG2Qs2A.png?raw=true" width="250" alt="">
  <br>
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/angular-pyramid-alpha.png?raw=true" width="250" alt="">
  <br>
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/sencha-extjs.png?raw=true" width="350" alt="">
  </div>`,

  /** Second Slide*/
  `<h1>Когда прочел всю документацию</h1>
<div class="center flex-box mb20">
  <img width="250" src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/export.png?raw=true" alt="">
</div>
<br>

<h1>CLI</h1>
<div class="center flex-box mb20">
  <p>ng generate component components/controls</p>
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/boston.jpg?raw=true" width="350" alt="">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/cli.png?raw=true" alt="">
</div>
<br>
<a target="_blank" class="mb20" href="https://github.com/angular/angular-cli/wiki">Ссылочка на эту красоту</a>
<br>
<br>
<div>
  <h1>Наследие первого ангулара</h1>
  <p>Теперь в качестве сахара надо писать <b>*</b></p>
  <br>
  <p>Чтобы было так:</p>
<pre style="background:rgba(238,238,238,0.92);color:#000"><span style="color:#00f">&lt;</span>div <span style="color:#00f">*</span>ngIf<span style="color:#00f">=</span><span style="color:#093">"hero"</span> <span style="font-weight:700">class</span><span style="color:#00f">=</span><span style="color:#093">"name"</span><span style="color:#00f">></span>{{hero.name}}<span style="color:#00f">&lt;</span><span style="color:#00f">/</span>div<span style="color:#00f">></span></pre>
    <p>А не так:</p>
<pre style="background:rgba(238,238,238,0.92);color:#000"><span style="color:#00f">&lt;</span>ng<span style="color:#00f">-</span>template [ngIf]<span style="color:#00f">=</span><span style="color:#093">"hero"</span><span style="color:#00f">></span>
  <span style="color:#00f">&lt;</span>div <span style="font-weight:700">class</span><span style="color:#00f">=</span><span style="color:#093">"name"</span><span style="color:#00f">></span>{{hero.name}}<span style="color:#00f">&lt;</span><span style="color:#00f">/</span>div<span style="color:#00f">></span>
<span style="color:#00f">&lt;</span><span style="color:#00f">/</span>ng<span style="color:#00f">-</span>template<span style="color:#00f">></span>
</pre>
</div>

<p>Подумаешь, всё дело в [ ] ан нет. Вот как это выглядит:</p>
<pre style="background:rgba(238,238,238,0.92);color:#000"><span style="color:#00f">&lt;</span>div <span style="color:#00f">*</span>ngFor<span style="color:#00f">=</span><span style="color:#093">"let hero of heroes; let i=index; let odd=odd; trackBy: trackById"</span> [<span style="font-weight:700">class</span>.odd]<span style="color:#00f">=</span><span style="color:#093">"odd"</span><span style="color:#00f">></span>
  ({{i}}) {{hero.name}}
<span style="color:#00f">&lt;</span><span style="color:#00f">/</span>div<span style="color:#00f">></span>

<span style="color:#00f">&lt;</span>ng<span style="color:#00f">-</span>template ngFor let<span style="color:#00f">-</span>hero [ngForOf]<span style="color:#00f">=</span><span style="color:#093">"heroes"</span> let<span style="color:#00f">-</span>i<span style="color:#00f">=</span><span style="color:#093">"index"</span> let<span style="color:#00f">-</span>odd<span style="color:#00f">=</span><span style="color:#093">"odd"</span> [ngForTrackBy]<span style="color:#00f">=</span><span style="color:#093">"trackById"</span><span style="color:#00f">></span>
  <span style="color:#00f">&lt;</span>div [<span style="font-weight:700">class</span>.odd]<span style="color:#00f">=</span><span style="color:#093">"odd"</span><span style="color:#00f">></span>({{i}}) {{hero.name}}<span style="color:#00f">&lt;</span><span style="color:#00f">/</span>div<span style="color:#00f">></span>
<span style="color:#00f">&lt;</span><span style="color:#00f">/</span>ng<span style="color:#00f">-</span>template<span style="color:#00f">></span>
</pre>

<p>Но на самом деле всё куда менее страшней. Пример кода, для отображения слайдов слева:</p>
<pre style="background:rgba(238,238,238,0.92);color:#000"><span style="color:#00f">&lt;</span>div <span style="font-weight:700">class</span><span style="color:#00f">=</span><span style="color:#093">"sidebar"</span><span style="color:#00f">></span>
  <span style="color:#00f">&lt;</span>ul <span style="font-weight:700">class</span><span style="color:#00f">=</span><span style="color:#093">"slides-container"</span> <span style="color:#00f">*</span>ngIf<span style="color:#00f">=</span><span style="color:#093">"slides"</span><span style="color:#00f">></span>
    <span style="color:#00f">&lt;</span>li
      <span style="color:#00f">*</span>ngFor<span style="color:#00f">=</span><span style="color:#093">"let slide of slides"</span>
      [ngClass]<span style="color:#00f">=</span><span style="color:#093">"{
      'slide':true,
      'slide--current':currentSlideId === slide.id
      }"</span>
      routerLink<span style="color:#00f">=</span><span style="color:#093">"/slide/{{slide.id}}"</span>
    <span style="color:#00f">></span>
      <span style="color:#00f">&lt;</span>span <span style="font-weight:700">class</span><span style="color:#00f">=</span><span style="color:#093">"delete"</span> (click)<span style="color:#00f">=</span><span style="color:#093">"deleteHandler(slide)"</span><span style="color:#00f">></span>X<span style="color:#00f">&lt;</span><span style="color:#00f">/</span>span<span style="color:#00f">></span>
      {{slide.id <span style="color:#00f">-</span> <span style="color:#06f">1</span>}}. {{slide.title}}
      <span style="color:#00f">&lt;</span>p <span style="color:#00f">*</span>ngIf<span style="color:#00f">=</span><span style="color:#093">"currentSlideId === slide.id"</span><span style="color:#00f">></span>
        Current Slide
      <span style="color:#00f">&lt;</span><span style="color:#00f">/</span>p<span style="color:#00f">></span>
    <span style="color:#00f">&lt;</span><span style="color:#00f">/</span>li<span style="color:#00f">></span>
  <span style="color:#00f">&lt;</span><span style="color:#00f">/</span>ul<span style="color:#00f">></span>
<span style="color:#00f">&lt;</span><span style="color:#00f">/</span>div<span style="color:#00f">></span>
</pre>
<br>
<p>Если же надо передать что-то компоненту:</p>
<p>[testProp]=”Something”</p>
<p>Внутри компонента @Input() testProp: string;</p>
<br>
<h1>Новые фишки</h1>
<ul>
  <li>Pipes. Позволяют трансформировать string в upperCase и ему подобные, числа и даты в нужный формат. <br>Пример: {{  someDate | date:'fullDate' | uppercase}}
  </li>
  <li>Lifecycle Hooks - куда уж без них</li>
  <li>Observables и по сути RxJS,</li>
  <li>Формы. Есть динамические, реактивные, шаблонные</li>
</ul>
<br>
<div class="center flex-box mb20">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/mario.png?raw=true" width="350" alt="">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/angular-lifecycle-hooks.png?raw=true" width="350" alt="">
</div>
<div class="center flex-box">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/rxjs.png?raw=true" width="350" alt="">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/angular%20forms.png?raw=true" width="350" alt="">
</div>`
];


export const getTemplate = function (value) {
  return templates[value]
};

