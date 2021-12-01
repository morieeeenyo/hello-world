import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // このコンポーネントに対応するhtmlファイル
  styleUrls: ['./app.component.css'] // このコンポーネントに対応するcssファイル
})

export class AppComponent {
  // 変数を定義する
  title = 'Hello World';
  isAngular=true
  string = 'angular'
}
