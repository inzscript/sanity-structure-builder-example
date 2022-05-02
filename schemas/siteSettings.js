export default {
    name: 'siteSettings',
    type: 'document',
    title: 'Site Settings',
    fields: [
      {
        name: 'title',
        title: 'Site title',
        type: 'string',
      },
      {
        name: 'url',
        title: 'URL',
        type: 'url',
        description: 'The main site url.',
      },
      {
        name: 'description',
        title: 'Meta Description',
        type: 'text',
      },
      {
        title: 'Main Navigation',
        name: 'mainNav',
        description: 'Select pages for the top menu',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'page' }],
          },
        ],
        },
   ],
};