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
            
        }
    },
}
</script>