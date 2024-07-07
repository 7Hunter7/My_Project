<template>
  <section class="section__projects container">
    <!-- Дочерний компонент сообщает
    родителю, что произошло изменение выбранной категории -->
    <CategoriesProject @setCategoryNow="setCategoryNow" />
    <section class="section__project container">
      <!-- Передаем значение выбранной категории из родительского компонента дочернему -->
      <CartsProjectPage :cartList="setCartfromCategory" />
    </section>
    <PaginationComponent />
  </section>
</template>

<script>
import CategoriesProject from '../blocks/CategoriesProject.vue'
import CartsProjectPage from '../blocks/CartsProjectPage.vue'
import PaginationComponent from '@/components/PaginationComponent.vue'

export default {
  name: 'ProjectsComponent',
  components: { CategoriesProject, CartsProjectPage, PaginationComponent },
  data() {
    return {
      setCategory: '',
      cartList: [],
      cartBedroom: [
        {
          id: 1,
          imgUrl: '/project/Bedroom/Bedroom_1.png',
          imgAlt: 'Bedroom_1',
          title: 'Минималистичная спальня',
          isLiked: true
        },
        {
          id: 2,
          imgUrl: '/project/Bedroom/Bedroom_2.png',
          imgAlt: 'Bedroom_2',
          title: 'Минималистичная спальня',
          isLiked: false
        },
        {
          id: 3,
          imgUrl: '/project/Bedroom/Bedroom_3.png',
          imgAlt: 'Bedroom_3',
          title: 'Классическая спальня',
          isLiked: false
        },
        {
          id: 4,
          imgUrl: '/project/Bedroom/Bedroom_4.png',
          imgAlt: 'Bedroom_4',
          title: 'Современная спальня',
          isLiked: true
        },
        {
          id: 5,
          imgUrl: '/project/Bedroom/Bedroom_5.png',
          imgAlt: 'Bedroom_5',
          title: 'Минималистичный прикроватный столик',
          isLiked: false
        },
        {
          id: 6,
          imgUrl: '/project/Bedroom/Bedroom_6.png',
          imgAlt: 'Bedroom_6',
          title: 'Столы и столики',
          isLiked: false
        },
        {
          id: 7,
          imgUrl: '/project/Bedroom/Bedroom_7.png',
          imgAlt: 'Bedroom_7',
          title: 'Современная спальня',
          isLiked: false
        },
        {
          id: 8,
          imgUrl: '/project/Bedroom/Bedroom_8.png',
          imgAlt: 'Bedroom_8',
          title: 'Современная спальня',
          isLiked: false
        }
      ],
      cartBathroom: [
        {
          id: 1,
          imgUrl: '/project/Bathroom/Bathroom_1.jpg',
          imgAlt: 'Bathroom_1',
          title: 'Современная ванная',
          isLiked: true
        },
        {
          id: 2,
          imgUrl: '/project/Bathroom/Bathroom_2.jpg',
          imgAlt: 'Bathroom_2',
          title: 'Минималистичная ванная',
          isLiked: false
        },
        {
          id: 3,
          imgUrl: '/project/Bathroom/Bathroom_3.jpg',
          imgAlt: 'Bathroom_3',
          title: 'Классическая ванная',
          isLiked: false
        },
        {
          id: 4,
          imgUrl: '/project/Bathroom/Bathroom_4.jpeg',
          imgAlt: 'Bathroom_4',
          title: 'Современная ванная',
          isLiked: true
        },
        {
          id: 5,
          imgUrl: '/project/Bathroom/Bathroom_5.jpg',
          imgAlt: 'Bathroom_5',
          title: 'Минималистичная ванная',
          isLiked: false
        }
      ],
      cartKitchen: [
        {
          id: 1,
          imgUrl: '/project/Kitchen/Kitchen_1.jpeg',
          imgAlt: 'Kitchen_1',
          title: 'Современная кухня',
          isLiked: true
        },
        {
          id: 2,
          imgUrl: '/project/Kitchen/Kitchen_2.jpg',
          imgAlt: 'Kitchen_2',
          title: 'Минималистичная кухня',
          isLiked: false
        },
        {
          id: 3,
          imgUrl: '/project/Kitchen/Kitchen_3.jpg',
          imgAlt: 'Kitchen_3',
          title: 'Классическая кухня',
          isLiked: false
        },
        {
          id: 4,
          imgUrl: '/project/Kitchen/Kitchen_4.jpg',
          imgAlt: 'Kitchen_4',
          title: 'Современная кухня',
          isLiked: true
        },
        {
          id: 5,
          imgUrl: '/project/Kitchen/Kitchen_5.jpg',
          imgAlt: 'Kitchen_5',
          title: 'Минималистичная кухня',
          isLiked: false
        },
        {
          id: 6,
          imgUrl: '/project/Kitchen/Kitchen_6.jpg',
          imgAlt: 'Kitchen_6',
          title: 'Минималистичная кухня',
          isLiked: false
        }
      ],
      cartLounge: [
        {
          id: 1,
          imgUrl: '/project/Lounge/Lounge_1.jpg',
          imgAlt: 'Lounge_1',
          title: 'Современная гостиная',
          isLiked: true
        },
        {
          id: 2,
          imgUrl: '/project/Lounge/Lounge_2.jpeg',
          imgAlt: 'Lounge_2',
          title: 'Минималистичная гостиная',
          isLiked: false
        },
        {
          id: 3,
          imgUrl: '/project/Lounge/Lounge_3.jpeg',
          imgAlt: 'Lounge_3',
          title: 'Классическая гостиная',
          isLiked: false
        },
        {
          id: 4,
          imgUrl: '/project/Lounge/Lounge_4.jpeg',
          imgAlt: 'Lounge_4',
          title: 'Современная гостиная',
          isLiked: true
        },
        {
          id: 5,
          imgUrl: '/project/Lounge/Lounge_5.jpeg',
          imgAlt: 'Lounge_5',
          title: 'Минималистичная гостиная',
          isLiked: false
        }
      ]
    }
  },
  methods: {
    //Обрабатываем событие изменения выбранной категории
    setCategoryNow(categoryNow) {
      this.setCategory = categoryNow
      console.log(this.setCategory)
    }
  },
  computed: {
    setCartfromCategory() {
      let { setCategory, cartList, cartBedroom, cartBathroom, cartKitchen, cartLounge } = this

      switch (setCategory) {
        case 'Bedroom':
          cartList = cartBedroom
          break
        case 'Bathroom':
          cartList = cartBathroom
          break
        case 'Kitchen':
          cartList = cartKitchen
          break
        case 'Lounge':
          cartList = cartLounge
          break
      }
      return cartList
    }
  }
}
</script>

<style scoped>
.section__projects {
  margin-top: 200px;
}
.section__project {
  margin-top: 61px;
  margin-bottom: 61px;
}
</style>
