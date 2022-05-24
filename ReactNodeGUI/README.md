# ReactNodeGui

Build performant, native, cross platform desktop apps with JavaScript and CSS

## testing

[Building Native Desktop Apps with React Node GUI](https://blog.bitsrc.io/building-native-desktop-application-with-react-node-gui-2ce1b2a2164)

```bash
mkdir react-nodegui-hello-world && cd react-nodegui-hello-world
yarn init
yarn add @nodegui/nodegui react @nodegui/react-nodegui
yarn add @types/node @types/react @types/react-reconciler typescript -D
yarn install
npx tsc --init
yarn start
```

[doesn't work with React 18 type definitions](https://stackoverflow.com/questions/71817106/type-children-element-has-no-properties-in-common-with-type-intrinsicat/71820889#71820889)

```bash
git add .
git commit -am "ReactNodeGui 0.0.4"
git push
```
