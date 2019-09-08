'use strict';

// fractalインスタンスを作成してエクスポート
const fractal = module.exports = require('@frctl/fractal').create();
// プロジェクト関連のメタデータ設定
fractal.set('project.title', 'sample pjt');
fractal.set('project.author', 'iwashi0830');
// コンポーネントの設定
fractal.components.set('path', __dirname + '/style-guide/components');
// ドキュメントページの設定
fractal.docs.set('path', __dirname + '/style-guide/docs');
// 静的ファイルの設定
fractal.web.set('static.path', __dirname + '/app/style-sheets');
