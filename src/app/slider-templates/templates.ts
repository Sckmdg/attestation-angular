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
  <p>Теперь в качестве сахара перед директивами надо писать <b>*</b></p>
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
</div>`,

  /** Third Slide*/
  `<div class="center flex-box mb20">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/super-man.png?raw=true" width="350" alt="">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D0%BE.jpg?raw=true" width="350" alt="">
</div>
<br>
<div>
<p>Данное приложение состоит из:</p>
  <ul>
    <li>← Сайдбара</li>
    <li>Футера ↓</li>
    <li>Поисковика</li>
    <li>Контент окна</li>
    <li>Элементов управления (добавить\\редактировать)</li>
  </ul>
</div>
<br>
<p>Сам слайд представляет из себя:</p>
<pre style="background:rgba(238,238,238,0.92);color:#000">export class Slide {
  <span style="color:#093"><span style="font-weight:700">id:</span> <span style="color:#093">number;</span></span>
  <span style="color:#093"><span style="font-weight:700">title:</span> <span style="color:#093">string;</span></span>
  <span style="color:#093"><span style="font-weight:700">template:</span> <span style="color:#093">string;</span></span>
}
</pre>`,

  /** Fourth Slide*/
  `<h1>HttpClientInMemoryWebApiModule</h1>
<div class="center flex-box">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/httpweb.png?raw=true" width="700" alt="">
</div>
<p>Моя версия:</p>
<pre style="background:rgba(238,238,238,0.92);color:#000"><span style="color:#093">"angular-in-memory-web-api"</span>: <span style="color:#093">"^0.6.0"</span>
</pre>
<p>Версия в обучалке</p>
<pre style="background:rgba(238,238,238,0.92);color:#000"><span style="color:#093">"~0.5.0"</span>
</pre>
<br>
<h1>Роутинг</h1>
<div class="center flex-box mb20">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/routing.jpg?raw=true" width="500" alt="">
</div>
<pre style="background:rgba(238,238,238,0.92);color:#000"><span style="color:#03c"><span style="font-weight:700">const routes</span>: </span>Routes = [
  { <span style="color:#093"><span style="font-weight:700">path:</span> <span style="color:#093">''</span></span>, <span style="color:#093"><span style="font-weight:700">redirectTo:</span> <span style="color:#093">'/slide/1'</span></span>, <span style="color:#093"><span style="font-weight:700">pathMatch:</span> <span style="color:#093">'full'</span> </span>},
  { <span style="color:#093"><span style="font-weight:700">path:</span> <span style="color:#093">'slide/:id'</span></span>, <span style="color:#093"><span style="font-weight:700">component:</span> <span style="color:#093">RootSlideComponent </span></span>}
];
</pre>
<br>
<pre style="background:rgba(238,238,238,0.92);color:#000">    <span style="color:#03c"><span style="font-weight:700">private route</span>: </span>ActivatedRoute,
    <span style="color:#03c"><span style="font-weight:700">private router</span>: </span>Router

</pre>
<br>
<pre style="background:rgba(238,238,238,0.92);color:#000"> ngOnInit(): <span style="font-weight:700">void</span> {
    .
    .
    .
    this.router.events.subscribe((<span style="color:#33f;font-weight:700">event</span>) <span style="color:#00f">=</span><span style="color:#00f">></span> {
      <span style="color:#00f">if</span> (<span style="color:#33f;font-weight:700">event</span> <span style="color:#00f">instanceof</span> RoutesRecognized) {
       this.currentSlideId <span style="color:#00f">=</span> <span style="color:#33f;font-weight:700">Number</span>(<span style="color:#33f;font-weight:700">event</span>.state.root.<span style="color:#6782d3">firstChild</span>.params.<span style="color:#6782d3">id</span>);
      }
    })
  }

</pre>
<br>
<h1>Динамический шаблон</h1>
<div class="center flex-box mb20">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/template.jpg?raw=true" width="500" alt="">
</div>
<pre style="background:rgba(238,238,238,0.92);color:#000">@Component({
    selector: <span style="color:#093">'my-ng-include'</span>,
    template: <span style="color:#093">'&lt;div #myNgIncludeContent>&lt;/div>'</span>
})
<span style="font-weight:700">export</span> <span style="font-weight:700">class</span> MyNgInclude <span style="font-weight:700">implements</span> OnInit {

    @Input(<span style="color:#093">'src'</span>)
    <span style="font-weight:700">private</span> templateUrl: string;

    @ViewChild(<span style="color:#093">'myNgIncludeContent'</span>, { read: ViewContainerRef })
    <span style="font-weight:700">protected</span> contentTarget: ViewContainerRef;

    constructor(<span style="font-weight:700">private</span> componentResolver: ComponentResolver) {}

    ngOnInit() {
        <span style="font-weight:700">var</span> dynamicComponent <span style="color:#00f">=</span> this.createContentComponent(this.templateUrl);
        this.componentResolver.resolveComponent(dynamicComponent)
            .then((factory: any) <span style="color:#00f">=</span><span style="color:#00f">></span> this.contentTarget.createComponent(factory));
    }

    createContentComponent(templateUrl) {
        @Component({
            selector: <span style="color:#093">'my-ng-include-content'</span>,
            templateUrl: templateUrl,
            directives: FORM_DIRECTIVES,
        })
        <span style="font-weight:700">class</span> MyNgIncludeContent {}
        <span style="color:#00f">return</span> MyNgIncludeContent ;
    }
}

</pre>`,

  /** Fifth Slide*/
  `<h1>+</h1>
<ul>
  <li>Удобнейшая CLI</li>
  <li>Покрытие тестами (если еще вовремя писать спецификации и тесты - то вообще конфетка)</li>
  <li>Удобство стилей. Есть как внутри-компонентовые стили, которые будут изолированы и применяться только в рамках текущего компонента. <br>И разнообразие самих препроцессоров, что для этого ничего не надо делать.</li>
  <li>Полифиллы. Их там целая куча и то, что тебе не надо по сути об этом беспокоиться - радует</li>
  <li>Формы. Они крутые</li>
  <li>Строгая типизация</li>
  <li>Наличие такой вот штуки <a target="_blank" href="https://angular.io/guide/cheatsheet" ></a></li>
  <li>Один код для веба\\телефона\\десктопа</li>
  <li>Крайне сложно выстрелить себе в ногу. Ангулар просто не позволит писать тупость.</li>
</ul>
<br>
<h1>-</h1>
<ul>
  <li>Но если ты всё таки смог выстрелить в себя - сносишь себе пол-лица</li>
  <li>Слишком быстрый релиз мажорных версий. Да версии на -1 легко достаточно переезжать. <br>И по сути зная 2 или 4 или 5 версии - будет легко втянуться и в будущие. <br>Но следить за списком изменений, deprecated методов - сложновато</li>
  <li>Сложность. Прежде чем начать писать приложение - надо детально расписать компоненты и где в каком  будут какие данные. <br>Да, здесь можно сказать - чувак, так ведь надо каждый раз так делать. <br>И будете правы. <br>Но я вообще не ожидал такой подставы с простеньким id, который я по наивности думал смогу легко дернуть из роута.
  Ангулар ошибок не прощает.</li>
  <li>Отсутствие стейта, стора. Да есть модули\\расширения, но они для 2й версии и я не шибко уверен что они приживутся на  более современных версиях.
  </li>
</ul>`,

  /** Sixth Slide*/
  `<div class="center flex-box">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/real.png?raw=true" alt="">
</div>`
];


export const getTemplate = function (value) {
  return templates[value]
};

