export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'brand', title: 'Brand', type: 'string',
        options: {
            list: ['Ball','Bedat & Co','Burberry','Bulova','Bvlgari','Cartier','Casio','Christian Dior','Citizen',
            'Corum','Cyma','Ebel','Elgin','Eterna','Fendi','Frederique Constant','Gucci','Hamilton',
            'Hermès','Heuer','IWC','Jaeger-LeCoultre','Junghans','KUOE','Longines','Mondaine','Omega',
            'Piaget','Rado','Revue Thommen','Rolex','Seiko','Sinn','Tag Heuer','Tissot','Tudor',
            'Ulysse Nardin','Van Cleef','Waltham','Other',
            ],
        },
    },

    {
      name: 'slug',
      type: 'slug',
      options: { source: 'name' },
    },

    // ⭐ 多图（重点）
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image' }],
      validation: (Rule) => Rule.max(30),
    },

    {
      name: 'price',
      type: 'number',
    },

    {
        name: 'gender',
        title: 'Gender',
        type: 'array',
        of: [
            {
            type: 'string',
            options: {
                list: ["Men's", "Women's", 'Unisex'],
            },
            },
        ],
    },

    {
      name: 'movement',
      title: 'Movement Type',
      type: 'string',
      options: {
        list: ['Automatic', 'Manual Wind', 'Quartz', 'Tuning Fork', 'Pocket Watch'],
      },
    },

    {
      name: 'status',
      type: 'string',
      options: {
        list: ['available', 'sold'],
      },
      initialValue: 'available',
    },

    {
      name: 'description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      brand: 'brand',
      name: 'name',
      media: 'images.0',
    },
    prepare({ brand, name, media }) {
      return {
        title: brand && name ? `${brand} - ${name}` : name || 'Untitled',
        media,
      }
    },
  },
}