# src/store/ducks/domain/

ducks pattern において domain 周りを扱う dir.

store への登録の仕方は normlizer を使って次のようにして登録すること.

```js
{
  domain: {
      [entity]: {
          byId: model[],
          allIds: id[]
      }
  }
}
```
