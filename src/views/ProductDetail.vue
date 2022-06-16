<template>
    <main class="mt-3">
        <div class="container">
            <div class="row">
                <div class="row">
                    <div class="col-md-5">
                        <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                            </ol>
                            <div class="carousel-inner">
                                <div :class="`carousel-item i == 0 ? 'active': ''`" :key="i" v-for="(pimg, i) in productImage">
                                    <!-- <img src="" alt="..." :src="`/download/productId/pimg.path`" class="d-block w-100"> -->
                                </div>
                            </div>
                            <a href="#carouselExampleIndicators" class="carousel-control-prev" rolw="button" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="card shadow-sm">
                            <div class="card-body">
                                <h5 class="card-title">{{ productDetail.product_name }}</h5>
                                <h5 class="card-title pt-3 pb-3 border-top">{{ getCurrencyFormat(productDetail.product_price) }}</h5>
                                <p class="card-text border-top pt-3">
                                    <span class="badge bg-mark me-1">{{ productDetail.category1 }}</span>
                                    <span class="badge bg-mark me-1">{{ productDetail.category2 }}</span>
                                    <span class="badge bg-mark">{{ productDetail.category3 }}</span>
                                </p>
                                <p class="card-text pb-3">
                                    배송비 {{ getCurrencyFormat(productDetail.delivery_price) }}원 |
                                    도서산간 (제주도) 배송비 추가 {{ getCurrencyFormat(productDetail.add_delivery_price) }}원 |
                                    택배배송 | {{ productDetail.outbound_days }} 일 이내 출고 (주말, 공휴일 제외)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: 'ProductDetail',
    data () {
        return {
            productId: 0,
            productDetail: {},
            productImage: [],
            total: 1,
            totalPrice: 0
        }
    },
    
    created () {
        this.productId = this.$route.query.product_id
        this.getProductDetail()
        this.getProductImage()
    },

    methods: {
        calculatePrice (count) {
            let total = this.total + count
            if (total < 1 ) total = 1

            this.total = total
            this.totalPrice = this.productDetail.product_price * this.total
        },

        getCurrencyFormat (value) {
            return this.$currencyFormat(value)
        },

        async getProductDetail () {
            let productDetail = await this.$api("/api/productDetail", { param: [this.productId]})

            if (productDetail.length > 0) {
                this.productDetail = productDetail[0]
                this.totalPrice = this.totalPrice = this.productDetail.product_price * this.total
            }

            console.log(this.productDetail)
        },

        async getProductImage () {
            this.productImage = await this.$api("/api/productMainImages", {param: [this.productId]})
            console.log('this.productImage', this.productImage)
        }
    }
}
</script>
