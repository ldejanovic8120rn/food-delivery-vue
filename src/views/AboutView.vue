<template>
  <div class="about">
    <Header subtitle="About Us" />

    <p>
      We are the best food delivery in town. Our motto is: "A fed customer is a satisfied customer."
      Speed is our
      advantage, and good organization is a virtue.
      A rich selection of food in just one place, prepared by top chefs.
      Of course, that's not all, become our member and various rewards await you. Bon appetit!
    </p>

    <div class="contact_info">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div
              class="contact_info_container d-flex flex-lg-row flex-column justify-content-between align-items-between">

              <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                <div class="contact_info_image"><img src="https://img.icons8.com/office/24/000000/iphone.png" alt="">
                </div>
                <div class="contact_info_content">
                  <div class="contact_info_title">Phone</div>
                  <div class="contact_info_text">+381 11-33-48-079</div>
                </div>
              </div>

              <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                <div class="contact_info_image"><img
                    src="https://img.icons8.com/ultraviolet/24/000000/filled-message.png" alt=""></div>
                <div class="contact_info_content">
                  <div class="contact_info_title">Email</div>
                  <div class="contact_info_text">f_delivery@mail.com</div>
                </div>
              </div>

              <div class="contact_info_item d-flex flex-row align-items-center justify-content-start">
                <div class="contact_info_image"><img src="https://img.icons8.com/ultraviolet/24/000000/map-marker.png"
                    alt=""></div>
                <div class="contact_info_content">
                  <div class="contact_info_title">Address</div>
                  <div class="contact_info_text">Kneza Mihaila 6/VI</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import Header from '@/components/Header.vue'
  
  export default {
    name: 'AboutView',

    components: {
      Header
    }
  }

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900|Rubik:300,400,500,700,900');

  p {
    margin: auto;
    text-align: justify;
    width: 50%;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
  }

  body {
    font-family: 'Rubik', sans-serif;
    font-size: 14px;
    font-weight: 400;
    background: #fff;
    color: #000000;
    margin-top: 10px;
  }

  div {
    display: block;
    position: relative;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Rubik', sans-serif;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
    text-shadow: rgba(0, 0, 0, .01) 0 0 1px;
  }

  .button {
    display: inline-block;
    background: #97cbfa;
    border-radius: 5px;
    height: 48px;
    -webkit-transition: all 200ms ease;
    -moz-transition: all 200ms ease;
    -ms-transition: all 200ms ease;
    -o-transition: all 200ms ease;
    transition: all 200ms ease;
  }

  .button a {
    display: block;
    font-size: 18px;
    font-weight: 400;
    line-height: 48px;
    color: #FFFFFF;
    padding-left: 35px;
    padding-right: 35px;
  }

  .button:hover {
    opacity: 0.8;
  }

  .contact_info {
    width: 100%;
    padding-top: 70px;
  }

  .contact_info_item {
    width: calc((100% - 60px) / 3);
    height: 100px;
    border: solid 1px #e8e8e8;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
    padding-left: 32px;
    padding-right: 15px;
  }

  .contact_info_image {
    width: 35px;
    height: 35px;
    text-align: center;
  }

  .contact_info_image img {
    max-width: 100%;
  }

  .contact_info_content {
    padding-left: 17px;
  }

  .contact_info_title {
    font-weight: 500;
  }

  .contact_info_text {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.5);
  }

  @media only screen and (max-width: 991px) {

    .contact_info_item {
      width: 100%;
      margin-bottom: 30px;
    }

    .contact_info_item:last-child {
      margin-bottom: 0px;
    }

  }

  @media only screen and (max-width: 767px) {

    .input_field {
      margin-bottom: 30px;
      width: 100%;
    }

    .input_field:last-child {
      margin-bottom: 0px;
    }
  }


  @media only screen and (max-width: 575px) {

    .contact_submit_button {
      font-size: 13px;
      padding-left: 25px;
      padding-right: 25px;
    }

  }

</style>