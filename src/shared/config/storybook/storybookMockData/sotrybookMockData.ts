export class storybookMockData {
  static getApi(params: string) {
    return `${import.meta.env.VITE_API_URL}${params}`;
  }

  static getFlowerApi() {
    return {
      url: this.getApi('/api/flower'),
      method: 'GET',
      status: 200,
      response: [
        {
          id: 1,
          name: 'Alstroemeria'
        },
        {
          id: 2,
          name: 'Hydrangea '
        },
        {
          id: 3,
          name: 'Carnation'
        },
        {
          id: 5,
          name: 'Eustoma'
        },
        {
          id: 7,
          name: 'Lily'
        },
        {
          id: 8,
          name: 'Matiola'
        },
        {
          id: 20,
          name: 'Rose'
        },
        {
          id: 6,
          name: 'Ranunculus'
        },
        {
          id: 21,
          name: 'Tulip'
        },
        {
          id: 4,
          name: 'Gypsophila'
        },
        {
          id: 22,
          name: 'Anemone'
        },
        {
          id: 23,
          name: 'Poppy'
        },
        {
          id: 24,
          name: 'Genista'
        },
        {
          id: 25,
          name: 'Eucalyptus'
        },
        {
          id: 26,
          name: 'Fern'
        },
        {
          id: 27,
          name: 'Protea'
        },
        {
          id: 28,
          name: 'Magnolia'
        },
        {
          id: 29,
          name: 'Peony'
        },
        {
          id: 30,
          name: 'Cottonweed'
        },
        {
          id: 31,
          name: 'Mimosa'
        },
        {
          id: 32,
          name: 'Dahlia'
        },
        {
          id: 33,
          name: 'Chamomile'
        },
        {
          id: 34,
          name: 'Gerbera'
        },
        {
          id: 35,
          name: 'Daffodils'
        }
      ]
    };
  }

  static getColorApi() {
    return {
      url: this.getApi('/api/color'),
      method: 'GET',
      status: 200,
      response: [
        {
          id: 1,
          name: 'White'
        },
        {
          id: 2,
          name: 'Blue'
        },
        {
          id: 3,
          name: 'Yellow'
        },
        {
          id: 4,
          name: 'Green'
        },
        {
          id: 5,
          name: 'Brown'
        },
        {
          id: 6,
          name: 'Mix'
        },
        {
          id: 7,
          name: 'Orange'
        },
        {
          id: 8,
          name: 'Pink'
        },
        {
          id: 9,
          name: 'Violet'
        },
        {
          id: 10,
          name: 'Red'
        }
      ]
    };
  }

  static getAllFlowerCatalogPageApi() {
    return {
      url: this.getApi('/api/bouquete?page=1'),
      method: 'GET',
      status: 200,
      response: {
        content: [
          {
            id: 32,
            name: 'Serene Peonies',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973259/eq7x1aajyy2pgfk5cnxp.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973265/ut5rytsgvolzt3xupuwl.jpg'
            },
            defaultPrice: 20,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 97,
                size: 'LARGE',
                defaultPrice: 23,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 95,
                size: 'SMALL',
                defaultPrice: 15,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 96,
                size: 'MEDIUM',
                defaultPrice: 20,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          },
          {
            id: 34,
            name: 'Berry Bliss',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973491/psnkvmw2edlphoorhepc.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973497/laoy03sfobgsn3ttugdz.jpg'
            },
            defaultPrice: 30,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 103,
                size: 'LARGE',
                defaultPrice: 32,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 101,
                size: 'SMALL',
                defaultPrice: 28,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 102,
                size: 'MEDIUM',
                defaultPrice: 30,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 10
          },
          {
            id: 3,
            name: 'Spring Blossom ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713971896/rqdgqi4ycxtfei6mfzjf.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713971907/jt6loscu0guhjutjhf8c.jpg'
            },
            defaultPrice: 21,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 8,
                size: 'SMALL',
                defaultPrice: 16,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 9,
                size: 'MEDIUM',
                defaultPrice: 21,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 10,
                size: 'LARGE',
                defaultPrice: 28,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 10
          },
          {
            id: 5,
            name: 'Fiesta Vibe',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713972429/txmoq1uvdlmsuzywrwqv.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713972438/ocnkj6bps933xvuqkjrr.jpg'
            },
            defaultPrice: 23,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 16,
                size: 'LARGE',
                defaultPrice: 30,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 14,
                size: 'SMALL',
                defaultPrice: 16,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 15,
                size: 'MEDIUM',
                defaultPrice: 23,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 20
          },
          {
            id: 7,
            name: 'Vintage Romance ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973216/vhzcjxx5dk6m7ql2x9cj.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973227/zrxgmhdrf6oxvnezrgkj.jpg'
            },
            defaultPrice: 30,
            discount: 20,
            discountPrice: 24,
            sizes: [
              {
                id: 20,
                size: 'SMALL',
                defaultPrice: 25,
                isSale: true,
                discount: 20,
                discountPrice: 20
              },
              {
                id: 22,
                size: 'LARGE',
                defaultPrice: 40,
                isSale: true,
                discount: 20,
                discountPrice: 32
              },
              {
                id: 21,
                size: 'MEDIUM',
                defaultPrice: 30,
                isSale: true,
                discount: 20,
                discountPrice: 24
              }
            ],
            stockQuantity: 15
          },
          {
            id: 8,
            name: 'Rustic Charm ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973347/tuwbigyqgsm9pqwcvw76.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973357/wzjcorldkmyjx61qv9iq.jpg'
            },
            defaultPrice: 23,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 24,
                size: 'MEDIUM',
                defaultPrice: 23,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 25,
                size: 'LARGE',
                defaultPrice: 30,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 23,
                size: 'SMALL',
                defaultPrice: 18,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 20
          },
          {
            id: 49,
            name: 'Snowflake Symphony ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713982657/uosdzea14cxusknzxkqx.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713982671/fuvbpl4oxuvbkhjf6gcu.jpg'
            },
            defaultPrice: 30,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 148,
                size: 'LARGE',
                defaultPrice: 33,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 146,
                size: 'SMALL',
                defaultPrice: 28,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 147,
                size: 'MEDIUM',
                defaultPrice: 30,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 10
          },
          {
            id: 11,
            name: 'Harvest Hues ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973719/ueeikpqpbfhyrtki72ij.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973729/edowkpyf6cva6zvf6du3.jpg'
            },
            defaultPrice: 25,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 34,
                size: 'LARGE',
                defaultPrice: 30,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 32,
                size: 'SMALL',
                defaultPrice: 21,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 33,
                size: 'MEDIUM',
                defaultPrice: 25,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          },
          {
            id: 10,
            name: 'Royal Regalia ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973578/yhxu1ais7r9dcxhoxdxi.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973587/vuez2oofjhiim0ch7m2q.jpg'
            },
            defaultPrice: 18,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 30,
                size: 'MEDIUM',
                defaultPrice: 18,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 31,
                size: 'LARGE',
                defaultPrice: 23,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 29,
                size: 'SMALL',
                defaultPrice: 14,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          },
          {
            id: 41,
            name: 'Heavenly Hydrangea ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973673/a6zf2dbvjqdv89rgadrp.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973693/ay2nrg7nbgtagml7ldpv.jpg'
            },
            defaultPrice: 20,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 123,
                size: 'MEDIUM',
                defaultPrice: 20,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 122,
                size: 'SMALL',
                defaultPrice: 18,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 124,
                size: 'LARGE',
                defaultPrice: 25,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          },
          {
            id: 12,
            name: 'Enchanted Garden ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973824/awgxneisutqvesjqnsl8.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973836/wgaboi6ca2r7jnsl2lqp.jpg'
            },
            defaultPrice: 19,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 36,
                size: 'MEDIUM',
                defaultPrice: 19,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 37,
                size: 'LARGE',
                defaultPrice: 24,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 35,
                size: 'SMALL',
                defaultPrice: 16,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 20
          },
          {
            id: 38,
            name: 'Magnetic daffodils',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973903/nnd8zs2wgdj7wvr9xmld.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973908/prenx0izzazmmgynkd4l.jpg'
            },
            defaultPrice: 18,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 115,
                size: 'LARGE',
                defaultPrice: 20,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 113,
                size: 'SMALL',
                defaultPrice: 16,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 114,
                size: 'MEDIUM',
                defaultPrice: 18,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          },
          {
            id: 14,
            name: 'Whimsical Wildflower ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974039/oimdzgtwnuyegntlhtgx.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974049/ivpajbafmlqjg3brl5rx.jpg'
            },
            defaultPrice: 20,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 43,
                size: 'LARGE',
                defaultPrice: 25,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 42,
                size: 'MEDIUM',
                defaultPrice: 20,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 41,
                size: 'SMALL',
                defaultPrice: 16,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          },
          {
            id: 39,
            name: 'White Peonies',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974186/hme1kjbcrp5jupzua2ug.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974194/cfazfylxre2159rfnqev.jpg'
            },
            defaultPrice: 22,
            discount: 20,
            discountPrice: 18,
            sizes: [
              {
                id: 117,
                size: 'MEDIUM',
                defaultPrice: 22,
                isSale: true,
                discount: 20,
                discountPrice: 18
              },
              {
                id: 116,
                size: 'SMALL',
                defaultPrice: 17,
                isSale: true,
                discount: 20,
                discountPrice: 14
              },
              {
                id: 118,
                size: 'LARGE',
                defaultPrice: 25,
                isSale: true,
                discount: 20,
                discountPrice: 20
              }
            ],
            stockQuantity: 20
          },
          {
            id: 17,
            name: 'Radiant Roses ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974757/yputpkixxcgdy2e3rmvm.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974768/jdtg24plezfu5gwikyz8.jpg'
            },
            defaultPrice: 23,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 50,
                size: 'SMALL',
                defaultPrice: 19,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 52,
                size: 'LARGE',
                defaultPrice: 28,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 51,
                size: 'MEDIUM',
                defaultPrice: 23,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          },
          {
            id: 15,
            name: 'Pastel Petals ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974370/uscp4vxz33tuthrzduat.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974381/ycamazk4egpfdcxobayi.jpg'
            },
            defaultPrice: 21,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 46,
                size: 'LARGE',
                defaultPrice: 24,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 44,
                size: 'SMALL',
                defaultPrice: 19,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 45,
                size: 'MEDIUM',
                defaultPrice: 21,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 20
          },
          {
            id: 18,
            name: 'Zen Garden ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974942/vqas7wxsdkzieqh4ty2j.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713974953/v4tphsfqbmwkbg8cgc3m.jpg'
            },
            defaultPrice: 20,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 54,
                size: 'MEDIUM',
                defaultPrice: 20,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 55,
                size: 'LARGE',
                defaultPrice: 25,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 53,
                size: 'SMALL',
                defaultPrice: 15,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 20
          },
          {
            id: 20,
            name: "Cupid's Arrow ",
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975328/ucwidvd4qfg776vfxqoe.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975375/aefo4vbzzzh2q6xlrce3.jpg'
            },
            defaultPrice: 23,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 60,
                size: 'MEDIUM',
                defaultPrice: 23,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 61,
                size: 'LARGE',
                defaultPrice: 28,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 59,
                size: 'SMALL',
                defaultPrice: 16,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          },
          {
            id: 21,
            name: 'Sunshine Serenade ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975598/pu2rmzkh6m3pdkpyvpmd.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975609/whzkkambcgkjtvb6eego.jpg'
            },
            defaultPrice: 23,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 64,
                size: 'LARGE',
                defaultPrice: 28,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 62,
                size: 'SMALL',
                defaultPrice: 19,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 63,
                size: 'MEDIUM',
                defaultPrice: 23,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 20
          },
          {
            id: 23,
            name: 'Twilight Romance ',
            imageUrls: {
              '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975867/mig6xqnuztko92lfmsog.jpg',
              '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975877/tmjrxxqhsunanq6gdvvx.jpg'
            },
            defaultPrice: 60,
            discount: null,
            discountPrice: null,
            sizes: [
              {
                id: 69,
                size: 'MEDIUM',
                defaultPrice: 60,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 68,
                size: 'SMALL',
                defaultPrice: 48,
                isSale: false,
                discount: null,
                discountPrice: null
              },
              {
                id: 70,
                size: 'LARGE',
                defaultPrice: 65,
                isSale: false,
                discount: null,
                discountPrice: null
              }
            ],
            stockQuantity: 15
          }
        ],
        pageable: {
          pageNumber: 0,
          pageSize: 20,
          sort: {
            sorted: false,
            empty: true,
            unsorted: true
          },
          offset: 0,
          paged: true,
          unpaged: false
        },
        totalElements: 50,
        totalPages: 3,
        last: false,
        size: 20,
        number: 0,
        sort: {
          sorted: false,
          empty: true,
          unsorted: true
        },
        numberOfElements: 20,
        first: true,
        empty: false
      }
    };
  }

  static getPriceRange() {
    return {
      url: this.getApi('/api/bouquete/price-range'),
      method: 'GET',
      status: 200,
      response: [{ minPrice: 13, maxPrice: 60 }]
    };
  }

  static getUserWishlist() {
    return {
      url: this.getApi('/api/user/wishlist'),
      method: 'GET',
      status: 200,
      response: [
        {
          id: 34,
          name: 'Berry Bliss',
          imageUrls: {
            '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973491/psnkvmw2edlphoorhepc.jpg',
            '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973497/laoy03sfobgsn3ttugdz.jpg'
          },
          defaultPrice: 30,
          discount: null,
          discountPrice: null,
          sizes: [
            {
              id: 102,
              size: 'MEDIUM',
              defaultPrice: 30,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 101,
              size: 'SMALL',
              defaultPrice: 28,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 103,
              size: 'LARGE',
              defaultPrice: 32,
              isSale: false,
              discount: null,
              discountPrice: null
            }
          ],
          stockQuantity: 10
        }
      ]
    };
  }

  static getBs() {
    return {
      url: this.getApi('/api/bouquete/bs'),
      method: 'GET',
      status: 200,
      response: [
        {
          id: 37,
          name: 'Wine Peonies',
          imageUrls: {
            '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973825/kkfigkh5ssjijv7gc7ez.jpg',
            '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973834/cjutjllhbxjr26bfkhpt.jpg'
          },
          defaultPrice: 22,
          discount: null,
          discountPrice: null,
          sizes: [
            {
              id: 110,
              size: 'SMALL',
              defaultPrice: 17,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 111,
              size: 'MEDIUM',
              defaultPrice: 22,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 112,
              size: 'LARGE',
              defaultPrice: 25,
              isSale: false,
              discount: null,
              discountPrice: null
            }
          ],
          stockQuantity: 10
        },
        {
          id: 23,
          name: 'Twilight Romance ',
          imageUrls: {
            '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975867/mig6xqnuztko92lfmsog.jpg',
            '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975877/tmjrxxqhsunanq6gdvvx.jpg'
          },
          defaultPrice: 60,
          discount: null,
          discountPrice: null,
          sizes: [
            {
              id: 69,
              size: 'MEDIUM',
              defaultPrice: 60,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 68,
              size: 'SMALL',
              defaultPrice: 48,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 70,
              size: 'LARGE',
              defaultPrice: 65,
              isSale: false,
              discount: null,
              discountPrice: null
            }
          ],
          stockQuantity: 15
        }
      ]
    };
  }

  static getTs() {
    return {
      url: this.getApi('/api/bouquete/ts'),
      method: 'GET',
      status: 200,
      response: [
        {
          id: 37,
          name: 'Wine Peonies',
          imageUrls: {
            '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973825/kkfigkh5ssjijv7gc7ez.jpg',
            '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973834/cjutjllhbxjr26bfkhpt.jpg'
          },
          defaultPrice: 22,
          discount: null,
          discountPrice: null,
          sizes: [
            {
              id: 110,
              size: 'SMALL',
              defaultPrice: 17,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 111,
              size: 'MEDIUM',
              defaultPrice: 22,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 112,
              size: 'LARGE',
              defaultPrice: 25,
              isSale: false,
              discount: null,
              discountPrice: null
            }
          ],
          stockQuantity: 10
        },
        {
          id: 23,
          name: 'Twilight Romance ',
          imageUrls: {
            '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975867/mig6xqnuztko92lfmsog.jpg',
            '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713975877/tmjrxxqhsunanq6gdvvx.jpg'
          },
          defaultPrice: 60,
          discount: null,
          discountPrice: null,
          sizes: [
            {
              id: 69,
              size: 'MEDIUM',
              defaultPrice: 60,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 68,
              size: 'SMALL',
              defaultPrice: 48,
              isSale: false,
              discount: null,
              discountPrice: null
            },
            {
              id: 70,
              size: 'LARGE',
              defaultPrice: 65,
              isSale: false,
              discount: null,
              discountPrice: null
            }
          ],
          stockQuantity: 15
        }
      ]
    };
  }

  static getProductPage() {
    return {
      url: this.getApi('/api/bouquete/34'),
      method: 'GET',
      status: 200,
      response: {
        id: 34,
        name: 'Berry Bliss',
        itemCode: 'BQ034',
        imageUrls: {
          '1': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973491/psnkvmw2edlphoorhepc.jpg',
          '2': 'https://res.cloudinary.com/dg77kfpuv/image/upload/v1713973497/laoy03sfobgsn3ttugdz.jpg'
        },
        sizes: [
          {
            id: 102,
            size: 'MEDIUM',
            defaultPrice: 30,
            isSale: false,
            discount: null,
            discountPrice: null
          },
          {
            id: 101,
            size: 'SMALL',
            defaultPrice: 28,
            isSale: false,
            discount: null,
            discountPrice: null
          },
          {
            id: 103,
            size: 'LARGE',
            defaultPrice: 32,
            isSale: false,
            discount: null,
            discountPrice: null
          }
        ],
        flowers: [
          {
            id: 34,
            name: 'Gerbera'
          },
          {
            id: 20,
            name: 'Rose'
          }
        ],
        stockQuantity: 10
      }
    };
  }
}
