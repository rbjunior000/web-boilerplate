module.exports = function(plop) {
  plop.setGenerator('component', {
    description: 'Generate a Component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Enter component name (PascalCase):'
      },
      {
        type: 'confirm', 
        name: 'hasChildren',
        message: 'Does this component have children?',
        default: false
      }
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/component.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/component-story.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/component-test.hbs'
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/index.hbs'
      },
      {
        type: 'modify',
        path: 'src/components/index.ts',
        pattern: /(\/\* PLOP_INJECT_EXPORT \*\/)/gi,
        template: "export * from './{{pascalCase name}}';\n$1"
      }
    ]
  })
    plop.setGenerator('ui', {
      description: 'Generate a Mantine component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'Enter component name (PascalCase):'
        },
        {
          type: 'confirm', 
          name: 'hasChildren',
          message: 'Does this component have children?',
          default: false
        }
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/ui/{{pascalCase name}}/{{pascalCase name}}.tsx',
          templateFile: 'templates/base-component.hbs'
        },
        {
          type: 'add',
          path: 'src/components/ui/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
          templateFile: 'templates/component-story.hbs'
        },
        {
          type: 'add',
          path: 'src/components/ui/{{pascalCase name}}/index.ts',
          templateFile: 'templates/index.hbs'
        },
        {
          type: 'modify',
          path: 'src/components/ui/index.ts',
          pattern: /(\/\* PLOP_INJECT_EXPORT \*\/)/gi,
          template: "export * from './{{pascalCase name}}';\n$1"
        }
      ]
    });
  };
  