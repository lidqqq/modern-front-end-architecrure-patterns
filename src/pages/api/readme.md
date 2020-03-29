# src/pages/api/

Next.js 用の dir.

ここの下の file には極力ロジックを記述しないこと.（ライブラリへの強依存へと繋がってしまうため）

現状では Next.js の builtin 機能で express の `app.use()` 相当の request 毎へ middleware を injectin する方法が存在しないので, 手動で HOC によって container を依存する層としている.
