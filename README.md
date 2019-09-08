# web-site-template
html/css,jQueryでなんか作る時の雛形

## sassの自動コンパイル
下記の手順でgulpのインストールを行う

**1. 作業ディレクトリへ移動**
```
$ cd 作業ディレクトリ
```

**2. グローバルにgulpをインストール**
```
$ npm install -g gulp
```

**3. ローカルにもgulpをインストール**
```
$ npm install gulp --save
```

**4. gulp実行**
```
$ gulp
```

もし ` gulp: command not found ` と表示されたら下記実行
```
$ export PATH=$PATH:./node_modules/.bin
```
