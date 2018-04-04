const templates = [
  `<div class="center">
    <h1>
      Создание приложения на Angular 5
    </h1>
    <img src="https://photos-5.dropbox.com/t/2/AACSUBYzhJAc1T3qfQpX8s0B9bGvSO_lv4QAzf9alXQEtw/12/389942751/png/32x32/1/_/1/2/angular2.png/EIabzo0DGKcCIAcoBw/ye_YtgvZ7bcuBBW1zzDnjVQyX3wVG8VQgUuPMP8HTig?preserve_transparency=1&size=1600x1200&size_mode=3" alt="" width="200">
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
  <img src="https://photos-5.dropbox.com/t/2/AABwRcEDuWHEG67fT5Nb1wiX6nkbFwBScDOnaEre5ruMKQ/12/389942751/png/32x32/1/_/1/2/1_grk7btEn0OJEQRKgG2Qs2A.png/EIabzo0DGKcCIAcoBw/BRe-SjFpMZl6_lhQwWRPOFlbnnU2kdOnylDPvMXNSMw?preserve_transparency=1&size=1600x1200&size_mode=3" width="250" alt="">
  <br>
  <img src="https://photos-5.dropbox.com/t/2/AACNv5-3K0mndJI5hDBHpLPZYZrqVOZkHQB3W4qggl5z1g/12/389942751/png/32x32/1/_/1/2/angular-pyramid-alpha.png/EIabzo0DGKcCIAcoBw/9LIMi6dJGLRBeI7KRqxmuGAa6fdzINKV4p6XG_CkRmM?preserve_transparency=1&size=1600x1200&size_mode=3" width="250" alt="">
  <br>
  <img src="https://photos-6.dropbox.com/t/2/AADSQSVEk8IyWW-4VFeNpT9VyjSwA6ti6MAzcTYbJD-HUQ/12/389942751/png/32x32/1/_/1/2/sencha-extjs.png/EIabzo0DGKcCIAcoBw/amT5Rzi7bHMBatFRDTlBXfA21aKejQL35ZL9bi0pOlM?preserve_transparency=1&size=1600x1200&size_mode=3" width="350" alt="">
  <br>
  <img src="https://www.dropbox.com/pri/get/images/cli-logo.svg?_subject_uid=389942751&raw=1&size=1600x1200&size_mode=3&w=AAARnZaDsOUizILh0GEr8YNawj4tkCiyR2UrQw75x-HtxQ" width="300" alt="">
  </div>`,

  `<h1>Когда прочел всю документацию</h1>
<div class="center flex-box">
  <img width="250" src="https://photos-3.dropbox.com/t/2/AACgUb2tj3DkgnewWyhJT6OujLaE4d5sS1OdVSvdUdl1pA/12/389942751/png/32x32/1/_/1/2/export.png/EIabzo0DGKcCIAcoBw/YpfnaR-m_AbGG1b5reCkhYtdaH14xIBkGDlnSogeiL4?preserve_transparency=1&size=1600x1200&size_mode=3" alt="">
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

