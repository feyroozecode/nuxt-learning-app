<template>
  <div>
    
    <h1>
      مرحبا بك في الصفحة الرئيسية
    </h1>

    <p>
      هذه صفحة رئيسية بسيطة تم إنشاؤها باستخدام Vue.js.
    </p>



    <router-link to="/about">
      تعرف على المزيد عنا
    </router-link>



  </div>
</template>

<style scoped>
  .home {
    text-align: center;
    margin-top: 50px;
    font-family: 'Cairo', Cairo-Medium, sans-serif;
  }
  h1 {
    text-align: center;
    margin-top: 50px;
    font-family: 'Cairo', Cairo-Medium, sans-serif;
  }

  p {
    text-align: center;
  }

  router-link {
    display: block;
    text-align: center;
    margin-top: 20px;
  }

</style>


<script>

</script>