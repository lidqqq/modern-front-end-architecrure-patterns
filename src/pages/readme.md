# src/pages/

Next.js 用の dir.

ここの下の file には極力ロジックを記述しないこと.（ライブラリへの強依存へと繋がってしまうため）

controller などからの処理を initial state として Redux store へと保存する, みたいなことしかやらないほうがいい.
