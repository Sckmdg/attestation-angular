const templates = [
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

  `<div class="center flex-box">
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/1_grk7btEn0OJEQRKgG2Qs2A.png?raw=true" width="250" alt="">
  <br>
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/angular-pyramid-alpha.png?raw=true" width="250" alt="">
  <br>
  <img src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/sencha-extjs.png?raw=true" width="350" alt="">
  </div>`,

  `<h1>Когда прочел всю документацию</h1>
<div class="center flex-box">
  <img width="250" src="https://github.com/Sckmdg/sckmdg.github.io/blob/master/img/export.png?raw=true" alt="">
</div>
<br>
<div>
  <h1>Наследие первого ангулара</h1>
  <p>Теперь в качестве сахара надо писать <b>*</b></p>
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
</div>`
];


export const getTemplate = function (value) {
  return templates[value]
};

