<template>
  <div id="footer">
      <div class="footer mt-5">
          <div class="pic-frame my-2"><img class="pic" src="./../assets/profile1.jpg"></div>
          <p class="txt mt-5">
برنامه نویسی صرفا واحد های درسی یا شغل نیست بلکه بهمون یاد میده چطوری منطقی فکر کنیم ، این عقیده منه :) و همین باعث شد به برنامه نویسی علاقه مند بشم بعد از کد نویسی با زبون های مختلف به برنامه نویسی وب علاقه مند شدم و میشه گفت این اولین پروژه ای هست که با vue.js میزنم و امیدوارم با تلاش بیشتر بتونم پروژه های قوی تری رو با این فریم ورک پیاده سازی کنم اگر با من کاری داشتین میتونین به تلگرام من به آی دی shahin_xx پیام بدید:)
          </p>
          <p class="txt mb-5">
              راستی این سایت رسپانسیوه و شما میتونین با گوشیتونم به راحتی ازش استفاده کنین
          </p>
      </div>
  </div>
</template>

<script>
export default {
name:'myFooter'
}
</script>

<style>
.footer{
    background: black;
    border-top:20px solid orangered;
    border-bottom:2px solid orangered;
    border-top-left-radius: 30%;
    border-top-right-radius: 30%;
}
.txt{
    color: #fff;
    width: 60%;
    margin: auto;
}
.pic{
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 3px solid orangered;
    margin: auto;
}
.pic-frame{
    width: 150px;
    height: 150px;
    margin: auto;
    border-radius: 100%;
}
</style>