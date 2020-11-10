export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5faa8b8cd674a8b99b9b9434',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ppmcw7dh',
                  apiId: '2e37085d-9d73-4993-a510-ff98fb1cec53'
                },
                {
                  buildHookId: '5faa8b8cf8993bb5806db24a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dfep5bdm',
                  apiId: '5159f899-a955-47d7-a38a-e88f999b5d5b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MaorGariv/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dfep5bdm.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
