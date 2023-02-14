const config = (plop) => {
  plop.setGenerator('components', {
    description: 'A component generator',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: "Enter component's name",
      },
    ],

    actions: [
      {
        type: 'add',
        path: './src/components/{{pascalCase name}}/index.tsx',
        templateFile: './src/templates/components/component.hbs',
      },
      {
        type: 'add',
        templateFile: './src/templates/components/type.hbs',
        path: './src/components/{{pascalCase name}}/{{pascalCase name}}.dto.ts',
      },
      {
        type: 'modify',
        path: './src/components/index.ts',
        pattern: /(\/\/ component export)/g,
        template: "export * from './{{pascalCase name}}';\n$1",
      },
    ],
  });

  plop.setGenerator('application', {
    description: 'An application component generator',
    prompts: [
      {
        name: 'name',
        type: 'input',
        message: "Enter application's name",
      },
    ],

    actions: [
      {
        type: 'add',
        template: "export * from './container';",
        path: './src/application/{{camelCase name}}/index.ts',
      },
      {
        type: 'modify',
        pattern: /(\/\/ component export)/g,
        template: "// export * from './container';",
        path: './src/application/{{camelCase name}}/index.ts',
      },

      //* add modules folder
      {
        type: 'add',
        template: "// export * from './';",
        path: './src/application/{{camelCase name}}/modules/index.ts',
      },

      //* add container folder
       {
        type: 'add',
        template: "// export * from './';",
        path: './src/application/{{camelCase name}}/container/index.ts',
      },

      //* add services
      {
        type: 'add',
        templateFile: './src/templates/redux/services.hbs',
        path: './src/application/{{camelCase name}}/{{pascalCase name}}.services.ts',
      },

      //* add slice
      {
        type: 'add',
        templateFile: './src/templates/redux/slice.hbs',
        path: './src/application/{{camelCase name}}/{{pascalCase name}}.slice.ts',
      },

      //* modify store file
      {
        type: 'modify',
        path: './src/store/store.ts',
        pattern: /(\/\/ reducers import)/g,
        template: "import {{pascalCase name}}Reducer from 'application/{{camelCase name}}/{{pascalCase name}}.slice';\n$1",
      },
      {
        type: 'modify',
        path: './src/store/store.ts',
        pattern: /(\/\/ reducer usage)/g,
        template: "{{camelCase name}}: {{pascalCase name}}Reducer,\n$1",
      },
  // admin: AdminReducer,


      {
        type: 'modify',
        path: './src/application/index.ts',
        pattern: /(\/\/ component export)/g,
        template: "export * from './{{pascalCase name}}';\n$1",
      },
    ],
  })
}

module.exports = config
