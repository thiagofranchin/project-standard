module.exports = function (plop) {
  plop.setGenerator('components', {
    description: 'Templates components',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.js',
        templateFile: 'components/index.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/style.js',
        templateFile: 'components/style.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.js',
        templateFile: 'components/test.js.hbs'
      }
    ]
  })
}
