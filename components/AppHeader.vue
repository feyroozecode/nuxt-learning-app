<script setup lang="ts">
    const isDarkMode = ref(false)
    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      document.body.classList.toggle('dark-mode', isDarkMode.value);
    }

</script>


<template>
    <header>
            <h1>شبكة اجتماعية للطلاب العرب</h1>
            <button @click="toggleDarkMode">تبديل الوضع</button>
            <br />
            <img src="~/assets/flag.png" alt="شبكة اجتماعية للطلاب العرب" />
            <nav>
                <ul>
                    <li><a href="#home">الرئيسية</a></li>
                    <li><a href="#profile">الملف الشخصي</a></li>
                    <li><a href="#messages">الرسائل</a></li>
                    <li><a href="#settings">الإعدادات</a></li>
                </ul>
            </nav>
    </header>
</template>

<style scoped>


header {
    background-color: #f8f9fa;
    padding: 20px;
    text-align: center;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}



</style>