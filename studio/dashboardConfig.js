export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6081d5e8069dc000c1fa288a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bfviamag',
                  apiId: '9de90fe9-9136-44ef-bf40-cc8a4aa84668'
                },
                {
                  buildHookId: '6081d5e87902fb00efb4234f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-eturni68',
                  apiId: '3d02f4c9-623b-4bbc-b03b-8b14b227c8ff'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/unwrittenmike/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-eturni68.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
