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
  <pre>
    <code>
       &lt;div *ngIf="hero" class="name"&gt;{{hero.name}}&lt;/div&gt;
    </code>
  </pre>
    <p>А не так:</p>
  <pre>
    <code>
      &lt;ng-template [ngIf]="hero"&gt;
        &lt;div class="name">{{hero.name}}&lt;/div&gt;
      &lt;/ng-template&gt;
    </code>
  </pre>
</div>

<p>Подумаешь, всё дело в [ ] ан нет. Вот как это выглядит:</p>
<pre>
  <code>
    &lt;div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd"&gt;
      ({{i}}) {{hero.name}}
    &lt;/div&gt;

    &lt;ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]="trackById"&gt;
      &lt;div [class.odd]="odd"&gt;({{i}}) {{hero.name}}&lt;/div&gt;
    &lt;/ng-template&gt;
  </code>
</pre>

<p>Но на самом деле всё куда менее страшней. Пример кода, для отображения слайдов слева:</p>
<pre>
  <code>
&lt;div class="sidebar"&gt;
  &lt;ul class="slides-container" *ngIf="slides"&gt;
    &lt;li
      *ngFor="let slide of slides"
      [ngClass]="{
      'slide':true,
      'slide--current':currentSlideId === slide.id
      }"
      routerLink="/slide/{{slide.id}}"
    &gt;
      &lt;span class="delete" (click)="deleteHandler(slide)"&gt;X&lt;/span&gt;
      {{slide.id - 1}}. {{slide.title}}
      &lt;p *ngIf="currentSlideId === slide.id"&gt;
        Current Slide
      &lt;/p&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;
  </code>
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

